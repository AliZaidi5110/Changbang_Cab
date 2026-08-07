import { FiCalendar, FiMapPin, FiPhoneCall, FiSend } from "react-icons/fi";
import { site } from "@/lib/site";

export default function Booking() {
  return (
    <section id="booking" className="py-24 bg-white">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-dark px-8 py-14 sm:px-14 lg:px-20">
          <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="section-label">Book A Ride</span>
              <h2 className="h2-section mt-4 font-extrabold text-white">
                Ready To Ride With {site.shortName}?
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Fill in your pickup details below or simply give us a call
                &mdash; our operators are ready 24/7 to get you moving.
              </p>

              <a
                href={site.phoneHref}
                className="mt-8 inline-flex items-center gap-4"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-dark">
                  <FiPhoneCall size={22} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-gray-400">
                    Call us anytime
                  </span>
                  <span className="block text-2xl font-extrabold text-white">
                    {site.phone}
                  </span>
                </span>
              </a>
            </div>

            <form className="rounded-2xl bg-white p-7 sm:p-8 shadow-2xl space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand"
                />
              </div>
              <div className="relative">
                <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Pickup Location"
                  className="w-full rounded-xl border border-gray-200 pl-11 pr-4 py-3 text-sm outline-none focus:border-brand"
                />
              </div>
              <div className="relative">
                <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Destination"
                  className="w-full rounded-xl border border-gray-200 pl-11 pr-4 py-3 text-sm outline-none focus:border-brand"
                />
              </div>
              <div className="relative">
                <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="datetime-local"
                  className="w-full rounded-xl border border-gray-200 pl-11 pr-4 py-3 text-sm outline-none focus:border-brand text-gray-600"
                />
              </div>
              <button type="submit" className="btn-brand w-full !rounded-xl">
                Request A Ride <FiSend />
              </button>
              <p className="text-center text-xs text-gray-400">
                Or email us at{" "}
                <a href={site.emailHref} className="text-brand-dark font-medium">
                  {site.email}
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
