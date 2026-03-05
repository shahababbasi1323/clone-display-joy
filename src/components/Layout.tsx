import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import TawkTo from "./TawkTo";
import WelcomePopup from "./WelcomePopup";
import GlobalSchemas from "./GlobalSchemas";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      <Footer />
      <WhatsAppButton />
      <TawkTo />
      <WelcomePopup />
      <GlobalSchemas />
    </div>
  );
};

export default Layout;
