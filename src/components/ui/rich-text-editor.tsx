"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";
import { Button } from "./button";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Link as LinkIcon,
  Heading1,
  Heading2,
  Heading3,
  Undo,
  Redo,
  Code,
} from "lucide-react";

// Import Prism styling for syntax highlighting
import "prismjs/themes/prism-tomorrow.css"; // Dark theme

const lowlight = createLowlight(common);

interface RichTextEditorProps {
  content?: string;
  onChange?: (value: string) => void;
  className?: string;
  placeholder?: string;
}

export function RichTextEditor({
  content = "",
  onChange,
  className,
  placeholder = "Write something...",
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        linkOnPaste: true,
        validate: (href) => /^https?:\/\//.test(href),
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      if (onChange) {
        onChange(html);
      }
    },
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none focus:outline-none",
        placeholder,
      },
    },
  });

  const [linkUrl, setLinkUrl] = useState("");
  const [showLinkInput, setShowLinkInput] = useState(false);

  const setLink = () => {
    if (!editor) return;

    if (linkUrl) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: linkUrl })
        .run();
    }

    setLinkUrl("");
    setShowLinkInput(false);
  };

  const renderToolbar = (editor: Editor) => (
    <div className="flex flex-wrap items-center gap-1 p-1 border border-b-0 rounded-t-md">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={cn(editor.isActive("bold") && "bg-muted")}
      >
        <Bold className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={cn(editor.isActive("italic") && "bg-muted")}
      >
        <Italic className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={cn(editor.isActive("heading", { level: 1 }) && "bg-muted")}
      >
        <Heading1 className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={cn(editor.isActive("heading", { level: 2 }) && "bg-muted")}
      >
        <Heading2 className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={cn(editor.isActive("heading", { level: 3 }) && "bg-muted")}
      >
        <Heading3 className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={cn(editor.isActive("bulletList") && "bg-muted")}
      >
        <List className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={cn(editor.isActive("orderedList") && "bg-muted")}
      >
        <ListOrdered className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={cn(editor.isActive("codeBlock") && "bg-muted")}
      >
        <Code className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setShowLinkInput(!showLinkInput)}
        className={cn(editor.isActive("link") && "bg-muted")}
      >
        <LinkIcon className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
      >
        <Undo className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().redo()}
      >
        <Redo className="w-4 h-4" />
      </Button>

      {showLinkInput && (
        <div className="flex items-center gap-2 ml-2">
          <input
            type="text"
            placeholder="https://example.com"
            className="text-sm px-2 py-1 border rounded-md bg-background"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setLink();
              }
            }}
          />
          <Button size="sm" onClick={setLink}>
            Apply
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <div className={cn("border rounded-md", className)}>
      {editor && renderToolbar(editor)}
      <EditorContent
        editor={editor}
        className="prose dark:prose-invert prose-sm sm:prose-base p-4 min-h-[150px] focus-within:outline-none"
      />
    </div>
  );
}
