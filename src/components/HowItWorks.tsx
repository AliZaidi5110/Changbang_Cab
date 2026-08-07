import Image from "next/image";
import { FiMapPin, FiNavigation, FiPhoneCall, FiSmile } from "react-icons/fi";

const leftSteps = [
  {
    number: "01",
    icon: FiPhoneCall,
    title: "Fast Booking",
    desc: "Call us or send a message and get instant confirmation for your ride.",
  },
  {
    number: "02",
    icon: FiSmile,
    title: "Easy To Use",
    desc: "No app required &mdash; just tell us your pickup point and destination.",
  },
];

const rightSteps = [
  {
    number: "03",
    icon: FiMapPin,
    title: "GPS Tracking",
    desc: "Our drivers use live navigation to find the fastest, safest route to you.",
  },
  {
    number: "04",
    icon: FiNavigation,
    title: "Arrive Safely",
    desc: "Sit back and relax while we get you to your destination on time.",
  },
];

function Step({
  number,
  icon: Icon,
  title,
  desc,
  align = "left",
}: {
  number: string;
  icon: typeof FiPhoneCall;
  title: string;
  desc: string;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`flex gap-4 ${
        align === "right" ? "lg:flex-row-reverse lg:text-right" : ""
      }`}
    >
      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
        <span className="absolute inset-0 flex items-center justify-center rounded-full bg-white/5 text-xl font-extrabold text-white/10">
          {number}
        </span>
        <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-brand text-dark">
          <Icon size={18} />
        </span>
      </div>
      <div>
        <h3 className="font-bold text-white">{title}</h3>
        <p className="mt-1.5 text-base text-gray-400 leading-relaxed max-w-xs">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-dark relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
      <div className="container-x relative">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-label justify-center">Simple Process</span>
          <h2 className="h2-section mt-4 font-extrabold text-white">
            How It Works
          </h2>
          <p className="mt-4 text-gray-400">
            Booking a ride with{" "}
            <span className="text-brand font-semibold">Chongbang Cab</span>{" "}
            takes just four simple steps.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div className="space-y-12">
            {leftSteps.map((s) => (
              <Step key={s.number} {...s} />
            ))}
          </div>

          <div className="mx-auto">
            <Image
              src="/images/mobile.png"
              alt="Chongbang Cab app"
              width={260}
              height={520}
              className="h-auto w-48 lg:w-56 drop-shadow-2xl"
            />
          </div>

          <div className="space-y-12">
            {rightSteps.map((s) => (
              <Step key={s.number} {...s} align="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
