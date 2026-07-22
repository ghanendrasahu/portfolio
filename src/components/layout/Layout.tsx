import { lazy, Suspense, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Scene3D = lazy(() => import("../3d/Scene3D"));

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function Layout() {
  const { pathname } = useLocation();
  const [reducedMotion] = useState(prefersReducedMotion);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className="relative flex min-h-screen flex-col bg-bg text-tprimary">
      {!reducedMotion && (
        <div className="fixed inset-0 z-0" aria-hidden="true">
          <Suspense fallback={null}>
            <Scene3D route={pathname} />
          </Suspense>
        </div>
      )}
      <Header />
      <main key={pathname} className="animate-fadein relative z-10 mx-auto w-full max-w-[1000px] grow px-5 pb-20 pt-11 sm:px-7">
        <Outlet />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
