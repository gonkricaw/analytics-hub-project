'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Spinner } from '@/components/ui/spinner';
import { toast } from 'sonner';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

type IPBlock = {
  ip_address: string;
  blocked_until: string;
  created_at: string;
};

export default function IPBlockingAdminPage() {
  const [ipBlocks, setIPBlocks] = useState<IPBlock[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form fields for blocking a new IP
  const [newBlock, setNewBlock] = useState({
    ipAddress: '',
    hours: 24, // Default block duration: 24 hours
  });
  
  useEffect(() => {
    fetchIPBlocks();
  }, []);
  
  const fetchIPBlocks = async () => {
    try {
      const response = await fetch('/api/admin/ip-blocks');
      
      if (!response.ok) {
        throw new Error('Failed to fetch IP blocks');
      }
      
      const data = await response.json();
      setIPBlocks(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching IP blocks:', error);
      toast.error('Failed to load IP blocks.');
      setIsLoading(false);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBlock((prev) => ({ 
      ...prev, 
      [name]: name === 'hours' ? parseInt(value) || 0 : value 
    }));
  };
  
  const handleBlockIP = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newBlock.ipAddress) {
      toast.error('Please enter an IP address.');
      return;
    }
    
    if (!newBlock.hours || newBlock.hours <= 0) {
      toast.error('Please enter a valid duration in hours.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/admin/ip-blocks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ipAddress: newBlock.ipAddress,
          hours: newBlock.hours,
        }),
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to block IP');
      }
      
      toast.success('IP address blocked successfully.');
      setIsDialogOpen(false);
      
      // Reset the form
      setNewBlock({
        ipAddress: '',
        hours: 24,
      });
      
      // Refresh IP blocks list
      fetchIPBlocks();
    } catch (error) {
      console.error('Error blocking IP:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to block IP');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleUnblockIP = async (ipAddress: string) => {
    try {
      const response = await fetch(`/api/admin/ip-blocks/${encodeURIComponent(ipAddress)}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to unblock IP');
      }
      
      toast.success('IP address unblocked successfully.');
      
      // Refresh IP blocks list
      fetchIPBlocks();
    } catch (error) {
      console.error('Error unblocking IP:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to unblock IP');
    }
  };
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };
  
  const isIPExpired = (blockedUntil: string) => {
    return new Date(blockedUntil) < new Date();
  };
  
  if (isLoading) {
    return (
      <div className="flex h-[calc(100vh-200px)] items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">IP Blocking Management</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <PlusIcon className="h-4 w-4" />
              Block New IP
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Block IP Address</DialogTitle>
              <DialogDescription>
                Block an IP address for a specified duration to prevent access to the system.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleBlockIP}>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="ipAddress">IP Address</Label>
                  <Input
                    id="ipAddress"
                    name="ipAddress"
                    placeholder="192.168.1.1"
                    value={newBlock.ipAddress}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hours">Block Duration (hours)</Label>
                  <Input
                    id="hours"
                    name="hours"
                    type="number"
                    min="1"
                    placeholder="24"
                    value={newBlock.hours}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? <Spinner className="mr-2" size="sm" /> : null}
                  Block IP
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Blocked IP Addresses</CardTitle>
          <CardDescription>
            Manage IP addresses that are blocked from accessing the system.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {ipBlocks.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>IP Address</TableHead>
                  <TableHead>Blocked Until</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ipBlocks.map((block) => (
                  <TableRow key={block.ip_address}>
                    <TableCell className="font-medium">{block.ip_address}</TableCell>
                    <TableCell>{formatDate(block.blocked_until)}</TableCell>
                    <TableCell>
                      {isIPExpired(block.blocked_until) ? (
                        <span className="text-amber-500 font-medium">Expired</span>
                      ) : (
                        <span className="text-red-500 font-medium">Active</span>
                      )}
                    </TableCell>
                    <TableCell>{formatDate(block.created_at)}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => handleUnblockIP(block.ip_address)}
                        title="Unblock IP"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="py-8 text-center text-muted-foreground">
              No blocked IP addresses found.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
