import { motion } from "framer-motion";

const footerCols = [
  {
    title: "Company",
    items: [
      { label: "Home", href: "#home" },
      { label: "Studio", href: "#studio" },
      { label: "Services", href: "#services" },
      { label: "Blog", href: "#blog" },
    ],
  },
  {
    title: "Terms & Policies",
    items: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Explore", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
  },
  {
    title: "Follow Us",
    items: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Youtube", href: "#" },
      { label: "Twitter", href: "#" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const colVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function FooterCTA() {
  return (
    <section className="w-full flex justify-center bg-[#D7EEDD]" id="footer">
      <div className="relative max-w-480 w-full px-4 lg:px-20 py-24 flex flex-col gap-20">
        <motion.div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 flex gap-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.img
            src="/avatars/Vector2519.png"
            alt=""
            className="w-22.5 sm:w-30 lg:w-41 h-auto"
            animate={{ y: [0, -6, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3.2,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src="/avatars/Vector2518.png"
            alt=""
            className="w-22.5 sm:w-30 lg:w-41 h-auto"
            animate={{ y: [0, 6, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3.2,
              ease: "easeInOut",
              delay: 0.4,
            }}
          />
        </motion.div>

        <motion.img
          src="/avatars/Ellipse739.png"
          alt=""
          className="
            absolute z-0
            w-12.5 sm:w-15 md:w-20 lg:w-25 xl:w-30
            top-42.5 right-7.5
            sm:top-50 sm:right-10
            md:top-57.5 md:right-5
            lg:top-57.5 lg:right-15
            xl:top-57.5 xl:right-25
          "
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <motion.div
          className="w-full flex justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="relative w-full max-w-226 rounded-[60px] px-6 sm:px-10 lg:px-16 py-10 sm:py-12 lg:py-16 text-center bg-white/5 mt-15 backdrop-blur-sm"
            whileHover={{
              y: -8,
              boxShadow: "0 22px 60px rgba(0,0,0,0.18)",
              transition: { type: "spring", stiffness: 230, damping: 20 },
            }}
          >
            <motion.h2
              className="font-gerbil text-[28px] sm:text-[45px] lg:text-[72px] leading-10 sm:leading-16 lg:leading-22 mb-4"
              variants={colVariants}
            >
              Subscribe to
              <br />
              our newsletter
            </motion.h2>
            <motion.p
              className="font-satoshi text-[16px] sm:text-[18px] lg:text-[24px] leading-6 sm:leading-7 lg:leading-9 max-w-139.25 mx-auto mb-8"
              variants={colVariants}
            >
              To make your stay special and even more memorable
            </motion.p>

            <motion.button
              className="inline-flex items-center justify-center rounded-[100px] bg-black text-white font-satoshi font-bold text-[16px] sm:text-[18px] lg:text-[20px] leading-[30px] px-10 py-3 sm:px-12 sm:py-4"
              variants={colVariants}
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 14px 30px rgba(0,0,0,0.25)",
                transition: { type: "spring", stiffness: 260, damping: 18 },
              }}
              whileTap={{ scale: 0.97 }}
            >
              Subscribe now
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full flex justify-center mt-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div className="w-full max-w-400 border-t border-black" />
        </motion.div>

        <motion.div
          className="w-full max-w-400 mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mt-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {footerCols.map((col) => (
            <motion.div key={col.title} variants={colVariants}>
              <h3 className="font-gerbil text-[18px] sm:text-[20px] lg:text-[22px] leading-7.5 mb-3 text-black">
                {col.title}
              </h3>
              <ul className="space-y-1">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-satoshi text-[16px] sm:text-[18px] lg:text-[20px] leading-7.5 text-black hover:translate-x-1 transition-transform inline-block"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div variants={colVariants}>
            <h3 className="font-gerbil text-[18px] sm:text-[20px] lg:text-[22px] leading-7.5 mb-3 text-black">
              Contact Us
            </h3>
            <p className="font-satoshi text-[16px] sm:text-[18px] lg:text-[20px] leading-7.5 text-black">
              1498 W Fulton St, Ste
              <br />
              2D Chicago, IL 63867.
              <br />
              <br />
              (123) 456789000
              <br />
              <br />
              <a
                href="mailto:info@elementum.com"
                className="underline underline-offset-2"
              >
                info@elementum.com
              </a>
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full flex flex-col items-center gap-1 mt-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="font-satoshi text-[14px] sm:text-[16px] lg:text-[18px] leading-7.5 text-center text-black">
            © 2026 Elementum. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
