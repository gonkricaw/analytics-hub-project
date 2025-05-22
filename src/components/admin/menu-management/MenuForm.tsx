'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

type MenuItem = {
  id: string;
  title: string;
  parent_id: string | null;
  order: number;
  icon_class: string | null;
  type: 'link_internal' | 'link_external' | 'dropdown';
  target_url: string | null;
  content_id: string | null;
  created_at?: string;
  updated_at?: string;
  roles?: string[];
};

type Role = {
  id: string;
  name: string;
};

type Content = {
  id: string;
  title: string;
  type: string;
};

type MenuFormProps = {
  menuItem: MenuItem | null;
  roles: Role[];
  parentMenus: MenuItem[];
  contents: Content[];
  onClose: () => void;
  onSubmit: () => void;
};

export default function MenuForm({
  menuItem,
  roles,
  parentMenus,
  contents,
  onClose,
  onSubmit
}: MenuFormProps) {
  const [formData, setFormData] = useState<MenuItem>({
    id: '',
    title: '',
    parent_id: null,
    order: 0,
    icon_class: null,
    type: 'link_internal',
    target_url: null,
    content_id: null,
    roles: []
  });
  
  const [loading, setLoading] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState<Record<string, boolean>>({});
  
  // Initialize form data if editing
  useEffect(() => {
    if (menuItem) {
      // Fetch the menu item with roles
      const fetchMenuItemDetails = async () => {
        try {
          const response = await fetch(`/api/admin/menus/${menuItem.id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch menu item details');
          }
          
          const data = await response.json();
          setFormData({
            id: data.id,
            title: data.title,
            parent_id: data.parent_id,
            order: data.order,
            icon_class: data.icon_class,
            type: data.type,
            target_url: data.target_url,
            content_id: data.content_id
          });
          
          // Initialize selected roles
          const roleMap: Record<string, boolean> = {};
          data.roles.forEach((roleId: string) => {
            roleMap[roleId] = true;
          });
          setSelectedRoles(roleMap);
        } catch (error) {
          toast.error('Failed to load menu item details');
        }
      };
      
      fetchMenuItemDetails();
    } else {
      // Default values for new menu item
      setFormData({
        id: '',
        title: '',
        parent_id: null,
        order: 0,
        icon_class: null,
        type: 'link_internal',
        target_url: null,
        content_id: null
      });
      
      // Clear selected roles
      setSelectedRoles({});
    }
  }, [menuItem]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value === '' ? null : value
    });
  };
  
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value as 'link_internal' | 'link_external' | 'dropdown';
    setFormData({
      ...formData,
      type,
      // Reset appropriate fields based on type
      content_id: type !== 'link_internal' ? null : formData.content_id,
      target_url: type !== 'link_external' ? null : formData.target_url
    });
  };
  
  const handleRoleToggle = (roleId: string, checked: boolean) => {
    setSelectedRoles({
      ...selectedRoles,
      [roleId]: checked
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      
      // Get roles from the selectedRoles object
      const selectedRoleIds = Object.keys(selectedRoles).filter(
        roleId => selectedRoles[roleId]
      );
      
      if (selectedRoleIds.length === 0) {
        toast.error('Please select at least one role');
        return;
      }
      
      const payload = {
        ...formData,
        roles: selectedRoleIds
      };
      
      let url = '/api/admin/menus';
      let method = 'POST';
      
      if (menuItem) {
        url = `/api/admin/menus/${menuItem.id}`;
        method = 'PUT';
      }
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save menu item');
      }
      
      toast.success(`Menu item ${menuItem ? 'updated' : 'created'} successfully`);
      onSubmit();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to save menu item');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{menuItem ? 'Edit Menu Item' : 'Add New Menu Item'}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="parent_id">Parent Menu</Label>
            <Select
              id="parent_id"
              name="parent_id"
              value={formData.parent_id || ''}
              onChange={handleInputChange}
            >
              <option value="">None (Top Level)</option>
              {parentMenus.map((parent) => (
                // Prevent circular references by disabling self as parent
                // Also prevent setting a child as parent
                <option 
                  key={parent.id} 
                  value={parent.id}
                  disabled={parent.id === menuItem?.id || parent.parent_id === menuItem?.id}
                >
                  {parent.title}
                </option>
              ))}
            </Select>
          </div>
          
          <div>
            <Label htmlFor="order">Display Order</Label>
            <Input
              id="order"
              name="order"
              type="number"
              min="0"
              value={formData.order}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="icon_class">Icon Class (FontAwesome)</Label>
            <Input
              id="icon_class"
              name="icon_class"
              value={formData.icon_class || ''}
              onChange={handleInputChange}
              placeholder="e.g. fa-solid fa-home"
            />
          </div>
          
          <div>
            <Label htmlFor="type">Menu Type</Label>
            <Select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleTypeChange}
              required
            >
              <option value="link_internal">Internal Link</option>
              <option value="link_external">External Link</option>
              <option value="dropdown">Dropdown</option>
            </Select>
          </div>
          
          {formData.type === 'link_internal' && (
            <div>
              <Label htmlFor="content_id">Content</Label>
              <Select
                id="content_id"
                name="content_id"
                value={formData.content_id || ''}
                onChange={handleInputChange}
                required={formData.type === 'link_internal'}
              >
                <option value="">Select Content</option>
                {contents.map((content) => (
                  <option key={content.id} value={content.id}>
                    {content.title}
                  </option>
                ))}
              </Select>
            </div>
          )}
          
          {formData.type === 'link_external' && (
            <div>
              <Label htmlFor="target_url">External URL</Label>
              <Input
                id="target_url"
                name="target_url"
                value={formData.target_url || ''}
                onChange={handleInputChange}
                placeholder="https://example.com"
                required={formData.type === 'link_external'}
              />
            </div>
          )}
          
          <div>
            <Label>Roles that can see this menu item</Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {roles.map((role) => (
                <div key={role.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`role-${role.id}`}
                    checked={!!selectedRoles[role.id]}
                    onCheckedChange={(checked) => 
                      handleRoleToggle(role.id, checked === true)
                    }
                  />
                  <Label htmlFor={`role-${role.id}`} className="cursor-pointer">
                    {role.name}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Saving...' : menuItem ? 'Update' : 'Create'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
