import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-bg text-tprimary">
      <Header />
      <main key={pathname} className="animate-fadein mx-auto w-full max-w-[1000px] grow px-5 pb-20 pt-11 sm:px-7">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
