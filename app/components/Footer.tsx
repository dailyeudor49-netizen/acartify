import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold text-lg mb-3">Acartify</h3>
            <p className="text-gray-400 text-sm mb-3">
              Next-gen wholesale tech platform. Dark mode for your business, bright future for profits.
            </p>
            <div className="text-gray-400 text-sm space-y-1">
              <p>info@acartify.com</p>
              <p>78 Grafton Street</p>
              <p>Dublin D02 VF65, Ireland</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/products#speakers" className="hover:text-teal-400">Speakers</Link></li>
              <li><Link href="/products#power" className="hover:text-teal-400">Power Banks</Link></li>
              <li><Link href="/products#wearables" className="hover:text-teal-400">Wearables</Link></li>
              <li><Link href="/products#accessories" className="hover:text-teal-400">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-teal-400">About</Link></li>
              <li><Link href="/products" className="hover:text-teal-400">Products</Link></li>
              <li><Link href="/contact" className="hover:text-teal-400">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/privacy-policy" className="hover:text-teal-400">Privacy</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-teal-400">Cookies</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-teal-400">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>&copy; {year} Acartify Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <span>VAT: IE 9847231F</span>
            <span>Registered in Ireland</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
