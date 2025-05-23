"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";

import { Mail, ArrowLeft, Send } from "lucide-react";

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

const APP_NAME = "Indonet Analytics Hub"; // Or fetch dynamically if needed

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    setIsLoading(true);
    try {
      // Simulate API call for password reset
      // Replace with your actual API endpoint and logic
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "An unknown error occurred." }));
        throw new Error(errorData.error || "Failed to send reset link.");
      }

      toast.success("Password reset link sent! Please check your email.");
      // Optionally, redirect the user or clear the form
      // router.push("/login"); 
      form.reset();

    } catch (error) {
      console.error("Forgot password error:", error);
      toast.error(error instanceof Error ? error.message : "An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-4xl lg:grid lg:grid-cols-2 rounded-xl shadow-2xl overflow-hidden">
        {/* Left Pane */}
        <div className="hidden lg:flex flex-col items-center justify-center p-12 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-center">
          <Link href="/" className="mb-8">
            <Image src="/logo.png" alt={`${APP_NAME} Logo`} width={80} height={80} className="rounded-full" />
          </Link>
          <h1 className="text-4xl font-bold mb-4">Forgot Your Password?</h1>
          <p className="text-slate-300 text-lg">
            No worries! Enter your email address and we&apos;ll send you a link to reset it.
          </p>
        </div>

        {/* Right Pane - Forgot Password Form */}
        <div className="bg-slate-900 p-8 sm:p-12 flex flex-col justify-center">
          <div className="w-full max-w-md mx-auto">
            <div className="text-center lg:hidden mb-8">
                <Link href="/" className="inline-block mb-4">
                    <Image src="/logo.png" alt={`${APP_NAME} Logo`} width={60} height={60} className="rounded-full" />
                </Link>
                 <h2 className="text-2xl font-bold text-white">Forgot Password?</h2>
            </div>
            
            <h2 className="text-3xl font-bold text-center mb-2 text-white">Reset Password</h2>
            <p className="text-slate-400 text-center mb-8">
              Enter the email address associated with your account.
            </p>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-slate-300">Email Address</Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10 bg-slate-800 border-slate-700 focus:border-purple-500 text-white"
                    {...form.register("email")}
                    disabled={isLoading}
                  />
                </div>
                {form.formState.errors.email && (
                  <p className="mt-1 text-xs text-red-400">{form.formState.errors.email.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? <Spinner size="sm" className="mr-2" /> : <Send className="mr-2 h-5 w-5" />}
                Send Reset Link
              </Button>
            </form>

            <div className="mt-8 text-center">
              <Link
                href="/login"
                className="text-sm font-medium text-purple-400 hover:text-purple-300 inline-flex items-center"
              >
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}