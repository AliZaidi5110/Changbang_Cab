import Image from "next/image";
import { FaHospital, FaRing, FaRoute, FaTrain } from "react-icons/fa";

const services = [
  {
    image: "/images/services-1.png",
    title: "Rapid City Transfer",
    desc: "We will bring you quickly and comfortably to anywhere in your city, any time of day or night.",
  },
  {
    image: "/images/services-2.png",
    title: "Hotel Booking",
    desc: "Need a comfortable hotel? Our operators will book it for you and arrange a taxi straight to the address.",
  },
  {
    image: "/images/services-3.png",
    title: "Airport Transfers",
    desc: "Stress-free airport pickups and drop-offs with flight tracking, so we're always on time.",
  },
  {
    image: "/images/services-4.png",
    title: "Baggage Transport",
    desc: "Extra luggage, sports gear or parcels &mdash; we've got the space and the care to move it safely.",
  },
  {
    icon: FaTrain,
    title: "Train Station Transfers",
    desc: "Reliable pickups and drop-offs timed to your train, so you never miss a connection.",
  },
  {
    icon: FaRing,
    title: "Wedding Venues",
    desc: "Arrive in style on your big day with punctual, dressed-up rides to and from your venue.",
  },
  {
    icon: FaRoute,
    title: "Tours",
    desc: "Sit back and enjoy the sights with a driver who knows the best routes around town.",
  },
  {
    icon: FaHospital,
    title: "Hospital Appointments",
    desc: "Comfortable, on-time drop-offs and pick-ups for hospital and clinic appointments.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-label justify-center">See Our</span>
          <h2 className="h2-section mt-4 font-extrabold text-dark">
            Our Services
          </h2>
          <p className="mt-4 text-gray-500">
            Whatever your journey looks like, {" "}
            <b className="text-dark">Chongbang Cab</b> has a ride ready for
            you.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ image, icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/15 text-brand-dark group-hover:bg-brand group-hover:text-dark transition-colors">
                {image ? (
                  <Image src={image} alt={title} width={36} height={36} />
                ) : (
                  Icon && <Icon size={28} />
                )}
              </span>
              <h3 className="mt-6 text-lg font-bold text-dark">{title}</h3>
              <p className="mt-3 text-base text-gray-500 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
