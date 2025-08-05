"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, RefreshCw, Mail, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-64 sm:h-64 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center w-full max-w-2xl mx-auto">
        {/* Error Icon */}
        <div className="mb-6 sm:mb-8 animate-bounce-in">
          <div className="w-16 h-16 sm:w-24 sm:h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 border-2 border-red-400/50">
            <AlertTriangle className="w-8 h-8 sm:w-12 sm:h-12 text-red-400" />
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-6 sm:mb-8 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Something Went Wrong
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-purple-200 leading-relaxed mb-3 sm:mb-4 px-2 sm:px-0">
            We encountered an unexpected error while loading this page. 
            Don't worry, our team has been notified and is working to fix it.
          </p>
          <div className="bg-red-500/10 border border-red-400/30 rounded-lg sm:rounded-xl p-3 sm:p-4 mt-4 sm:mt-6">
            <p className="text-red-300 text-xs sm:text-sm font-mono break-words">
              {error.message || "An unexpected error occurred"}
            </p>
            {error.digest && (
              <p className="text-red-400 text-xs mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="relative mb-8 sm:mb-12">
          <div className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 w-8 h-8 sm:w-16 sm:h-16 bg-red-500/20 rounded-full animate-float"></div>
          <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-12 sm:h-12 bg-purple-500/20 rounded-full animate-float-delayed"></div>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 sm:-bottom-6 w-10 h-10 sm:w-20 sm:h-20 bg-pink-500/20 rounded-full animate-float-slow"></div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 sm:space-y-0 sm:space-x-3 lg:space-x-4 sm:flex sm:justify-center animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <Button
            onClick={reset}
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
          >
            <RefreshCw className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-180 transition-transform duration-300" />
            Try Again
          </Button>
          
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-purple-400 text-purple-200 hover:bg-purple-800/50 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Additional Help */}
        <div className="mt-8 sm:mt-12 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-purple-700/50">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
              Still Having Issues?
            </h3>
            <p className="text-sm sm:text-base text-purple-200 mb-4 sm:mb-6">
              If the problem persists, our support team is ready to help you resolve it.
            </p>
            <Button
              asChild
              variant="ghost"
              className="text-purple-300 hover:text-white hover:bg-purple-700/50 transition-all duration-300 text-sm sm:text-base"
            >
              <Link href="/contact">
                <Mail className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Contact Support
              </Link>
            </Button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-6 sm:mt-8 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <Link 
              href="/about" 
              className="text-purple-300 hover:text-white transition-colors duration-300"
            >
              About Us
            </Link>
            <span className="text-purple-500 hidden sm:inline">•</span>
            <Link 
              href="/services" 
              className="text-purple-300 hover:text-white transition-colors duration-300"
            >
              Services
            </Link>
            <span className="text-purple-500 hidden sm:inline">•</span>
            <Link 
              href="/blog" 
              className="text-purple-300 hover:text-white transition-colors duration-300"
            >
              Blog
            </Link>
            <span className="text-purple-500 hidden sm:inline">•</span>
            <Link 
              href="/contact" 
              className="text-purple-300 hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Error Information */}
        <div className="mt-6 sm:mt-8 text-center animate-fade-in-up" style={{ animationDelay: "800ms" }}>
          <p className="text-purple-400 text-xs sm:text-sm">
            We apologize for the inconvenience
          </p>
          <p className="text-purple-500 text-xs mt-1">
            This error has been logged and our team will investigate it.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 left-4 sm:top-10 sm:left-10 opacity-20">
        <div className="w-1 h-1 sm:w-2 sm:h-2 bg-red-400 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute top-8 right-8 sm:top-20 sm:right-20 opacity-20">
        <div className="w-1 h-1 sm:w-3 sm:h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
      </div>
      <div className="absolute bottom-8 left-8 sm:bottom-20 sm:left-20 opacity-20">
        <div className="w-1 h-1 sm:w-2 sm:h-2 bg-pink-400 rounded-full animate-pulse delay-600"></div>
      </div>
      <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 opacity-20">
        <div className="w-1 h-1 sm:w-3 sm:h-3 bg-red-400 rounded-full animate-pulse delay-900"></div>
      </div>
    </div>
  );
} 