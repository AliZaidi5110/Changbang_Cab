"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-2xl ring-1 ring-black/5 hover:-translate-y-1 transition-transform"
    >
      <Image
        src="/images/footer-car.png"
        alt="Back to top"
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
      />
    </button>
  );
}
