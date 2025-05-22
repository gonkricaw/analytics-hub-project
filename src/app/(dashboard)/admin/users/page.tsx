"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import {
  PlusIcon,
  TrashIcon,
  PencilIcon,
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";

type Role = {
  id: string;
  name: string;
};

type User = {
  id: string;
  name: string;
  email: string;
  role: {
    id: string;
    name: string;
  };
  last_login_at: string | null;
  registered_at: string;
  is_ip_blocked: boolean;
  temp_password_flag: boolean;
  terms_accepted_at: string | null;
};

export default function UsersAdminPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form fields for inviting a new user
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    roleId: "",
  });

  useEffect(() => {
    fetchUsers();
    fetchRoles();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/admin/users");

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      setUsers(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Failed to load users.");
      setIsLoading(false);
    }
  };

  const fetchRoles = async () => {
    try {
      const response = await fetch("/api/admin/roles");

      if (!response.ok) {
        throw new Error("Failed to fetch roles");
      }

      const data = await response.json();
      setRoles(data);
    } catch (error) {
      console.error("Error fetching roles:", error);
      toast.error("Failed to load roles.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (value: string) => {
    setNewUser((prev) => ({ ...prev, roleId: value }));
  };

  const handleInviteUser = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newUser.name || !newUser.email || !newUser.roleId) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/admin/users/invite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to invite user");
      }

      toast.success("User invitation sent successfully.");
      setIsDialogOpen(false);

      // Reset the form
      setNewUser({
        name: "",
        email: "",
        roleId: "",
      });

      // Refresh users list
      fetchUsers();
    } catch (error) {
      console.error("Error inviting user:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to invite user",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleToggleUserStatus = async (userId: string, isBlocked: boolean) => {
    try {
      const response = await fetch(`/api/admin/users/${userId}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isBlocked: !isBlocked }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to update user status");
      }

      toast.success(
        `User ${!isBlocked ? "blocked" : "unblocked"} successfully.`,
      );

      // Refresh users list
      fetchUsers();
    } catch (error) {
      console.error("Error updating user status:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to update user status",
      );
    }
  };

  const handleResendInvitation = async (userId: string) => {
    try {
      const response = await fetch(
        `/api/admin/users/${userId}/resend-invitation`,
        {
          method: "POST",
        },
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to resend invitation");
      }

      toast.success("Invitation resent successfully.");
    } catch (error) {
      console.error("Error resending invitation:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to resend invitation",
      );
    }
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
        <h2 className="text-2xl font-semibold">User Management</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <PlusIcon className="h-4 w-4" />
              Invite New User
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Invite New User</DialogTitle>
              <DialogDescription>
                Send an invitation to a new user. They will receive an email
                with instructions to set up their account.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleInviteUser}>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={newUser.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={newUser.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select
                    value={newUser.roleId}
                    onValueChange={handleRoleChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map((role) => (
                        <SelectItem key={role.id} value={role.id}>
                          {role.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? <Spinner className="mr-2" size="sm" /> : null}
                  Send Invitation
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>
            Manage users and their access to the system.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {users.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Login</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role.name}</TableCell>
                    <TableCell>
                      {user.is_ip_blocked ? (
                        <span className="text-red-500 font-medium">
                          Blocked
                        </span>
                      ) : user.temp_password_flag ? (
                        <span className="text-amber-500 font-medium">
                          Invited
                        </span>
                      ) : (
                        <span className="text-green-500 font-medium">
                          Active
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      {user.last_login_at
                        ? new Date(user.last_login_at).toLocaleDateString()
                        : "Never"}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end items-center gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() =>
                            handleToggleUserStatus(user.id, user.is_ip_blocked)
                          }
                          title={
                            user.is_ip_blocked ? "Unblock User" : "Block User"
                          }
                        >
                          {user.is_ip_blocked ? (
                            <EyeIcon className="h-4 w-4" />
                          ) : (
                            <EyeSlashIcon className="h-4 w-4" />
                          )}
                        </Button>
                        {user.temp_password_flag && !user.last_login_at && (
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => handleResendInvitation(user.id)}
                            title="Resend Invitation"
                          >
                            <EnvelopeIcon className="h-4 w-4" />
                          </Button>
                        )}
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => {
                            /* Open edit user dialog */
                          }}
                          title="Edit User"
                        >
                          <PencilIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="py-8 text-center text-muted-foreground">
              No users found. Invite your first user to get started.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
