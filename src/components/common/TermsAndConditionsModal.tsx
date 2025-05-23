"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { sanitizeHtml } from "@/components/ui/sanitized-html";

interface TermsAndConditions {
  id: string;
  content_html: string;
  version: string;
  published_at: string;
}

export default function TermsAndConditionsModal() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [termsContent, setTermsContent] = useState<TermsAndConditions | null>(
    null,
  );

  useEffect(() => {
    // Check if user is authenticated but has not accepted terms
    const checkTermsStatus = async () => {
      if (status === "authenticated") {
        try {
          const response = await fetch("/api/users/me");
          const userData = await response.json();

          if (!userData.terms_accepted_at) {
            fetchTermsContent();
            setIsOpen(true);
          }
        } catch (error) {
          console.error("Error checking terms status:", error);
        }
      }
    };

    checkTermsStatus();
  }, [status]);

  const fetchTermsContent = async () => {
    try {
      const response = await fetch("/api/terms-and-conditions");

      if (!response.ok) {
        throw new Error("Failed to fetch terms and conditions");
      }

      const data = await response.json();
      setTermsContent(data);
    } catch (error) {
      console.error("Error fetching terms and conditions:", error);
      toast.error("Failed to load terms and conditions");
    }
  };

  const handleAcceptTerms = async () => {
    if (!termsAccepted) {
      toast.error("You must accept the terms and conditions to continue.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/users/me/terms-acceptance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          termsId: termsContent?.id,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to accept terms");
      }

      toast.success("Terms and conditions accepted.");
      setIsOpen(false);
    } catch (error) {
      console.error("Error accepting terms:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to accept terms",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        // Prevent the modal from closing when clicking outside
        if (!open) return;
        setIsOpen(open);
      }}
    >
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Terms and Conditions
          </DialogTitle>
          <DialogDescription>
            Please read and accept our terms and conditions to continue using
            the platform.
          </DialogDescription>
        </DialogHeader>

        <div className="my-4 overflow-y-auto max-h-[50vh] p-4 border rounded bg-slate-800">
          {termsContent ? (
            <div>
              <h2 className="font-semibold text-lg mb-2">
                Version {termsContent.version}
              </h2>
              <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(termsContent.content_html) }} />
            </div>
          ) : (
            <div className="flex justify-center items-center py-8">
              <Spinner size="md" />
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={termsAccepted}
            onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
          />
          <Label htmlFor="terms">
            I have read and agree to the terms and conditions
          </Label>
        </div>

        <DialogFooter>
          <Button
            type="button"
            onClick={handleAcceptTerms}
            disabled={!termsAccepted || !termsContent || isSubmitting}
          >
            {isSubmitting && <Spinner className="mr-2" size="sm" />}
            Accept and Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
