"use client";
import React from "react";
import { cn } from "@/lib/utils";

export interface AceternityButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const AceternityButton = React.forwardRef<HTMLButtonElement, AceternityButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseClasses = "relative inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group";
    
    const variantClasses = {
      primary: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 focus:ring-cyan-500 shadow-lg hover:shadow-xl hover:shadow-cyan-500/25",
      secondary: "bg-white dark:bg-slate-900 text-black dark:text-white border border-neutral-200 dark:border-slate-700 hover:bg-neutral-50 dark:hover:bg-slate-800 focus:ring-neutral-500 shadow-md hover:shadow-lg",
      outline: "border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white focus:ring-cyan-500 bg-transparent hover:shadow-lg hover:shadow-cyan-500/25"
    };
    
    const sizeClasses = {
      sm: "px-4 py-2 text-sm rounded-md",
      md: "px-6 py-3 text-base rounded-lg",
      lg: "px-8 py-4 text-lg rounded-lg"
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          "before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-[100%]",
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

AceternityButton.displayName = "AceternityButton";

export { AceternityButton };