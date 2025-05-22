"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Input } from "./input";
import { X } from "lucide-react";

interface FileInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "value" | "onChange"
  > {
  onChange?: (files: File[]) => void;
  value?: File[];
  multiple?: boolean;
  accept?: string;
  className?: string;
  buttonClassName?: string;
  showSelectedFiles?: boolean;
}

export function FileInput({
  onChange,
  value = [],
  multiple = false,
  accept,
  className,
  buttonClassName,
  showSelectedFiles = true,
  ...props
}: FileInputProps) {
  const [files, setFiles] = React.useState<File[]>(value);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    const selectedFiles = Array.from(e.target.files);
    setFiles(multiple ? [...files, ...selectedFiles] : selectedFiles);

    if (onChange) {
      onChange(multiple ? [...files, ...selectedFiles] : selectedFiles);
    }

    // Reset input value so the same file can be selected again
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const removeFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);

    if (onChange) {
      onChange(newFiles);
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={handleClick}
          className={buttonClassName}
        >
          Choose File{multiple ? "s" : ""}
        </Button>
        <Input
          ref={inputRef}
          type="file"
          multiple={multiple}
          accept={accept}
          className="hidden"
          onChange={handleChange}
          {...props}
        />
      </div>

      {showSelectedFiles && files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, i) => (
            <div
              key={`${file.name}-${i}`}
              className="flex items-center gap-2 p-2 rounded-md border text-sm"
            >
              <span className="truncate flex-1">{file.name}</span>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
                onClick={() => removeFile(i)}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
