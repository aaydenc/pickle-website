import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

type DesktopOnlyProps = {
  children: React.ReactNode;
};

export default function DesktopOnly({ children }: DesktopOnlyProps) {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 900);
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="relative min-h-screen">
      {children}

      {!isDesktop && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center text-center p-6 z-50">
          <div>
            <p className="text-xl font-semibold mb-2">Desktop recommended</p>
            <p className="">
              This site is best experienced on a larger screen.
            </p>
            <p>
              Unless you're looking for the{" "}
              <NavLink
                to="http://map.thefrontiers.net:8080"
                end
                className="text-blue-500"
              >
                map
              </NavLink>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
