import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Testimonials() {
  return (
    <section className="w-full flex justify-center" id="faqs">
      <div className="relative max-w-480 w-full px-4 lg:px-20 py-24 flex justify-center overflow-hidden">
        <motion.img
          src="/avatars/image.png"
          alt=""
          className="
            pointer-events-none
            absolute inset-x-0 top-0 mx-auto -z-10
            w-full max-w-461
            h-55 sm:h-90 md:h-120 lg:h-162.25
            object-cover
          "
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />

        <div className="w-full max-w-404.5 mx-auto flex flex-col items-center">
          <motion.div
            className="relative max-w-166.5 text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="font-gerbil text-[32px] leading-10 sm:text-[42px] sm:leading-13 lg:text-[56px] lg:leading-16.5 tracking-[-0.025em] text-center">
              <span className="relative inline-block z-10">
                <span className="absolute inset-0 bg-green-100 rounded-full z-[-1] w-full h-full" />
                What
              </span>{" "}
              our customer
              <br />
              says <span className="relative inline-block">About Us</span>
            </h2>
          </motion.div>

          <motion.div
            className="mb-10 h-7.5 flex items-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <img
              src="/avatars/Vector5.png"
              alt=""
              className="w-45 sm:w-60 lg:w-92.75 h-6 sm:h-7 lg:h-7.5 object-contain"
            />
          </motion.div>

          {/* Testimonial card */}
          <motion.div
            className="relative w-full max-w-219.75 bg-[#D7EEDD4D] rounded-4xl sm:rounded-[40px] lg:rounded-[60px] px-6 sm:px-10 lg:px-16 py-8 sm:py-12 lg:py-16"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            whileHover={{
              y: -8,
              boxShadow:
                "0 24px 60px rgba(0, 0, 0, 0.12)",
              transition: { type: "spring", stiffness: 230, damping: 20 },
            }}
          >
            <motion.div
              className="absolute left-4 sm:left-8 top-4 sm:top-6 flex gap-1 items-end"
              initial={{ opacity: 0, x: -10, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              <img
                src="/avatars/invertedcomma1.png"
                alt=""
                className="w-3 sm:w-4.5 lg:w-6.5 h-auto"
              />
              <img
                src="/avatars/invertedcomma2.png"
                alt=""
                className="w-3 sm:w-4.5 lg:w-6.5 h-auto"
              />
            </motion.div>
            <motion.div
              className="absolute right-8 sm:right-8 bottom-4 sm:bottom-6 flex gap-1 items-start"
              initial={{ opacity: 0, x: 10, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
            >
              <img
                src="/avatars/invertedcomma3.png"
                alt=""
                className="w-3 sm:w-4.5 lg:w-6.5 h-auto rotate-0"
              />
              <img
                src="/avatars/invertedcomma4.png"
                alt=""
                className="w-3 sm:w-4.5 lg:w-6.5 h-auto rotate-0"
              />
            </motion.div>
            <motion.p
              className="font-satoshi text-[12px] sm:text-[18px] lg:text-[30px] leading-6 sm:leading-7.5 lg:leading-10.5 text-center text-black max-w-175.75 mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
            >
              Elementum delivered the site within the timeline as they requested.
              In the end, the client found a 50% increase in traffic within days
              since its launch. They also had an impressive ability to use
              technologies that the company has not used, which have also
              proved to be easy to use and reliable.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}