import Image from "next/image";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Anastasia Stone",
    image: "/images/client-1.jpg",
    text: "Booked a ride to the airport at 5am and the driver was outside within minutes. Clean car, friendly driver, fair price. Highly recommend Chongbang Cab!",
  },
  {
    name: "Patrick James",
    image: "/images/client-5.jpg",
    text: "I use them for my daily commute. Always on time, always professional. It's rare to find a cab company this reliable these days.",
  },
  {
    name: "Steven Rashford",
    image: "/images/client-4.jpg",
    text: "Needed a minivan for a family trip with lots of luggage and they sorted it in minutes. Great communication from booking to drop-off.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-label justify-center">Happy Client&apos;s</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-dark">
            Testimonials
          </h2>
          <p className="mt-4 text-gray-500">
            Don&apos;t just take our word for it &mdash; here&apos;s what
            riders say about {" "}
            <b className="text-dark">Chongbang Cab</b>.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-1 text-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar key={i} fill="currentColor" />
                ))}
              </div>
              <p className="mt-5 text-gray-600 text-sm leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <span className="font-bold text-dark text-sm uppercase tracking-wide">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
