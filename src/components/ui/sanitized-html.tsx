'use client';

import React from 'react';
import DOMPurify from 'dompurify';

interface SanitizedHTMLProps {
  html: string;
  className?: string;
  allowedTags?: string[];
  allowedAttributes?: Record<string, string[]>;
}

export function SanitizedHTML({
  html,
  className,
  allowedTags,
  allowedAttributes,
}: SanitizedHTMLProps) {
  // Configure DOMPurify options
  const sanitizeConfig = {
    ALLOWED_TAGS: allowedTags,
    ALLOWED_ATTR: allowedAttributes,
  };
  
  // Sanitize the HTML
  const sanitizedHTML = DOMPurify.sanitize(html, sanitizeConfig);
  
  return (
    <div 
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
}

// Utility function to sanitize HTML outside of React components
export function sanitizeHtml(
  html: string,
  options?: {
    allowedTags?: string[];
    allowedAttributes?: Record<string, string[]>;
  }
) {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: options?.allowedTags,
    ALLOWED_ATTR: options?.allowedAttributes,
  });
}
