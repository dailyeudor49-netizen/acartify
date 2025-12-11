import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-950">
      {/* Hero - Tech Dark Mode */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-emerald-500/30 px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-emerald-400 text-sm font-mono">SYSTEM ONLINE</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Next-Gen<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Wholesale Tech
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-xl">
              Premium electronics distribution from Dublin. Dark mode for your
              business operations. Bright future for your profits.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="px-8 py-4 bg-emerald-500 text-gray-950 font-bold rounded-lg hover:bg-emerald-400 transition-colors">
                ACCESS CATALOG
              </Link>
              <Link href="/contact" className="px-8 py-4 border border-gray-700 text-white font-medium rounded-lg hover:border-emerald-500 hover:text-emerald-400 transition-colors">
                INITIALIZE CONTACT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Terminal */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-900 rounded-xl p-6 font-mono border border-gray-800">
            <div className="flex items-center gap-2 mb-4 text-gray-500 text-sm">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="ml-4">system_stats.sh</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { label: "PRODUCTS", value: "3,200+", status: "ACTIVE" },
                { label: "PARTNERS", value: "520+", status: "CONNECTED" },
                { label: "UPTIME", value: "8 YRS", status: "STABLE" },
                { label: "DISPATCH", value: "24H", status: "READY" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-gray-500 text-xs mb-1">{s.label}</div>
                  <div className="text-3xl font-bold text-white">{s.value}</div>
                  <div className="text-emerald-400 text-xs mt-1">● {s.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories - Tech Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-2">Product Matrix</h2>
          <p className="text-gray-500 mb-8">Select category to explore</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "💻", name: "Computing", code: "COMP" },
              { icon: "📷", name: "Imaging", code: "IMG" },
              { icon: "🎮", name: "Gaming", code: "GAME" },
              { icon: "🏠", name: "Smart Home", code: "IOT" },
              { icon: "📱", name: "Mobile", code: "MOB" },
              { icon: "🔊", name: "Audio", code: "AUD" },
            ].map((c, i) => (
              <Link
                key={i}
                href="/products"
                className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-emerald-500/50 transition-colors group"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-3xl">{c.icon}</span>
                  <span className="text-xs font-mono text-gray-600 group-hover:text-emerald-400">[{c.code}]</span>
                </div>
                <div className="text-white font-medium group-hover:text-emerald-400 transition-colors">{c.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features - Dark Cards */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">System Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "🇪🇺", title: "EU Logistics", desc: "Strategic warehouse network across Europe. Same-day dispatch." },
              { icon: "📋", title: "Certified", desc: "All products meet EU compliance standards. Full documentation." },
              { icon: "👤", title: "Dedicated Support", desc: "Personal account manager assigned to your business." },
              { icon: "💳", title: "Flex Payment", desc: "Multiple options including net terms for established partners." },
            ].map((f, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
                <div className="text-2xl mb-4">{f.icon}</div>
                <h3 className="text-white font-medium mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Terminal Style */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 text-center">
            <div className="text-emerald-400 font-mono text-sm mb-4">{">"} READY TO CONNECT?</div>
            <h2 className="text-3xl font-bold text-white mb-4">Initialize Partnership</h2>
            <p className="text-gray-400 mb-8">
              Join 520+ active partners in our network. Zero minimum order for new connections.
            </p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-emerald-500 text-gray-950 font-bold rounded-lg hover:bg-emerald-400 transition-colors">
              START CONNECTION
            </Link>
            <p className="text-gray-600 text-sm mt-8 font-mono">
              hello@acartify.ie | Dublin, Ireland
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
