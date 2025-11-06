"use client";

import React, { useState } from "react";
import StaggerAnimation from "@/components/ui/shared/Animation/StaggerAnimation";
import { Check, Copy } from "lucide-react";

interface ContactInfoItemProps {
  delay: number;
  icon: React.ElementType;
  title: string;
  value: string;
  copy?: boolean;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  delay,
  icon: Icon,
  title,
  value,
  copy = false,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!copy) return;
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <StaggerAnimation delay={delay}>
      <div
        onClick={handleCopy}
        className={`flex gap-4 hover-item p-3 rounded-lg transition-all ${
          copy ? "cursor-pointer group" : ""
        }`}
      >
        {/* Icon box */}
        <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 relative">
          <Icon className="text-primary" size={24} />

          {copy && (
            <div className="absolute -right-2 -bottom-2 bg-primary text-background p-1 rounded-md text-[10px] opacity-0 group-hover:opacity-100 transition-all">
              Copy
            </div>
          )}
        </div>

        {/* Text */}
        <div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p
            className={`text-foreground/70 transition-colors ${
              copy && "group-hover:text-primary/90"
            }`}
          >
            {value}
          </p>
        </div>

        {/* Copy / Copied State */}
        {copy && (
          <div className="ml-auto flex items-center text-primary transition-all">
            {copied ? (
              <Check size={20} className="text-green-500" />
            ) : (
              <Copy size={18} />
            )}
          </div>
        )}
      </div>
    </StaggerAnimation>
  );
};

export default ContactInfoItem;
