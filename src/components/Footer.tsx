import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiPhoneCall,
  FiTwitter,
} from "react-icons/fi";
import { site } from "@/lib/site";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Tariffs", href: "#tariffs" },
  { label: "Drivers", href: "#drivers" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Book A Ride", href: "#booking" },
];

const services = [
  "Rapid City Transfer",
  "Airport Transfer",
  "Hotel Booking",
  "Baggage Transport",
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark-2 text-gray-400 pt-20 pb-8">
      <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-dark font-extrabold text-lg">
              C
            </span>
            <span className="text-white font-extrabold text-xl">
              {site.shortName}
              <span className="text-brand"> Cab</span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed max-w-xs">
            Fast, safe and reliable taxi service, available around the clock
            for every kind of journey.
          </p>
          <div className="mt-6 flex gap-3">
            {[FiFacebook, FiInstagram, FiTwitter].map((Icon, i) => (
              <span
                key={i}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 hover:bg-brand hover:text-dark transition-colors cursor-pointer"
              >
                <Icon size={16} />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-brand transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5">Our Services</h4>
          <ul className="space-y-3 text-sm">
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5">Get In Touch</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <FiPhoneCall className="mt-0.5 text-brand shrink-0" />
              <a href={site.phoneHref} className="hover:text-brand transition-colors">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FiMail className="mt-0.5 text-brand shrink-0" />
              <a
                href={site.emailHref}
                className="hover:text-brand transition-colors break-all"
              >
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FiMapPin className="mt-0.5 text-brand shrink-0" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p>Designed for riders who value time.</p>
      </div>
    </footer>
  );
}
