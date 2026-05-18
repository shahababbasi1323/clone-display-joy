import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import TawkTo from "./TawkTo";
import WelcomePopup from "./WelcomePopup";
import GlobalSchemas from "./GlobalSchemas";
import CrawlerLinks from "./CrawlerLinks";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip link for keyboard users and browser AI agents */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-primary-foreground focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 pt-16 md:pt-20">{children}</main>
      <Footer />
      <WhatsAppButton />
      <TawkTo />
      <WelcomePopup />
      <GlobalSchemas />
      <CrawlerLinks />
    </div>
  );
};

export default Layout;
