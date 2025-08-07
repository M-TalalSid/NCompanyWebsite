"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransitions({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    if (children !== displayChildren) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setIsTransitioning(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [children, displayChildren]);

  return (
    <div className="relative">
      {/* Page transition overlay */}
      <div
        className={`fixed inset-0 z-50 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 transition-all duration-300 ${
          isTransitioning ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <div className="text-white text-xl font-semibold">Loading...</div>
          </div>
        </div>
      </div>

      {/* Page content */}
      <div
        className={`transition-all duration-300 ${
          isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        {displayChildren}
      </div>
    </div>
  );
}
