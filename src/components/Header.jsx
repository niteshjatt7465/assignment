import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function OnlineStatus() {
  const [online, setOnline] = useState(
    typeof navigator !== "undefined" ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const color = online ? "bg-green-500" : "bg-red-500";
  const label = online ? "Online" : "Offline";

  return (
    <motion.div
      className="ml-3 flex items-center gap-1 text-xs sm:text-sm font-satoshi"
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
      <span className="text-gray-700">{label}</span>
    </motion.div>
  );
}

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#footer" },
  { label: "FAQ`s", href: "#faqs" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white" id="nav">
      <motion.div
        className="max-w-screen-2xl mx-auto h-24 px-4 lg:px-20 flex items-center"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex w-full items-center">
          <div className="flex-1 flex items-center">
            <motion.a
              href="#home"
              className="font-gerbil text-2xl lg:text-[28px] leading-[2.9rem] text-black"
              onClick={() => setOpen(false)}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              elementum
            </motion.a>
            <OnlineStatus />
          </div>

          <nav className="hidden md:flex flex-none items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-satoshi text-lg leading-6 font-medium text-black hover:text-green-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex-1 flex justify-end">
            <button
              className="relative w-8 h-5 flex flex-col justify-between md:hidden z-50 focus:outline-none cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              <span className={`block w-full h-0.5 bg-black transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[9px]" : ""}`} />
              <span className={`block w-full h-0.5 bg-black transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[9px]" : ""}`} />
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-gray-200 bg-white overflow-hidden"
          >
            <ul className="flex flex-col py-2">
              {NAV_ITEMS.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={item.href}
                    className="block w-full text-left px-6 py-3 font-satoshi text-lg leading-6 font-medium text-black hover:bg-gray-50 hover:text-green-600 transition-all"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}