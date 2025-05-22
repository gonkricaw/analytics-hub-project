"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface FooterProps {
  companyName?: string;
  links?: { label: string; href: string }[];
  copyrightYear?: number;
}

export const Footer = ({
  companyName = "Indonet Analytics Hub",
  links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Contact", href: "/contact" },
  ],
  copyrightYear = new Date().getFullYear(),
}: FooterProps) => {
  return (
    <motion.footer
      className="bg-slate-900 border-t border-slate-800 shadow-lg py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-6 md:mb-0">
            <Link
              href="/"
              className="text-xl font-bold text-white hover:text-blue-400 transition duration-200"
            >
              {companyName}
            </Link>
            <p className="mt-2 text-slate-400 text-sm">
              Powerful analytics at your fingertips
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-slate-300 hover:text-blue-400 transition duration-200 text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {copyrightYear} {companyName}. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </motion.a>

            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>

            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4.4 3h15.2C20.39 3 21 3.61 21 4.4v15.2c0 .79-.61 1.4-1.4 1.4H4.4C3.61 21 3 20.39 3 19.6V4.4C3 3.61 3.61 3 4.4 3zm12.5 6.38v5.77h-1.94v-5.37c0-.79-.32-1.32-1.1-1.32-.6 0-.96.4-1.11.79-.06.14-.07.34-.07.54v5.36H10.5s.03-8.7 0-9.6h1.94v1.36c.03-.02.06-.05.09-.07h-.09v.07c.29-.45.8-1.09 1.96-1.09 1.43 0 2.5 1 2.5 3.16zM7.93 5.38c-.67 0-1.1.44-1.1 1.01 0 .56.42 1.01 1.08 1.01h.02c.67 0 1.09-.45 1.09-1.01-.02-.57-.42-1.01-1.09-1.01zm-.99 9.77h1.98v-9.6H6.94v9.6z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
