import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const home = document.querySelector("#home");
    if (home) {
      home.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Back to top"
      className={`
        fixed bottom-6 right-4 sm:bottom-8 sm:right-8
        z-50
        flex items-center justify-center
        w-10 h-10 sm:w-12 sm:h-12
        rounded-full
        bg-green-500 text-black
        shadow-[0_10px_25px_rgba(0,0,0,0.25)]
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(0,0,0,0.35)]
        hover:bg-green-600
        active:scale-95
        ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-75 pointer-events-none"}
      `}
    >
      <ChevronUpIcon className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
    </button>
  );
}