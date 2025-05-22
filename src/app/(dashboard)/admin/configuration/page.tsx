"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";

type ConfigItem = {
  key: string;
  value: string;
  created_at: string;
  updated_at: string;
};

// Config metadata to display user-friendly names and descriptions
type ConfigMetadata = {
  [key: string]: {
    title: string;
    description: string;
    type: "text" | "number" | "json" | "boolean" | "textarea";
  };
};

const configMetadata: ConfigMetadata = {
  session_timeout_minutes: {
    title: "Session Timeout",
    description:
      "Number of minutes of inactivity before a user is automatically logged out.",
    type: "number",
  },
  login_attempts_limit: {
    title: "Failed Login Attempts Limit",
    description: "Number of failed login attempts before an account is locked.",
    type: "number",
  },
  ip_block_duration_hours: {
    title: "IP Block Duration",
    description:
      "Number of hours an IP address remains blocked after exceeding the failed login attempts limit.",
    type: "number",
  },
  password_min_length: {
    title: "Minimum Password Length",
    description: "Minimum number of characters required for user passwords.",
    type: "number",
  },
  password_require_special: {
    title: "Require Special Characters",
    description: "Whether passwords must contain special characters.",
    type: "boolean",
  },
  password_require_numbers: {
    title: "Require Numbers",
    description: "Whether passwords must contain numbers.",
    type: "boolean",
  },
  password_require_uppercase: {
    title: "Require Uppercase",
    description: "Whether passwords must contain uppercase letters.",
    type: "boolean",
  },
  system_maintenance_mode: {
    title: "Maintenance Mode",
    description:
      "Enable maintenance mode to restrict access to admin users only.",
    type: "boolean",
  },
  system_maintenance_message: {
    title: "Maintenance Message",
    description: "Message to display during maintenance mode.",
    type: "textarea",
  },
};

export default function SystemConfigAdminPage() {
  const [configItems, setConfigItems] = useState<ConfigItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form values for each config item
  const [configValues, setConfigValues] = useState<{ [key: string]: string }>(
    {},
  );

  useEffect(() => {
    fetchConfig();
  }, []);

  const fetchConfig = async () => {
    try {
      const response = await fetch("/api/admin/configuration");

      if (!response.ok) {
        throw new Error("Failed to fetch system configuration");
      }

      const data = await response.json();
      setConfigItems(data);

      // Initialize form values
      const initialValues: { [key: string]: string } = {};
      data.forEach((item: ConfigItem) => {
        initialValues[item.key] = item.value;
      });
      setConfigValues(initialValues);

      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching configuration:", error);
      toast.error("Failed to load system configuration.");
      setIsLoading(false);
    }
  };

  const handleInputChange = (key: string, value: string) => {
    setConfigValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSaveConfig = async () => {
    setIsSubmitting(true);

    try {
      const updatedConfigs = Object.keys(configValues).map((key) => ({
        key,
        value: configValues[key],
      }));

      const response = await fetch("/api/admin/configuration", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ configs: updatedConfigs }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to update configuration");
      }

      toast.success("Configuration updated successfully.");

      // Refresh configuration
      fetchConfig();
    } catch (error) {
      console.error("Error updating configuration:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to update configuration",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderConfigInput = (item: ConfigItem) => {
    const metadata = configMetadata[item.key] || {
      title: item.key,
      description: "",
      type: "text",
    };

    switch (metadata.type) {
      case "number":
        return (
          <Input
            id={item.key}
            type="number"
            value={configValues[item.key] || ""}
            onChange={(e) => handleInputChange(item.key, e.target.value)}
          />
        );
      case "boolean":
        return (
          <select
            id={item.key}
            className="w-full rounded-md border border-input bg-background px-3 py-2"
            value={configValues[item.key] || "false"}
            onChange={(e) => handleInputChange(item.key, e.target.value)}
          >
            <option value="true">Enabled</option>
            <option value="false">Disabled</option>
          </select>
        );
      case "textarea":
        return (
          <Textarea
            id={item.key}
            value={configValues[item.key] || ""}
            onChange={(e) => handleInputChange(item.key, e.target.value)}
            rows={3}
          />
        );
      case "json":
        return (
          <Textarea
            id={item.key}
            value={configValues[item.key] || ""}
            onChange={(e) => handleInputChange(item.key, e.target.value)}
            rows={5}
            className="font-mono text-sm"
          />
        );
      default:
        return (
          <Input
            id={item.key}
            value={configValues[item.key] || ""}
            onChange={(e) => handleInputChange(item.key, e.target.value)}
          />
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
        <h2 className="text-2xl font-semibold">System Configuration</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Global Settings</CardTitle>
          <CardDescription>Configure system-wide settings.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {configItems.map((item) => {
              const metadata = configMetadata[item.key] || {
                title: item.key,
                description: "",
                type: "text",
              };

              return (
                <div key={item.key} className="space-y-2">
                  <Label htmlFor={item.key}>{metadata.title}</Label>
                  {renderConfigInput(item)}
                  {metadata.description && (
                    <p className="text-sm text-muted-foreground">
                      {metadata.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handleSaveConfig} disabled={isSubmitting}>
            {isSubmitting ? <Spinner className="mr-2" size="sm" /> : null}
            Save Configuration
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
