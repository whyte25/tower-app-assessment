import type { LinkProps } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Building2 } from "lucide-react";
import type * as React from "react";
import type { ReactNode } from "react";
import { cn } from "../lib/utils";

interface HeaderProps {
  backButton?: LinkProps & {
    to: string;
    text: string;
    className?: string;
  };
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  iconWrapperClassName?: string;
  className?: string;
  containerClassName?: string;
  contentWrapperClassName?: string;
}

/**
 * A reusable header component with optional back button, title, description, and icon.
 * Uses TanStack Router for navigation and lucide-react for icons.
 */
export function Header({
  backButton,
  title,
  description,
  icon,
  iconWrapperClassName,
  className,
  containerClassName,
  contentWrapperClassName,
}: HeaderProps): React.ReactElement {
  let iconToRender: ReactNode | null = null;
  if (icon) {
    iconToRender = icon;
  } else if (title || description) {
    iconToRender = <Building2 className="h-6 w-6 text-white" />;
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 sticky top-0 z-40",
        className
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
          containerClassName
        )}
      >
        <div
          className={cn(
            "flex flex-wrap items-center gap-4",
            contentWrapperClassName
          )}
        >
          {backButton && (
            <Link
              to={backButton.to}
              className={cn(
                "flex items-center gap-2 capitalize text-gray-600 hover:text-gray-900 transition-colors group",
                backButton.className
              )}
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span>{backButton.text}</span>
            </Link>
          )}

          {(title || description || icon) && (
            <div className="flex items-center gap-3">
              {iconToRender && (
                <div
                  className={cn(
                    "w-12 h-12 bg-gradient-to-br shrink-0 from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg",
                    iconWrapperClassName
                  )}
                >
                  {iconToRender}
                </div>
              )}
              {(title || description) && (
                <div>
                  {title && (
                    <h1 className="text-3xl capitalize font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      {title}
                    </h1>
                  )}
                  {description && (
                    <p className="text-gray-600">{description}</p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.header>
  );
}
