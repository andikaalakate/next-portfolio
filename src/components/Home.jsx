import { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const animatedTextRef = useRef(null);

  useEffect(() => {
    const animatedText = animatedTextRef.current;

    function addNewAnimation() {
      animatedText.classList.remove("animate__zoomInRight");

      setTimeout(() => {
        animatedText.classList.remove("animate__pulse");
        void animatedText.offsetWidth;
        animatedText.classList.add("animate__pulse");
      }, 5000);
    }

    animatedText.addEventListener("animationend", addNewAnimation);

    return () => {
      animatedText.removeEventListener("animationend", addNewAnimation);
    };
  }, []);
  return (
    <>
      <section id="home" className="pt-24 px-2 items-center w-full">
        <div className="container rounded-t-lg shadow-lg bg-gradient-to-br from-secondary to-primary">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-2 sm:w-1/2 hp:w-full sm:hidden mini:visible">
              <div className="mt-6 lg:mt-0 xl:-right-24 sm:pb-4 lg:self-end">
                <img
                  src="./img/andika-alakate-3.webp"
                  alt="Andika Alakate"
                  className="max-w-full rounded-3xl mx-auto drop-shadow-xl lg:max-w-sm xl:-right-24 relative animate__animated animate__backInLeft"
                />
              </div>
            </div>

            <div className="w-full self-center p-4 sm:w-1/2 sm:pb-8 mini:pb-4 hp:w-full">
              <h1 className="text-base font-semibold text-dark md:text-xl hp:text-lg">
                <span className="text-transparent font-bold bg-gradient-to-br from-blue-400 to-green-300 bg-clip-text">
                  Halo Semua{" "}
                  <span className="text-opacity-100 font-bold text-white">
                    👋🏻
                  </span>
                  , saya
                </span>{" "}
                <span
                  ref={animatedTextRef}
                  className="font-bold block mt-1 sm:text-4xl hp:text-3xl mini:text-3xl font-firaSans selection:bg-secondary selection:text-slate-300 selection:underline animate__animated animate__zoomInRight text-transparent bg-gradient-to-br from-slate-400 to-slate-50 bg-clip-text hover:scale-105 transition-all duration-500"
                  id="animatedText"
                >
                  Andika Alakate
                </span>
              </h1>
              <h2 className="font-medium text-dark_sec text-lg mb-5 lg:text-2xl font-firaCode">
                <Typewriter
                  words={[
                    "Fullstack Web Developer",
                    "Programmer",
                    "Game Developer",
                    "Photographer",
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                />
              </h2>
              <p className="font-medium text-slate-400 mb-10 leading-relaxed font-firaMono mix-blend-d hover:scale-105 transition duration-500 active:underline">
                <span className="font-bold text-slate-300 selection:underline">
                  Knowledge
                </span>{" "}
                can change one`s destiny, and{" "}
                <span className="font-bold text-slate-300">diligence</span> will
                result in glory.
              </p>

              <a
                href="#contact"
                className="text-sm font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-75 transition-all duration-500 ease-in-out mini:py-2 mini:px-5 self-start"
              >
                Hubungi Saya
              </a>
            </div>

            <div className="w-full self-center px-2 sm:w-1/2 hp:w-full sm:block mini:hidden">
              <div className="mt-6 lg:mt-0 xl:-right-24 sm:pb-4 lg:self-end">
                <img
                  src="./img/andika-alakate-3.webp"
                  alt="Andika Alakate"
                  className="max-w-full rounded-3xl mx-auto drop-shadow-xl lg:max-w-sm xl:-right-24 relative animate__animated animate__backInLeft"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
