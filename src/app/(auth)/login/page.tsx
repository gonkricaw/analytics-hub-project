"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Spinner } from "@/components/ui/spinner"

import { Mail, Lock, Eye, EyeOff, LogInIcon } from "lucide-react";

// Placeholder icons for social media - consider using a library like react-icons or custom SVGs
const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M20.94 11c0-1.06-.09-2.09-.26-3.09H12v5.89h5.02c-.26 1.48-1.04 2.75-2.21 3.62v2.84h3.65c2.13-1.96 3.38-4.85 3.38-8.26z"/><path d="M12 22c2.97 0 5.46-.98 7.28-2.66l-3.65-2.84c-.98.66-2.23 1.06-3.63 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 19.53 7.7 22 12 22z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
);
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const APP_NAME = "Indonet Analytics Hub"; // Or fetch dynamically if needed

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
        // callbackUrl: "/dashboard", // Or your desired redirect path
      });

      if (result?.error) {
        toast.error(result.error || "Login failed. Please check your credentials.");
      } else if (result?.ok) {
        toast.success("Login successful! Redirecting...");
        router.push("/home"); // Default redirect, adjust as needed
      } else {
        toast.error("An unexpected error occurred during login.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider: "google" | "facebook") => {
    setIsLoading(true);
    try {
      await signIn(provider, { callbackUrl: "/home" });
      // signIn will handle redirection, or you can handle it based on result if redirect:false
    } catch (error) {
      toast.error(`Failed to sign in with ${provider}.`);
      setIsLoading(false);
    }
    // setIsLoading(false) might not be reached if signIn redirects successfully
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-4xl lg:grid lg:grid-cols-2 rounded-xl shadow-2xl overflow-hidden">
        {/* Left Pane */}
        <div className="hidden lg:flex flex-col items-center justify-center p-12 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-center">
          <Link href="/" className="mb-8">
            <Image src="/logo.png" alt={`${APP_NAME} Logo`} width={80} height={80} className="rounded-full" />
          </Link>
          <h1 className="text-4xl font-bold mb-4">Welcome to {APP_NAME}!</h1>
          <p className="text-slate-300 text-lg">
            Sign in to access your personalized analytics dashboard and unlock powerful insights.
          </p>
        </div>

        {/* Right Pane - Login Form */}
        <div className="bg-slate-900 p-8 sm:p-12 flex flex-col justify-center">
          <div className="w-full max-w-md mx-auto">
            <div className="text-center lg:hidden mb-8">
                <Link href="/" className="inline-block mb-4">
                    <Image src="/logo.png" alt={`${APP_NAME} Logo`} width={60} height={60} className="rounded-full" />
                </Link>
                <h2 className="text-2xl font-bold text-white">Welcome Back!</h2>
            </div>
            
            <h2 className="text-3xl font-bold text-center mb-2 text-white">Login</h2>
            <p className="text-slate-400 text-center mb-8">Enter your credentials to access your account.</p>

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

              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10 bg-slate-800 border-slate-700 focus:border-purple-500 text-white"
                    {...form.register("password")}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {form.formState.errors.password && (
                  <p className="mt-1 text-xs text-red-400">{form.formState.errors.password.message}</p>
                )}
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="rememberMe"
                    className="border-slate-600 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                    {...form.register("rememberMe")}
                    disabled={isLoading}
                  />
                  <Label htmlFor="rememberMe" className="text-slate-300 font-normal">Remember me</Label>
                </div>
                <Link href="/forgot-password" className="font-medium text-purple-400 hover:text-purple-300">
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? <Spinner size="sm" className="mr-2" /> : <LogInIcon className="mr-2 h-5 w-5" />}
                Login
              </Button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}