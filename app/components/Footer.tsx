import Link from "next/link";

interface FooterProps {
  showLithiumProBrand?: boolean;
  showTitansawBrand?: boolean;
}

export default function Footer({ showLithiumProBrand = false, showTitansawBrand = false }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold text-lg mb-3">Kizbuy</h3>
            <p className="text-gray-400 text-sm mb-3">
              Premium tech gadgets and electronics at wholesale prices. Fast delivery worldwide.
            </p>
            {showLithiumProBrand && (
              <p className="text-gray-400 text-sm mb-3">
                <span className="text-green-400 font-semibold">LithiumPro™</span> is a registered trademark distributed by Kizbuy.
              </p>
            )}
            {showTitansawBrand && (
              <p className="text-gray-400 text-sm mb-3">
                <span className="text-orange-400 font-semibold">Titansaw™</span> is a registered trademark distributed by Kizbuy.
              </p>
            )}
            <div className="text-gray-400 text-sm space-y-1">
              <p>info@kizbuy.com</p>
              <p>27 Buchanan Enterprise Centre, Glasgow</p>
              <p>G4 0TQ, United Kingdom</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/products#speakers" className="hover:text-amber-400">Speakers</Link></li>
              <li><Link href="/products#power" className="hover:text-amber-400">Power Banks</Link></li>
              <li><Link href="/products#wearables" className="hover:text-amber-400">Wearables</Link></li>
              <li><Link href="/products#accessories" className="hover:text-amber-400">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-amber-400">About</Link></li>
              <li><Link href="/products" className="hover:text-amber-400">Products</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/privacy-policy" className="hover:text-amber-400">Privacy</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-amber-400">Cookies</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-amber-400">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>&copy; {year} Kizbuy Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <span>VAT: GB 841 3625 78</span>
            <span>Registered in England</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
