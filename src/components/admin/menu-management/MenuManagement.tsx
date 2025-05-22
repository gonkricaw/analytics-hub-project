'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Spinner } from '@/components/ui/spinner';
import { toast } from 'sonner';
import { DeleteConfirmDialog } from './DeleteConfirmDialog';
import MenuForm from './MenuForm';
import { PlusIcon, PencilIcon, TrashIcon } from 'lucide-react';

type MenuItem = {
  id: string;
  title: string;
  parent_id: string | null;
  order: number;
  icon_class: string | null;
  type: 'link_internal' | 'link_external' | 'dropdown';
  target_url: string | null;
  content_id: string | null;
  created_at: string;
  updated_at: string;
  children?: MenuItem[];
};

type Role = {
  id: string;
  name: string;
};

export default function MenuManagement() {
  const router = useRouter();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentMenuItem, setCurrentMenuItem] = useState<MenuItem | null>(null);
  const [roles, setRoles] = useState<Role[]>([]);
  const [parentMenus, setParentMenus] = useState<MenuItem[]>([]);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [menuToDelete, setMenuToDelete] = useState<string | null>(null);
  const [contents, setContents] = useState<any[]>([]);

  // Fetch all menu items
  const fetchMenuItems = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/menus');
      
      if (!response.ok) {
        throw new Error('Failed to fetch menu items');
      }
      
      const data = await response.json();
      setMenuItems(data);
      
      // Extract parent menus (top-level items and their immediate children)
      const parents: MenuItem[] = [];
      data.forEach((item: MenuItem) => {
        parents.push(item);
        if (item.children) {
          item.children.forEach(child => {
            parents.push(child);
          });
        }
      });
      
      setParentMenus(parents);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      toast.error('Failed to fetch menu items');
    } finally {
      setLoading(false);
    }
  };

  // Fetch roles
  const fetchRoles = async () => {
    try {
      const response = await fetch('/api/admin/roles');
      
      if (!response.ok) {
        throw new Error('Failed to fetch roles');
      }
      
      const data = await response.json();
      setRoles(data);
    } catch (err) {
      toast.error('Failed to fetch roles');
    }
  };

  // Fetch content items
  const fetchContents = async () => {
    try {
      const response = await fetch('/api/admin/content');
      
      if (!response.ok) {
        throw new Error('Failed to fetch content items');
      }
      
      const data = await response.json();
      setContents(data);
    } catch (err) {
      toast.error('Failed to fetch content items');
    }
  };

  useEffect(() => {
    fetchMenuItems();
    fetchRoles();
    fetchContents();
  }, []);

  const handleAddMenu = () => {
    setCurrentMenuItem(null);
    setIsFormOpen(true);
  };

  const handleEditMenu = (menuItem: MenuItem) => {
    setCurrentMenuItem(menuItem);
    setIsFormOpen(true);
  };

  const handleDeleteMenu = (id: string) => {
    setMenuToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!menuToDelete) return;
    
    try {
      const response = await fetch(`/api/admin/menus/${menuToDelete}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to delete menu item');
      }
      
      toast.success('Menu item deleted successfully');
      fetchMenuItems();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to delete menu item');
    } finally {
      setIsDeleteDialogOpen(false);
      setMenuToDelete(null);
    }
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setCurrentMenuItem(null);
  };

  const handleFormSubmit = () => {
    fetchMenuItems();
    setIsFormOpen(false);
    setCurrentMenuItem(null);
  };

  // Helper function to get icon rendering
  const renderIcon = (iconClass: string | null) => {
    if (!iconClass) return 'None';
    return <i className={iconClass}>{iconClass}</i>;
  };

  // Helper function to get parent menu name
  const getParentName = (parentId: string | null) => {
    if (!parentId) return 'None';
    const parent = parentMenus.find(item => item.id === parentId);
    return parent ? parent.title : 'Unknown';
  };

  // Helper function to get type display
  const getTypeDisplay = (type: string) => {
    switch (type) {
      case 'link_internal': return 'Internal Link';
      case 'link_external': return 'External Link';
      case 'dropdown': return 'Dropdown';
      default: return type;
    }
  };

  // Helper function for nested menu items display
  const renderMenuItems = (items: MenuItem[]) => {
    if (!items || items.length === 0) {
      return <TableRow><TableCell colSpan={6} className="text-center">No menu items found</TableCell></TableRow>;
    }

    return items.map((item) => (
      <TableRow key={item.id}>
        <TableCell className="font-medium">{item.title}</TableCell>
        <TableCell>{getParentName(item.parent_id)}</TableCell>
        <TableCell>{item.order}</TableCell>
        <TableCell>{renderIcon(item.icon_class)}</TableCell>
        <TableCell>{getTypeDisplay(item.type)}</TableCell>
        <TableCell>
          <div className="flex space-x-2 justify-end">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => handleEditMenu(item)}
              className="h-8 w-8 p-0"
            >
              <PencilIcon className="h-4 w-4" />
            </Button>
            <Button 
              variant="destructive" 
              size="sm" 
              onClick={() => handleDeleteMenu(item.id)}
              className="h-8 w-8 p-0"
            >
              <TrashIcon className="h-4 w-4" />
            </Button>
          </div>
        </TableCell>
      </TableRow>
    ));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-destructive/20 p-4 rounded-md">
        <p className="text-destructive">Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Menu Items</h2>
        <Button onClick={handleAddMenu}>
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Menu Item
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Parent</TableHead>
              <TableHead>Order</TableHead>
              <TableHead>Icon</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {renderMenuItems(menuItems)}
          </TableBody>
        </Table>
      </div>

      {isFormOpen && (
        <MenuForm
          menuItem={currentMenuItem}
          roles={roles}
          parentMenus={parentMenus}
          contents={contents}
          onClose={handleFormClose}
          onSubmit={handleFormSubmit}
        />
      )}

      <DeleteConfirmDialog
        open={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={confirmDelete}
        title="Delete Menu Item"
        description="Are you sure you want to delete this menu item? This action cannot be undone."
      />
    </div>
  );
}
