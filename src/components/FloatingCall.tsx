"use client";

import { FiPhoneCall } from "react-icons/fi";
import { site } from "@/lib/site";

export default function FloatingCall() {
  return (
    <a
      href={site.phoneHref}
      aria-label="Call now"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-dark shadow-2xl shadow-brand/40 hover:bg-brand-dark transition-colors animate-bounce"
    >
      <FiPhoneCall size={22} />
    </a>
  );
}
