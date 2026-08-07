import Image from "next/image";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { site } from "@/lib/site";

const perks = [
  "Flexible working hours",
  "No hidden fees",
  "Weekly payments",
  "Fixed, fair pricing",
  "Easy booking app",
  "Steady stream of orders",
];

export default function Drivers() {
  return (
    <section id="drivers" className="py-24 bg-white">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="section-label">For Drivers</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-dark">
            Do You Want To Earn With Us?
          </h2>
          <p className="mt-5 text-gray-500 leading-relaxed">
            Join the {site.name} driver network and enjoy steady orders,
            fair pricing and weekly payouts. We take care of the passengers
            &mdash; you focus on the road.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {perks.map((perk) => (
              <div key={perk} className="flex items-center gap-3">
                <FiCheckCircle className="text-brand-dark shrink-0" size={20} />
                <span className="text-sm font-medium text-dark">{perk}</span>
              </div>
            ))}
          </div>

          <a href={site.emailHref} className="btn-brand mt-9">
            Apply To Drive <FiArrowRight />
          </a>
        </div>

        <div className="relative rounded-3xl bg-dark p-6 sm:p-10 text-white overflow-hidden">
          <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-brand/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 hidden w-44 opacity-90 translate-x-4 translate-y-2 sm:block sm:w-56 lg:w-64">
            <Image
              src="/images/car-big-side.png"
              alt=""
              width={500}
              height={260}
              className="w-full h-auto"
            />
          </div>
          <div className="relative z-10">
            <p className="text-brand font-semibold uppercase tracking-widest text-sm">
              Join The Fleet
            </p>
            <p className="mt-4 text-2xl sm:text-3xl font-extrabold leading-tight">
              Drive when you want. Earn what you deserve.
            </p>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed sm:max-w-[70%]">
              Send us your details and one of our team members will get back
              to you within 24 hours.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={site.phoneHref}
                className="flex items-center justify-between rounded-xl bg-white/5 px-5 py-4 hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <span className="text-sm text-gray-300">Call us</span>
                <span className="font-bold text-brand">{site.phone}</span>
              </a>
              <a
                href={site.emailHref}
                className="flex items-center justify-between rounded-xl bg-white/5 px-5 py-4 hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <span className="text-sm text-gray-300">Email us</span>
                <span className="font-bold text-brand break-all text-right ml-4">
                  {site.email}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
