"use client";

import React, { useState, useId } from "react";
import {
  Check,
  AlertCircle,
  UploadCloud,
  File,
  X,
  Minus,
} from "lucide-react";
import { cn } from "@/lib/cn";

/* =========================================================================
   A.5.13 FORM & INPUT SYSTEM (Image 4)
   - 01 & 02 Input States: Default, Hover, Focused (cyan glow), Filled (green check), Disabled
   - 03 Validation States: Success (green check + "Looks good!"), Error (red alert + message)
   - 04 Search Input
   - 06 Checkbox, Radio & Toggle Switch
   - 07 Textarea with 0/500 Character Counter
   - 08 File Upload Dropzone (PDF, DOC, DOCX - Max 10MB)
   - 11 Input with Icons
   ========================================================================= */

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | undefined;
  error?: string | undefined;
  helperText?: string | undefined;
  validationStatus?: "default" | "success" | "error" | undefined;
  successMessage?: string | undefined;
  icon?: React.ReactNode;
  theme?: "light" | "dark";
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      validationStatus,
      successMessage,
      icon,
      theme = "dark",
      id,
      required,
      value,
      disabled,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;
    const successId = `${inputId}-success`;

    const isLight = theme === "light";

    // Determine computed validation status
    const status: "default" | "success" | "error" = error
      ? "error"
      : validationStatus ?? "default";

    // Item 01 & 02: Filled state displays checkmark when value is present and valid
    const hasValue = value !== undefined && String(value).trim().length > 0;
    const showFilledCheck = hasValue && status === "default" && !disabled;

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "block text-xs font-semibold uppercase tracking-wider",
              isLight ? "text-[#5E6663]" : "text-[#DEE3E1]",
            )}
          >
            {label}
            {required && <span className="text-[#DC2626] ml-1">*</span>}
          </label>
        )}
        <div className="relative flex items-center">
          {icon && (
            <div
              className={cn(
                "absolute left-3.5 flex items-center pointer-events-none",
                isLight ? "text-[#7C8581]" : "text-[#94a3b8]",
              )}
            >
              {icon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            value={value}
            disabled={disabled}
            required={required}
            aria-invalid={status === "error"}
            aria-describedby={
              status === "error"
                ? errorId
                : status === "success"
                ? successId
                : helperText
                ? helperId
                : undefined
            }
            className={cn(
              "w-full px-4 py-3 rounded-lg text-sm transition-all duration-200 outline-none",
              icon ? "pl-11" : "pl-4",
              (status !== "default" || showFilledCheck) ? "pr-10" : "pr-4",
              isLight
                ? "bg-white border border-[#E1E4E2] text-[#071A22] placeholder-[#7C8581] hover:border-[#00A6A6]/50 focus:border-[#00A6A6] focus:ring-2 focus:ring-[#00A6A6]/20 disabled:bg-[#EFF1F0] disabled:text-[#A6ADAA]"
                : "bg-[#071A22] border border-white/15 text-white placeholder-[#7C8581] hover:border-white/30 focus:border-[#00A6A6] focus:ring-2 focus:ring-[#00A6A6]/30 disabled:bg-white/5 disabled:text-[#7C8581]",
              status === "error" &&
                "border-[#DC2626] focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20",
              status === "success" &&
                "border-[#16A34A] focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/20",
              className,
            )}
            {...props}
          />

          {/* Validation & Filled state icons */}
          {status === "success" && (
            <div className="absolute right-3 pointer-events-none text-[#16A34A]">
              <Check className="w-4 h-4" aria-hidden="true" />
            </div>
          )}
          {status === "error" && (
            <div className="absolute right-3 pointer-events-none text-[#DC2626]">
              <AlertCircle className="w-4 h-4" aria-hidden="true" />
            </div>
          )}
          {showFilledCheck && (
            <div className="absolute right-3 pointer-events-none text-[#16A34A]">
              <Check className="w-4 h-4" aria-hidden="true" />
            </div>
          )}
        </div>

        {status === "error" && (
          <p id={errorId} className="text-xs text-[#DC2626] mt-1 font-medium flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{error || helperText}</span>
          </p>
        )}
        {status === "success" && (
          <p id={successId} className="text-xs text-[#16A34A] mt-1 font-medium flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 shrink-0" />
            <span>{successMessage || "Looks good!"}</span>
          </p>
        )}
        {status === "default" && helperText && (
          <p
            id={helperId}
            className={cn("text-xs mt-1", isLight ? "text-[#7C8581]" : "text-[#94a3b8]")}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

/* -------------------------------------------------------------------------
   07 TEXTAREA (With 0/500 Character Counter)
   ------------------------------------------------------------------------- */
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string | undefined;
  error?: string | undefined;
  helperText?: string | undefined;
  validationStatus?: "default" | "success" | "error" | undefined;
  successMessage?: string | undefined;
  showCounter?: boolean;
  theme?: "light" | "dark";
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      validationStatus,
      successMessage,
      showCounter = true,
      theme = "dark",
      maxLength = 500,
      value,
      onChange,
      id,
      required,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const textareaId = id ?? generatedId;
    const errorId = `${textareaId}-error`;
    const helperId = `${textareaId}-helper`;
    const successId = `${textareaId}-success`;

    const isLight = theme === "light";
    const status: "default" | "success" | "error" = error
      ? "error"
      : validationStatus ?? "default";

    const currentLength = value ? String(value).length : 0;

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={textareaId}
            className={cn(
              "block text-xs font-semibold uppercase tracking-wider",
              isLight ? "text-[#5E6663]" : "text-[#DEE3E1]",
            )}
          >
            {label}
            {required && <span className="text-[#DC2626] ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          <textarea
            ref={ref}
            id={textareaId}
            required={required}
            maxLength={maxLength}
            value={value}
            onChange={onChange}
            aria-invalid={status === "error"}
            aria-describedby={
              status === "error"
                ? errorId
                : status === "success"
                ? successId
                : helperText
                ? helperId
                : undefined
            }
            className={cn(
              "w-full px-4 py-3 rounded-lg text-sm transition-all duration-200 outline-none min-h-[120px] resize-y",
              showCounter ? "pb-7" : "pb-3",
              isLight
                ? "bg-white border border-[#E1E4E2] text-[#071A22] placeholder-[#7C8581] hover:border-[#00A6A6]/50 focus:border-[#00A6A6] focus:ring-2 focus:ring-[#00A6A6]/20"
                : "bg-[#071A22] border border-white/15 text-white placeholder-[#7C8581] hover:border-white/30 focus:border-[#00A6A6] focus:ring-2 focus:ring-[#00A6A6]/30",
              status === "error" &&
                "border-[#DC2626] focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20",
              status === "success" &&
                "border-[#16A34A] focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/20",
              className,
            )}
            {...props}
          />

          {showCounter && (
            <span
              className={cn(
                "absolute bottom-2 right-3 text-[11px] pointer-events-none font-medium",
                isLight ? "text-[#7C8581]" : "text-[#94a3b8]",
              )}
            >
              {currentLength}/{maxLength}
            </span>
          )}
        </div>

        {status === "error" && (
          <p id={errorId} className="text-xs text-[#DC2626] mt-1 font-medium flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{error || helperText}</span>
          </p>
        )}
        {status === "success" && (
          <p id={successId} className="text-xs text-[#16A34A] mt-1 font-medium flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 shrink-0" />
            <span>{successMessage || "Looks good!"}</span>
          </p>
        )}
        {status === "default" && helperText && (
          <p id={helperId} className={cn("text-xs mt-1", isLight ? "text-[#7C8581]" : "text-[#94a3b8]")}>
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";

/* -------------------------------------------------------------------------
   06 CHECKBOX COMPONENT
   ------------------------------------------------------------------------- */
interface CheckboxProps {
  id?: string;
  label?: string | React.ReactNode;
  checked?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  theme?: "light" | "dark";
  className?: string;
}

export function Checkbox({
  id,
  label,
  checked = false,
  indeterminate = false,
  onChange,
  disabled = false,
  theme = "dark",
  className,
}: CheckboxProps) {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;
  const isLight = theme === "light";

  return (
    <label
      htmlFor={checkboxId}
      className={cn(
        "inline-flex items-center gap-3 cursor-pointer select-none group",
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
    >
      <div className="relative">
        <input
          type="checkbox"
          id={checkboxId}
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
          className="sr-only"
        />
        <div
          className={cn(
            "w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200",
            checked || indeterminate
              ? "bg-[#00A6A6] border-[#00A6A6] text-white shadow-[0_0_10px_rgba(0,166,166,0.3)]"
              : isLight
              ? "bg-white border-[#C8CDCA] group-hover:border-[#00A6A6]"
              : "bg-[#071A22] border-white/20 group-hover:border-[#00A6A6]",
          )}
        >
          {checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
          {indeterminate && !checked && <Minus className="w-3.5 h-3.5 stroke-[3]" />}
        </div>
      </div>

      {label && (
        <span
          className={cn(
            "text-xs leading-relaxed font-medium transition-colors",
            isLight
              ? "text-[#414946] group-hover:text-[#071A22]"
              : "text-[#cbd5e1] group-hover:text-white",
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
}

/* -------------------------------------------------------------------------
   06 RADIO BUTTON COMPONENT
   ------------------------------------------------------------------------- */
interface RadioButtonProps {
  id?: string;
  name: string;
  value: string;
  label?: string | React.ReactNode;
  checked?: boolean;
  onChange?: (value: string) => void;
  disabled?: boolean;
  theme?: "light" | "dark";
  className?: string;
}

export function RadioButton({
  id,
  name,
  value,
  label,
  checked = false,
  onChange,
  disabled = false,
  theme = "dark",
  className,
}: RadioButtonProps) {
  const generatedId = useId();
  const radioId = id ?? generatedId;
  const isLight = theme === "light";

  return (
    <label
      htmlFor={radioId}
      className={cn(
        "inline-flex items-center gap-3 cursor-pointer select-none group",
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
    >
      <div className="relative">
        <input
          type="radio"
          id={radioId}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={() => onChange?.(value)}
          className="sr-only"
        />
        <div
          className={cn(
            "w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200",
            checked
              ? "border-[#00A6A6] bg-[#00A6A6]/10"
              : isLight
              ? "bg-white border-[#C8CDCA] group-hover:border-[#00A6A6]"
              : "bg-[#071A22] border-white/20 group-hover:border-[#00A6A6]",
          )}
        >
          {checked && (
            <div className="w-2.5 h-2.5 rounded-full bg-[#00A6A6] shadow-[0_0_8px_rgba(0,166,166,0.6)]" />
          )}
        </div>
      </div>

      {label && (
        <span
          className={cn(
            "text-xs leading-relaxed font-medium transition-colors",
            isLight
              ? "text-[#414946] group-hover:text-[#071A22]"
              : "text-[#cbd5e1] group-hover:text-white",
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
}

/* -------------------------------------------------------------------------
   06 TOGGLE SWITCH COMPONENT
   ------------------------------------------------------------------------- */
interface ToggleSwitchProps {
  id?: string;
  label?: string | React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export function ToggleSwitch({
  id,
  label,
  checked = false,
  onChange,
  disabled = false,
  className,
}: ToggleSwitchProps) {
  const generatedId = useId();
  const toggleId = id ?? generatedId;

  return (
    <label
      htmlFor={toggleId}
      className={cn(
        "inline-flex items-center gap-3 cursor-pointer select-none group",
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
    >
      <div className="relative">
        <input
          type="checkbox"
          id={toggleId}
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
          className="sr-only"
        />
        <div
          className={cn(
            "w-11 h-6 rounded-full transition-colors duration-200 p-0.5",
            checked ? "bg-[#00A6A6]" : "bg-white/20 dark:bg-white/15",
          )}
        >
          <div
            className={cn(
              "w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-200",
              checked ? "translate-x-5" : "translate-x-0",
            )}
          />
        </div>
      </div>

      {label && (
        <span className="text-xs text-[#cbd5e1] group-hover:text-white transition-colors font-medium">
          {label}
        </span>
      )}
    </label>
  );
}

/* -------------------------------------------------------------------------
   08 FILE UPLOAD DROPZONE
   ------------------------------------------------------------------------- */
interface FileUploadProps {
  label?: string;
  accept?: string;
  maxSizeMb?: number;
  theme?: "light" | "dark";
  onFileSelect?: (file: File) => void;
  className?: string;
}

export function FileUpload({
  label = "Attach Document",
  accept = ".pdf,.doc,.docx",
  maxSizeMb = 10,
  theme = "dark",
  onFileSelect,
  className,
}: FileUploadProps) {
  const [dragOver, setDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputId = useId();

  const isLight = theme === "light";

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) {
      return;
    }
    const file = files[0];
    if (file && file.size > maxSizeMb * 1024 * 1024) {
      setError(`File size exceeds maximum ${maxSizeMb}MB limit.`);
      setSelectedFile(null);
      return;
    }
    setError(null);
    if (file) {
      setSelectedFile(file);
      onFileSelect?.(file);
    }
  };

  return (
    <div className={cn("w-full space-y-1.5 text-left", className)}>
      {label && (
        <label
          htmlFor={inputId}
          className={cn(
            "block text-xs font-semibold uppercase tracking-wider",
            isLight ? "text-[#5E6663]" : "text-[#DEE3E1]",
          )}
        >
          {label}
        </label>
      )}

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          handleFiles(e.dataTransfer.files);
        }}
        className={cn(
          "relative rounded-xl border-2 border-dashed p-6 text-center transition-all duration-200 cursor-pointer",
          dragOver
            ? "border-[#00A6A6] bg-[#00A6A6]/10"
            : isLight
            ? "border-[#C8CDCA] bg-white hover:border-[#00A6A6]/60"
            : "border-white/15 bg-[#071A22] hover:border-[#00A6A6]/60",
        )}
      >
        <input
          id={inputId}
          type="file"
          accept={accept}
          onChange={(e) => handleFiles(e.target.files)}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />

        {selectedFile ? (
          <div className="flex items-center justify-between p-3 rounded-lg bg-[#00A6A6]/10 border border-[#00A6A6]/30 text-left">
            <div className="flex items-center gap-3 truncate">
              <File className="w-5 h-5 text-[#00A6A6] shrink-0" />
              <div className="truncate">
                <div className="text-xs font-semibold truncate text-white">
                  {selectedFile.name}
                </div>
                <div className="text-[10px] text-[#94a3b8]">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedFile(null);
              }}
              className="p-1 hover:text-white text-white/50"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="space-y-2 pointer-events-none">
            <div className="w-10 h-10 rounded-full bg-[#00A6A6]/15 text-[#00A6A6] flex items-center justify-center mx-auto">
              <UploadCloud className="w-5 h-5" />
            </div>
            <p className="text-xs font-semibold text-white">
              Drag and drop your file here or <span className="text-[#00A6A6]">click to browse</span>
            </p>
            <p className="text-[10px] text-[#94a3b8]">
              PDF, DOC, DOCX (Max. {maxSizeMb}MB)
            </p>
          </div>
        )}
      </div>

      {error && (
        <p className="text-xs text-[#DC2626] mt-1 font-medium flex items-center gap-1">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
