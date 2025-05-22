"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Table } from "@/components/ui/table";
import { Spinner } from "@/components/ui/spinner";
import { format } from "date-fns";
import { toast } from "sonner";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuditLog {
  id: string;
  user_id: string | null;
  user?: User | null;
  action_type: string;
  target_resource: string;
  target_resource_id: string | null;
  ip_address: string;
  details: any;
  created_at: string;
}

interface Pagination {
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
}

export default function AuditLogsPage() {
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 20,
    totalCount: 0,
    totalPages: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  // Filter states
  const [userId, setUserId] = useState("");
  const [actionType, setActionType] = useState("");
  const [resource, setResource] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  // Fetch audit logs
  const fetchAuditLogs = async (page: number = 1) => {
    setIsLoading(true);

    try {
      // Build query parameters
      const params = new URLSearchParams();
      params.append("page", page.toString());
      params.append("limit", pagination.limit.toString());

      if (userId) params.append("userId", userId);
      if (actionType) params.append("actionType", actionType);
      if (resource) params.append("resource", resource);
      if (ipAddress) params.append("ipAddress", ipAddress);
      if (fromDate) params.append("fromDate", fromDate);
      if (toDate) params.append("toDate", toDate);

      const response = await fetch(
        `/api/admin/audit-logs?${params.toString()}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch audit logs");
      }

      const data = await response.json();
      setAuditLogs(data.auditLogs);
      setPagination(data.pagination);
    } catch (error) {
      console.error("Error fetching audit logs:", error);
      toast.error("Failed to fetch audit logs");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle page change
  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > pagination.totalPages) return;
    fetchAuditLogs(newPage);
  };

  // Handle filter submit
  const handleFilterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchAuditLogs(1); // Reset to first page when filtering
  };

  // Handle filter reset
  const handleFilterReset = () => {
    setUserId("");
    setActionType("");
    setResource("");
    setIpAddress("");
    setFromDate("");
    setToDate("");
    fetchAuditLogs(1);
  };

  // Format details for display
  const formatDetails = (details: string | null | undefined): string => {
    if (!details) return "N/A";

    try {
      const parsedDetails =
        typeof details === "string" ? JSON.parse(details) : details;
      return JSON.stringify(parsedDetails, null, 2);
    } catch (error) {
      return String(details);
    }
  };

  // Load audit logs on component mount
  useEffect(() => {
    fetchAuditLogs();
  }, []);

  return (
    <div className="container mx-auto py-6 space-y-6">
      <h1 className="text-3xl font-bold">Audit Logs</h1>

      {/* Filter Form */}
      <Card className="p-6">
        <form onSubmit={handleFilterSubmit} className="space-y-4">
          <h2 className="text-xl font-semibold">Filters</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="userId"
                className="block text-sm font-medium mb-1"
              >
                User ID
              </label>
              <Input
                id="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Filter by user ID"
              />
            </div>

            <div>
              <label
                htmlFor="actionType"
                className="block text-sm font-medium mb-1"
              >
                Action Type
              </label>
              <Input
                id="actionType"
                value={actionType}
                onChange={(e) => setActionType(e.target.value)}
                placeholder="USER_LOGIN, CONTENT_UPDATE, etc."
              />
            </div>

            <div>
              <label
                htmlFor="resource"
                className="block text-sm font-medium mb-1"
              >
                Resource
              </label>
              <Input
                id="resource"
                value={resource}
                onChange={(e) => setResource(e.target.value)}
                placeholder="USER, CONTENT, etc."
              />
            </div>

            <div>
              <label
                htmlFor="ipAddress"
                className="block text-sm font-medium mb-1"
              >
                IP Address
              </label>
              <Input
                id="ipAddress"
                value={ipAddress}
                onChange={(e) => setIpAddress(e.target.value)}
                placeholder="Filter by IP address"
              />
            </div>

            <div>
              <label
                htmlFor="fromDate"
                className="block text-sm font-medium mb-1"
              >
                From Date
              </label>
              <Input
                id="fromDate"
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="toDate"
                className="block text-sm font-medium mb-1"
              >
                To Date
              </label>
              <Input
                id="toDate"
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={handleFilterReset}>
              Reset
            </Button>
            <Button type="submit">Apply Filters</Button>
          </div>
        </form>
      </Card>

      {/* Audit Log Table */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Audit Log Records</h2>

        {isLoading ? (
          <div className="flex justify-center py-8">
            <Spinner size="lg" />
          </div>
        ) : auditLogs.length === 0 ? (
          <div className="text-center py-8">
            <p>No audit logs found.</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <Table>
                <thead>
                  <tr>
                    <th>Timestamp</th>
                    <th>User</th>
                    <th>Action</th>
                    <th>Resource</th>
                    <th>IP Address</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {auditLogs.map((log) => (
                    <tr key={log.id}>
                      <td>
                        {format(
                          new Date(log.created_at),
                          "yyyy-MM-dd HH:mm:ss",
                        )}
                      </td>
                      <td>
                        {log.user ? (
                          <span title={log.user.email}>{log.user.name}</span>
                        ) : (
                          <span className="text-muted-foreground">System</span>
                        )}
                      </td>
                      <td>{log.action_type}</td>
                      <td>
                        {log.target_resource}
                        {log.target_resource_id && (
                          <span className="text-xs text-muted-foreground ml-1">
                            ({log.target_resource_id})
                          </span>
                        )}
                      </td>
                      <td>{log.ip_address}</td>
                      <td>
                        <details>
                          <summary>View Details</summary>
                          <pre className="text-xs mt-2 p-2 bg-muted rounded-md overflow-x-auto max-w-sm max-h-40">
                            {formatDetails(log.details)}
                          </pre>
                        </details>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
              <div className="text-sm text-muted-foreground">
                Showing {auditLogs.length} of {pagination.totalCount} records
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(pagination.page - 1)}
                  disabled={pagination.page === 1}
                >
                  Previous
                </Button>
                <span className="flex items-center px-2">
                  Page {pagination.page} of {pagination.totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(pagination.page + 1)}
                  disabled={pagination.page === pagination.totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}
