import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HIDDEN_PATHS = ["/wah"];

const TawkTo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const shouldHide = HIDDEN_PATHS.some((p) => pathname.startsWith(p));
    const tawk = (window as any).Tawk_API;
    if (tawk?.hideWidget && tawk?.showWidget) {
      if (shouldHide) {
        tawk.hideWidget();
      } else {
        tawk.showWidget();
      }
    }
    // Also handle the case where Tawk loads after this effect runs
    (window as any).Tawk_API = (window as any).Tawk_API || {};
    (window as any).Tawk_API.onLoad = () => {
      if (shouldHide) {
        (window as any).Tawk_API.hideWidget();
      }
    };
  }, [pathname]);

  return null;
};

export default TawkTo;
