import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" },
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="hero-layout lg:flex-row flex-col-reverse">
        {/* LEFT: Hero Content */}
        <header className="mt-8 lg:mt-0 flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h2 className="text-7xl">
                Hi, I'm <span className="font-bold">Saad</span>
              </h2>
              <h1>
                a
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        {/* <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        /> */}
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              I build full stack scalable, responsive and fast websites and apps
              from past 3+ years.
            </p>

            <Button
              text="My Resume"
              className="md:w-80 md:h-16 w-60 h-12 font-semibold "
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: Visual */}
        <figure className="p-0 md:pr-32 w-2/3 mx-auto md:w-1/2 lg:w-3/4">
          <img
            src="/images/hero.jpg"
            width={2000}
            height={2000}
            loading="eager"
            fetchpriority="high"
            decoding="async"
            className="w-[500px] md:w-[750px] lg:w-[1200px] rounded-full"
            alt="Portrait of Saad"
            sizes="(min-width:1280px) 900px, (min-width:768px) 620px, 85vw"
          />
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
