"use client";

import React, { useEffect, useRef } from "react";
import DOMPurify from "dompurify";

interface SanitizedHTMLProps {
  html: string;
  className?: string;
  allowedTags?: string[];
  allowedAttributes?: Record<string, string[]>;
  securityLevel?: "strict" | "moderate" | "permissive";
}

// Predefined security levels
const securityPresets = {
  strict: {
    ALLOWED_TAGS: [
      "p",
      "b",
      "i",
      "em",
      "strong",
      "a",
      "ul",
      "ol",
      "li",
      "br",
      "span",
    ],
    ALLOWED_ATTR: ["href", "target", "rel", "class", "title"],
    ADD_ATTR: ["rel"],
    FORBID_TAGS: [
      "script",
      "style",
      "iframe",
      "form",
      "input",
      "object",
      "embed",
    ],
    FORBID_ATTR: ["onerror", "onload", "onclick", "onmouseover"],
  },
  moderate: {
    ALLOWED_TAGS: [
      "p",
      "b",
      "i",
      "em",
      "strong",
      "a",
      "ul",
      "ol",
      "li",
      "br",
      "span",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "table",
      "tbody",
      "thead",
      "tr",
      "td",
      "th",
      "hr",
      "blockquote",
      "div",
      "code",
      "pre",
      "img",
    ],
    ALLOWED_ATTR: [
      "href",
      "target",
      "rel",
      "class",
      "title",
      "src",
      "alt",
      "width",
      "height",
    ],
    ADD_ATTR: ["rel"],
    FORBID_TAGS: ["script", "style", "iframe", "form", "input"],
    FORBID_ATTR: ["onerror", "onload", "onclick"],
  },
  permissive: {
    FORBID_TAGS: ["script", "iframe", "form"],
    FORBID_ATTR: ["onerror", "onload", "onclick", "onmouseover"],
    ADD_ATTR: ["rel"],
  },
};

export function SanitizedHTML({
  html,
  className,
  allowedTags,
  allowedAttributes,
  securityLevel = "moderate",
}: SanitizedHTMLProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force all links to open in a new tab and add noopener noreferrer
    if (containerRef.current) {
      const links = containerRef.current.querySelectorAll("a");
      links.forEach((link) => {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      });
    }
  }, [html]);

  // Configure DOMPurify options based on security level and custom settings
  const securityPreset = securityPresets[securityLevel];

  // Merge custom settings with the preset
  const sanitizeConfig = {
    ...securityPreset,
    ALLOWED_TAGS: allowedTags || securityPreset.ALLOWED_TAGS,
    ALLOWED_ATTR: allowedAttributes || securityPreset.ALLOWED_ATTR,
    USE_PROFILES: { html: true },
  };

  // Sanitize the HTML
  const sanitizedHTML = DOMPurify.sanitize(html, sanitizeConfig);

  return (
    <div
      ref={containerRef}
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
    securityLevel?: "strict" | "moderate" | "permissive";
  },
) {
  const securityLevel = options?.securityLevel || "moderate";
  const securityPreset = securityPresets[securityLevel];

  // Create enhanced sanitization config
  const sanitizeConfig = {
    ...securityPreset,
    ALLOWED_TAGS: options?.allowedTags || securityPreset.ALLOWED_TAGS,
    ALLOWED_ATTR: options?.allowedAttributes || securityPreset.ALLOWED_ATTR,
    USE_PROFILES: { html: true },
    WHOLE_DOCUMENT: false,
    SANITIZE_DOM: true,
    FORCE_BODY: true,
  };

  // Additional hooks for link safety
  DOMPurify.addHook("afterSanitizeAttributes", function (node) {
    // Set all elements with href attribute to target="_blank"
    if ("href" in node) {
      node.setAttribute("target", "_blank");
      node.setAttribute("rel", "noopener noreferrer");
    }

    // Set non-HTML data-* attributes to be safe
    if (node.hasAttribute("data-mce-href")) {
      node.removeAttribute("data-mce-href");
    }

    // Add additional hooks as needed for specific elements

    return node;
  });

  const sanitized = DOMPurify.sanitize(html, sanitizeConfig);

  // Remove hooks after sanitization
  DOMPurify.removeAllHooks();

  return sanitized;
}
