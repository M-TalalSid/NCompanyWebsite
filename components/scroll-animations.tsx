"use client";

import type React from "react";

import { useEffect, useRef } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?:
    | "fadeInUp"
    | "fadeInLeft"
    | "fadeInRight"
    | "scaleIn"
    | "slideInUp";
  delay?: number;
  className?: string;
}

export default function ScrollAnimation({
  children,
  animation = "fadeInUp",
  delay = 0,
  className = "",
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in");
            }, delay);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const animationClasses = {
    fadeInUp: "translate-y-8 opacity-0",
    fadeInLeft: "-translate-x-8 opacity-0",
    fadeInRight: "translate-x-8 opacity-0",
    scaleIn: "scale-95 opacity-0",
    slideInUp: "translate-y-full opacity-0",
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-500 ease-out ${animationClasses[animation]} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
