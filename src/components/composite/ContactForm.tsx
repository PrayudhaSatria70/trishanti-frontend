"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import {
  ArrowRight,
  CheckCircle2,
  RotateCcw,
  User,
  Mail,
  FileText,
} from "lucide-react";
import { Input, Textarea, Checkbox, FileUpload } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ContactModal, NewsletterModal } from "@/components/ui/Modal";
import { ToastContainer, ToastItem } from "@/components/ui/Toast";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormTouched {
  name?: boolean;
  email?: boolean;
  subject?: boolean;
  message?: boolean;
}

export default function ContactForm() {
  const locale = useLocale();
  const isId = locale === "id";

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [touched, setTouched] = useState<FormTouched>({});
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittedSuccess, setIsSubmittedSuccess] = useState(false);
  const [showFullSuccessScreen, setShowFullSuccessScreen] = useState(false);

  // Modal demo states
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

  // Toast notifications state
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = (type: "success" | "info" | "warning" | "error", title: string, message?: string) => {
    const newToast: ToastItem = {
      id: String(Date.now()),
      type,
      title,
      message,
      duration: 4000,
    };
    setToasts((prev) => [...prev, newToast]);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Validation rules matching Board A.5.15
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
  const isNameValid = form.name.trim().length >= 2;
  const isSubjectValid = form.subject.trim().length >= 3;
  const isMessageValid = form.message.trim().length >= 10;

  const handleBlur = (field: keyof FormTouched) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const isFormValid = isNameValid && isEmailValid && isSubjectValid && isMessageValid && privacyAgreed;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    if (!privacyAgreed) {
      addToast(
        "warning",
        isId ? "Persetujuan Diperlukan" : "Agreement Required",
        isId
          ? "Harap setujui kebijakan privasi sebelum mengirim pesan."
          : "Please agree to the privacy policy before sending your message.",
      );
      return;
    }

    if (!isFormValid) {
      addToast(
        "warning",
        isId ? "Periksa Input Anda" : "Please check your input",
        isId
          ? "Beberapa kolom formulir belum terisi dengan benar."
          : "Some form fields require correction before submission.",
      );
      return;
    }

    setIsSubmitting(true);

    // Simulate safe API submission delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setIsSubmittedSuccess(true);

    const attachmentNote = attachedFile ? ` (${attachedFile.name})` : "";
    addToast(
      "success",
      isId ? "Pesan Berhasil Terkirim!" : "Message sent successfully!",
      isId
        ? `Tim kami akan segera menghubungi Anda.${attachmentNote}`
        : `We'll be in touch soon.${attachmentNote}`,
    );

    // After button shows "✓ Sent!", reveal full Board A.5.15 Success screen
    setTimeout(() => {
      setShowFullSuccessScreen(true);
    }, 900);
  };

  const handleReset = () => {
    setForm({ name: "", email: "", subject: "", message: "" });
    setTouched({});
    setPrivacyAgreed(false);
    setAttachedFile(null);
    setIsSubmittedSuccess(false);
    setShowFullSuccessScreen(false);
  };

  // Board A.5.15 — Items 10 & 11: Full Success Screen
  if (showFullSuccessScreen) {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-[#071A22] border border-white/15 p-8 sm:p-12 text-center shadow-2xl animate-fade-in">
        <div className="absolute inset-0 bg-radial-at-c from-[#00A6A6]/10 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-md mx-auto space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#16A34A]/20 border border-[#16A34A]/30 text-[#16A34A] mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(22,163,74,0.3)]">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-2">
              {isId ? "Terima Kasih!" : "Thank you!"}
            </h3>
            <p className="text-base text-white/90 font-medium">
              {isId
                ? "Pesan Anda telah berhasil dikirimkan."
                : "Your message has been sent successfully."}
            </p>
            <p className="text-xs text-[#DEE3E1] mt-2 leading-relaxed">
              {isId
                ? "Kami mengapresiasi minat Anda pada Trishanti. Tim kami akan segera menghubungi Anda."
                : "We appreciate your interest in Trishanti. Our team will be in touch with you soon."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link
              href={`/${locale}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#00A6A6] text-white font-medium hover:bg-[#008f8f] transition-all shadow-md"
            >
              <span>{isId ? "Kembali ke Beranda" : "Return to Home"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/15 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{isId ? "Kirim Pesan Lain" : "Send Another Message"}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="p-8 sm:p-10 rounded-2xl bg-[#071A22] border border-white/15 space-y-6 shadow-2xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Input
            label={isId ? "Nama Lengkap" : "Full Name"}
            placeholder={isId ? "Nama Anda" : "Your full name"}
            value={form.name}
            icon={<User className="w-4 h-4 text-[#00A6A6]" />}
            required
            validationStatus={
              touched.name
                ? isNameValid
                  ? "success"
                  : "error"
                : "default"
            }
            error={
              touched.name && !isNameValid
                ? isId
                  ? "Harap masukkan nama Anda."
                  : "Please enter your name."
                : undefined
            }
            successMessage={isId ? "Terlihat bagus!" : "Looks good!"}
            onBlur={() => handleBlur("name")}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, name: e.target.value }))
            }
          />

          <Input
            type="email"
            label={isId ? "Alamat Email" : "Email Address"}
            placeholder="you@company.com"
            value={form.email}
            icon={<Mail className="w-4 h-4 text-[#00A6A6]" />}
            required
            validationStatus={
              touched.email
                ? isEmailValid
                  ? "success"
                  : "error"
                : "default"
            }
            error={
              touched.email && !isEmailValid
                ? isId
                  ? "Harap masukkan alamat email yang valid."
                  : "Please enter a valid email address."
                : undefined
            }
            successMessage={isId ? "Terlihat bagus!" : "Looks good!"}
            onBlur={() => handleBlur("email")}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>

        <Input
          label={isId ? "Subjek" : "Subject"}
          placeholder={isId ? "Subjek pesan Anda" : "What can we help you with?"}
          value={form.subject}
          icon={<FileText className="w-4 h-4 text-[#00A6A6]" />}
          required
          validationStatus={
            touched.subject
              ? isSubjectValid
                ? "success"
                : "error"
              : "default"
          }
          error={
            touched.subject && !isSubjectValid
              ? isId
                ? "Harap masukkan subjek pesan."
                : "Please enter a subject."
              : undefined
          }
          successMessage={isId ? "Terlihat bagus!" : "Looks good!"}
          onBlur={() => handleBlur("subject")}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, subject: e.target.value }))
          }
        />

        <Textarea
          label={isId ? "Pesan" : "Message"}
          placeholder={
            isId
              ? "Tuliskan detail pertanyaan atau kebutuhan Anda di sini..."
              : "Describe your enquiry or partnership opportunity in detail..."
          }
          value={form.message}
          maxLength={500}
          showCounter
          rows={5}
          required
          validationStatus={
            touched.message
              ? isMessageValid
                ? "success"
                : "error"
              : "default"
          }
          error={
            touched.message && !isMessageValid
              ? isId
                ? "Harap masukkan minimal 10 karakter."
                : "Please enter at least 10 characters."
              : undefined
          }
          successMessage={isId ? "Terlihat bagus!" : "Looks good!"}
          onBlur={() => handleBlur("message")}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, message: e.target.value }))
          }
        />

        {/* File Upload Dropzone (Image 4 Item 08) */}
        <FileUpload
          label={isId ? "Lampirkan Dokumen (Opsional)" : "Attach Document (Optional)"}
          onFileSelect={(file) => setAttachedFile(file)}
        />

        {/* Privacy Policy Checkbox (Image 4 Item 06 & 09) */}
        <Checkbox
          checked={privacyAgreed}
          onChange={(checked) => setPrivacyAgreed(checked)}
          label={
            <span>
              {isId ? (
                <>
                  Saya menyetujui{" "}
                  <Link href={`/${locale}/privacy`} className="text-[#00A6A6] hover:underline">
                    Kebijakan Privasi
                  </Link>{" "}
                  dan pemrosesan data saya.
                </>
              ) : (
                <>
                  I agree to the{" "}
                  <Link href={`/${locale}/privacy`} className="text-[#00A6A6] hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  and processing of my inquiry details.
                </>
              )}
            </span>
          }
        />

        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          size="lg"
          isLoading={isSubmitting}
          isSuccess={isSubmittedSuccess}
          loadingText={isId ? "Mengirimkan..." : "Sending..."}
          successText={isId ? "✓ Terkirim!" : "✓ Sent!"}
          rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
        >
          {isId ? "Kirim Pesan" : "Send Enquiry"}
        </Button>

        {/* Modal Overlay System Demo Controls (Image 1 Item 01 & 02) */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-[#94a3b8]">Interactive Modal Overlays:</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsContactModalOpen(true)}
              className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
            >
              Light Modal
            </button>
            <button
              type="button"
              onClick={() => setIsNewsletterModalOpen(true)}
              className="px-3 py-1.5 rounded-full bg-[#00A6A6]/20 hover:bg-[#00A6A6]/30 text-[#00A6A6] font-medium border border-[#00A6A6]/30 transition-colors"
            >
              Dark Newsletter Modal
            </button>
          </div>
        </div>
      </form>

      {/* Light Mode Contact Modal (Image 1 Item 01) */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        onSubmitSuccess={() => {
          addToast("success", "Message Sent!", "Thank you for reaching out to Trishanti.");
        }}
      />

      {/* Dark Mode Newsletter Modal (Image 1 Item 02) */}
      <NewsletterModal
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
        onSubscribeSuccess={() => {
          addToast("success", "Subscribed!", "You are now subscribed to Trishanti updates.");
        }}
      />

      {/* Semantic Toast Stack Container (Image 1 Item 08) */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </>
  );
}
