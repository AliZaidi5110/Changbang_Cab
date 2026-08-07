"use client";

import { FaWhatsapp } from "react-icons/fa";
import { site } from "@/lib/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/30 transition-transform hover:scale-105"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
      <FaWhatsapp size={26} className="relative" />
    </a>
  );
}
