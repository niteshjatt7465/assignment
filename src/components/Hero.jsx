import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section
      className="relative w-full pt-20 pb-24 overflow-hidden bg-transparent"
      id="home"
    >
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-20">
        <motion.div
          className="relative mx-auto max-w-400 text-center py-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.img
            src="/avatars/Vector5.png"
            className="absolute w-30 sm:w-50 md:w-100 lg:w-140 left-1/2 transform -translate-x-1/2 bottom-2.5 z-0 top-28 sm:top-30 md:top-38 lg:top-46"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          />
          <motion.h1
            className="relative font-gerbil text-[28px] sm:text-[38px] md:text-[70px] lg:text-[100px] leading-9 sm:leading-12.5 md:leading-22.5 lg:leading-31.5 text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
          >
            The{" "}
            <span className="relative inline-block">
              thinkers
            </span>{" "}
            and
            <br />
            doers were{" "}
            <span className="relative inline-block z-10 px-2 sm:px-4">
              <span className="absolute inset-0 bg-pink-200 rounded-full -z-10 w-full h-full" />
              changing
            </span>
            <br />
            the{" "}
            <span className="relative inline-block z-10 px-2 sm:px-4">
              <span className="absolute inset-0 bg-green-100 rounded-full -z-10 w-full h-full" />
              status
            </span>{" "}
            quo with
          </motion.h1>

          <motion.p
            className="mt-10 mx-auto max-w-[90%] sm:max-w-175 md:max-w-205 font-satoshi text-sm sm:text-base md:text-xl lg:text-2xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
          >
            We are a team of strategists, designers, communicators, researchers.
            Together we believe that progress only happens when you refuse to
            play things safe.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative mt-20 h-105 w-full"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.4,
              },
            },
          }}
        >
          {[
            { src: "/avatars/Ellipse 255.png", style: { top: "40%", left: "-10%" } },
            { src: "/avatars/Ellipse 261.png", style: { top: "25%", left: "0%" } },
            { src: "/avatars/Ellipse 258.png", style: { top: "0%", left: "20%" } },
            { src: "/avatars/Ellipse 256.png", style: { top: "50%", left: "30%" } },
            { src: "/avatars/Ellipse 257.png", style: { top: "15%", left: "50%" } },
            {
              src: "/avatars/Ellipse 260.png",
              style: {},
              extra:
                "w-[120px] sm:w-[150px] md:w-[170px] lg:w-[220px] border-4 sm:border-[5px] md:border-[6px] border-white top-[26%] left-[60%] sm:top-[28%] sm:left-[60%] md:top-[40%] md:left-[60%] lg:top-[40%] lg:left-[60%]",
            },
            { src: "/avatars/Ellipse 259.png", style: { top: "0%", left: "75%" } },
            { src: "/avatars/Ellipse 262.png", style: { top: "45%", left: "90%" } },
          ].map((avatar) => (
            <motion.img
              key={avatar.src}
              src={avatar.src}
              className={
                "absolute rounded-full w-30 sm:w-37.5 md:w-42.5 lg:w-55 " +
                (avatar.extra ?? "")
              }
              style={avatar.style}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{
                scale: 1.04,
                y: -6,
                transition: { type: "spring", stiffness: 260, damping: 20 },
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}