import Features from "./components/Features.jsx";
import FooterCTA from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Services from "./components/Services.jsx";
import Testimonials from "./components/Testimonials.jsx";

function BackgroundDecor() {
  return (
    <>
      <img
        src="/avatars/Vector2510.png"
        alt=""
        className="
          absolute z-0
          w-7.5 sm:w-10 md:w-10
          h-37.5 sm:h-42.5 md:h-94
          top-112.5 sm:top-130 md:top-150 lg:top-150
          -left-2.5 sm:left-0 md:-left-2
        "
      />
      <img
        src="/avatars/Vector2511.png"
        alt=""
        className="
          absolute z-0
          w-7.5 sm:w-10 md:w-10
          h-37.5 sm:h-42.5 md:h-94
          top-115 sm:top-132.5 md:top-150.5 lg:top-150
          left-10 sm:left-12.5 md:left-13.25
        "
      />
      <img
        src="/avatars/Ellipse736.png"
        alt=""
        className="
          absolute z-0
          w-7.5 sm:w-8.75 md:w-15 lg:w-20 xl:w-25
          top-87.5 right-7.5
          sm:top-87.5 sm:right-10
          md:top-107.5 md:right-5
          lg:top-225 lg:right-15
          xl:top-107.5 xl:right-25
        "
      />
      <div
        className="
          absolute z-0
          w-41.5 h-41.5
          rounded-full
          bg-[#FF2020]/70
          blur-[120px]   
        "
        style={{
          top: "1595px",
          left: "877px",
        }}
      />

    </>
  );
}
export default function App() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <BackgroundDecor />

      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <Services />
        <Testimonials />
        <FooterCTA />
      </div>
      <ScrollToTop />
    </div>
  );
}