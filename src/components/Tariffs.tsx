import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import { site } from "@/lib/site";

const tariffs = [
  {
    name: "Standard",
    price: "£2",
    image: "/images/tariff-1.png",
    desc: "A comfortable standard sedan for a drive around the city, ready at your service.",
    features: ["Up to 4 passengers", "AC included", "City rides"],
    featured: false,
  },
  {
    name: "Business",
    price: "£2.7",
    image: "/images/tariff-2.png",
    desc: "A smarter ride for business trips, meetings and airport transfers in comfort.",
    features: ["Up to 4 passengers", "Premium sedan", "Priority pickup"],
    featured: true,
  },
];

export default function Tariffs() {
  return (
    <section id="tariffs" className="py-24 bg-gray-50">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-label justify-center">Get More Benefits</span>
          <h2 className="h2-section mt-4 font-extrabold text-dark">
            Our Tariffs
          </h2>
          <p className="mt-4 text-gray-500">
            Transparent, simple pricing per kilometre &mdash; no surprises,
            just a great ride.
          </p>
        </div>

        <div className="mt-14 grid gap-8 max-w-3xl mx-auto sm:grid-cols-2">
          {tariffs.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1.5 ${
                t.featured
                  ? "bg-dark text-white shadow-2xl scale-[1.03]"
                  : "bg-white text-dark shadow-sm hover:shadow-xl"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 right-6 rounded-full bg-brand px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-dark">
                  Popular
                </span>
              )}
              <div className="flex justify-center">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={180}
                  height={90}
                  className="h-20 w-auto object-contain"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold">{t.name}</h3>
              <p
                className={`mt-3 text-base leading-relaxed ${
                  t.featured ? "text-gray-300" : "text-gray-500"
                }`}
              >
                {t.desc}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-brand">
                  {t.price}
                </span>
                <span
                  className={`text-sm ${
                    t.featured ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  /km
                </span>
              </div>
              <ul className="mt-6 space-y-2.5 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <FiCheck className="text-brand shrink-0" />
                    <span className={t.featured ? "text-gray-200" : "text-gray-600"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={site.phoneHref}
                className={`mt-8 flex min-h-11 items-center justify-center rounded-full text-center font-semibold text-sm transition-colors ${
                  t.featured
                    ? "bg-brand text-dark hover:bg-brand-dark"
                    : "bg-dark/5 text-dark hover:bg-brand hover:text-dark"
                }`}
              >
                Book This Ride
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
