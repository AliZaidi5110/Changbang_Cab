import Image from "next/image";
import { FiArrowRight, FiClock, FiMapPin, FiPhoneCall } from "react-icons/fi";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-dark pt-40 pb-28 lg:pt-48 lg:pb-36"
    >
      {/* Background photo */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/homepage-2-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
      </div>

      <div className="container-x relative grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="section-label text-brand">Welcome to {site.name}</span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Get Your <span className="text-brand">Taxi</span> Online in
            Minutes
          </h1>
          <p className="mt-6 max-w-lg text-gray-300 text-lg">
            {site.name} brings you fast, safe and affordable rides around the
            clock. Airport transfers, city trips or a booked hotel stay &mdash;
            one call is all it takes.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#booking" className="btn-brand">
              Book A Ride <FiArrowRight />
            </a>
            <a href="#services" className="btn-outline">
              Our Services
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6">
            <div className="flex items-center gap-3 text-gray-300">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-brand">
                <FiClock size={18} />
              </span>
              <span className="text-sm">
                Available
                <br />
                <b className="text-white">24/7 every day</b>
              </span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-brand">
                <FiMapPin size={18} />
              </span>
              <span className="text-sm">
                Serving
                <br />
                <b className="text-white">Your Whole City</b>
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Decorative car overlap - desktop only */}
          <div className="pointer-events-none absolute -top-32 right-[-15%] hidden w-[130%] max-w-xl opacity-90 lg:block">
            <Image
              src="/images/car-big-2.png"
              alt="Chongbang Cab taxi car"
              width={900}
              height={500}
              className="w-full h-auto drop-shadow-2xl"
              priority
            />
          </div>

          {/* Car image in normal flow for mobile/tablet */}
          <div className="mb-6 flex justify-center lg:hidden">
            <Image
              src="/images/car-big-2.png"
              alt="Chongbang Cab taxi car"
              width={500}
              height={280}
              className="h-auto w-full max-w-xs sm:max-w-sm drop-shadow-2xl"
              priority
            />
          </div>

          <div className="relative mx-auto max-w-md rounded-3xl bg-dark-2/95 backdrop-blur p-6 sm:p-8 shadow-2xl shadow-black/40 ring-1 ring-white/10 lg:mt-16">
            <div className="absolute -top-5 -left-5 flex h-24 w-24 items-center justify-center rounded-2xl bg-brand text-dark shadow-lg rotate-[-6deg]">
              <span className="text-center text-xs font-extrabold leading-tight">
                RIDE
                <br />
                NOW
              </span>
            </div>

            <p className="text-sm uppercase tracking-widest text-brand font-semibold">
              Call Taxi Now
            </p>
            <a
              href={site.phoneHref}
              className="mt-3 flex items-center gap-4 text-3xl sm:text-4xl font-extrabold text-white hover:text-brand transition-colors"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand text-dark">
                <FiPhoneCall size={22} />
              </span>
              {site.phone}
            </a>
            <p className="mt-4 text-gray-400 text-sm">
              {site.hours}. Our friendly operators are standing by to get you
              moving.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-2xl font-extrabold text-brand">10k+</p>
                <p className="text-xs text-gray-400 mt-1">Happy Riders</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-2xl font-extrabold text-brand">24/7</p>
                <p className="text-xs text-gray-400 mt-1">Always On Call</p>
              </div>
            </div>

            <a
              href={site.emailHref}
              className="mt-6 block text-center text-sm text-gray-400 hover:text-brand transition-colors"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
