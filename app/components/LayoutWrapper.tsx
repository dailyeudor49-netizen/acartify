"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

// Routes that should NOT show the main header/footer (TY pages and special landing pages)
const LANDING_ROUTES = [
  "/ty-it",
  "/ty-cz",
  "/ty-hu",
  "/ty-pl",
  "/ty-sk",
  "/ty-lt",
];

// Routes that should show only footer (no header) with LithiumPro brand
const LITHIUMPRO_ROUTES = [
  "/lithiumpro-it",
  "/lithiumpro-pl",
  "/lithiumpro-hu",
  "/lithiumpro-cz",
  "/lithiumpro-sk",
  "/gg-lithiumpro-it",
];

// Routes that should show only footer (no header) with Titansaw brand
const TITANSAW_ROUTES = [
  "/titansaw-it",
  "/titansaw-hu",
  "/titansaw-cz",
  "/titansaw-pl",
  "/titansaw-lt",
  "/gg-titansaw-it",
];

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Check if current route is a landing page (no header/footer)
  const isLandingPage = LANDING_ROUTES.some(route => pathname?.startsWith(route));

  // Check if current route should show only footer with LithiumPro brand
  const isLithiumProLanding = LITHIUMPRO_ROUTES.some(route => pathname?.startsWith(route));

  // Check if current route should show only footer with Titansaw brand
  const isTitansawLanding = TITANSAW_ROUTES.some(route => pathname?.startsWith(route));

  if (isLandingPage) {
    return <>{children}</>;
  }

  if (isLithiumProLanding) {
    return (
      <>
        {children}
        <Footer showLithiumProBrand />
      </>
    );
  }

  if (isTitansawLanding) {
    return (
      <>
        {children}
        <Footer showTitansawBrand />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
