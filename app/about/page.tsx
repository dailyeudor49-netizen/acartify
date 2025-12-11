import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Acartify, your trusted wholesale tech partner.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-gray-900 to-teal-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold">About Acartify</h1>
          <p className="text-gray-300 mt-1">Your trusted tech partner since 2019</p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
              <div className="space-y-3 text-gray-600">
                <p>Acartify was founded in 2019 in Paris with one goal: make quality tech accessible at fair prices.</p>
                <p>Today, we serve over 450 customers worldwide with a catalogue of 2,600+ products. Our success is built on reliability, quality, and customer service.</p>
                <p>Whether you&apos;re a retailer or individual buyer, we provide wholesale prices, fast delivery, and payment on delivery.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "6", l: "Years" },
                { n: "2,600+", l: "Products" },
                { n: "450+", l: "Customers" },
                { n: "35+", l: "Countries" },
              ].map((s, i) => (
                <div key={i} className="p-5 bg-teal-50 rounded-xl text-center">
                  <div className="text-2xl font-bold text-teal-600">{s.n}</div>
                  <div className="text-gray-600 text-sm">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-5">
            {[
              { t: "Quality", d: "Every product tested before shipping" },
              { t: "Trust", d: "Transparent pricing, no hidden fees" },
              { t: "Speed", d: "Fast 24/48h delivery worldwide" },
              { t: "Service", d: "Responsive support team" },
            ].map((v, i) => (
              <div key={i} className="p-5 bg-white rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-1">{v.t}</h3>
                <p className="text-gray-600 text-sm">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Milestones</h2>
          <div className="space-y-4">
            {[
              { y: "2019", t: "Founded in Paris" },
              { y: "2020", t: "Expanded into audio products" },
              { y: "2021", t: "Launched international shipping" },
              { y: "2023", t: "Reached 500+ customers" },
              { y: "2025", t: "2,600+ products in catalogue" },
            ].map((m, i) => (
              <div key={i} className="flex gap-4 items-center">
                <span className="text-teal-600 font-bold w-14">{m.y}</span>
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <p className="text-gray-700">{m.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-600 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Work with Us</h2>
          <p className="text-teal-100 mb-5">Join our network of satisfied customers</p>
          <Link href="/contact" className="px-6 py-2.5 bg-white text-teal-600 font-medium rounded-lg hover:bg-teal-50">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
