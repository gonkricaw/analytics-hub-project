"use client";

import React, { useState, Suspense } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Spinner } from "./spinner";
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

// Import types only (not the actual modules) for TypeScript
import type { Editor } from "@tiptap/react";

// Lazy load the heavy editor components
import dynamic from "next/dynamic";

const TiptapEditor = dynamic(
  async () => {
    const { useEditor, EditorContent } = await import("@tiptap/react");
    const StarterKit = (await import("@tiptap/starter-kit")).default;
    const Link = (await import("@tiptap/extension-link")).default;
    const CodeBlockLowlight = (
      await import("@tiptap/extension-code-block-lowlight")
    ).default;
    const { common, createLowlight } = await import("lowlight");

    // Import Prism styling for syntax highlighting
    await import("prismjs/themes/prism-tomorrow.css"); // Dark theme

    const lowlight = createLowlight(common);

    return ({
      content,
      onChange,
      editable = true,
      className,
    }: {
      content?: string;
      onChange?: (html: string) => void;
      editable?: boolean;
      className?: string;
    }) => {
      const editor = useEditor({
        extensions: [
          StarterKit,
          Link.configure({
            openOnClick: false,
            validate: (href) => /^(https?:\/\/|mailto:|tel:)/.test(href),
          }),
          CodeBlockLowlight.configure({
            lowlight,
          }),
        ],
        content,
        editable,
        onUpdate: ({ editor }) => {
          onChange && onChange(editor.getHTML());
        },
      });

      return (
        <div className={cn("rich-text-editor", className)}>
          {editable && editor && <MenuBar editor={editor} />}
          <EditorContent
            editor={editor}
            className="editor-content prose prose-invert max-w-none"
          />
        </div>
      );
    };
  },
  {
    loading: () => (
      <div className="flex h-48 w-full items-center justify-center bg-background/50 rounded-md border">
        <Spinner size="large" />
        <span className="ml-2 text-sm text-muted-foreground">
          Loading editor...
        </span>
      </div>
    ),
    ssr: false, // Disable server-side rendering for this component
  },
);

interface RichTextEditorProps {
  content?: string;
  onChange?: (html: string) => void;
  editable?: boolean;
  className?: string;
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  content,
  onChange,
  editable = true,
  className,
}) => {
  return (
    <Suspense
      fallback={
        <div className="flex h-48 w-full items-center justify-center bg-background/50 rounded-md border">
          <Spinner size="large" />
          <span className="ml-2 text-sm text-muted-foreground">
            Loading editor...
          </span>
        </div>
      }
    >
      <TiptapEditor
        content={content}
        onChange={onChange}
        editable={editable}
        className={className}
      />
    </Suspense>
  );
};

interface MenuBarProps {
  editor: Editor;
}

// The MenuBar component is now separate and will be passed the editor instance
const MenuBar: React.FC<MenuBarProps> = ({ editor }) => {
  // Make a ref to the editor
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-1 bg-muted p-1 rounded-t-md border-b">
      <Button
        variant="ghost"
        size="icon"
        className={cn("size-8", editor.isActive("bold") && "bg-accent")}
        onClick={() => editor.chain().focus().toggleBold().run()}
        title="Bold"
        type="button"
      >
        <Bold className="size-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={cn("size-8", editor.isActive("italic") && "bg-accent")}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        title="Italic"
        type="button"
      >
        <Italic className="size-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "size-8",
          editor.isActive("heading", { level: 1 }) && "bg-accent",
        )}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        title="Heading 1"
        type="button"
      >
        <Heading1 className="size-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "size-8",
          editor.isActive("heading", { level: 2 }) && "bg-accent",
        )}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        title="Heading 2"
        type="button"
      >
        <Heading2 className="size-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "size-8",
          editor.isActive("heading", { level: 3 }) && "bg-accent",
        )}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        title="Heading 3"
        type="button"
      >
        <Heading3 className="size-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={cn("size-8", editor.isActive("bulletList") && "bg-accent")}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        title="Bullet List"
        type="button"
      >
        <List className="size-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={cn("size-8", editor.isActive("orderedList") && "bg-accent")}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        title="Ordered List"
        type="button"
      >
        <ListOrdered className="size-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={cn("size-8", editor.isActive("link") && "bg-accent")}
        onClick={() => {
          const url = window.prompt("Enter URL");
          if (url) {
            editor.chain().focus().setLink({ href: url }).run();
          } else {
            editor.chain().focus().unsetLink().run();
          }
        }}
        title="Link"
        type="button"
      >
        <LinkIcon className="size-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={cn("size-8", editor.isActive("codeBlock") && "bg-accent")}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        title="Code Block"
        type="button"
      >
        <Code className="size-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="size-8"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
        title="Undo"
        type="button"
      >
        <Undo className="size-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="size-8"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().redo()}
        title="Redo"
        type="button"
      >
        <Redo className="size-4" />
      </Button>
    </div>
  );
};
