import { useRef } from "react";
import { FaStar } from "react-icons/fa";
import Card from "../components/Card";
import { Globe } from "../components/globe";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12 flex-row-reverse">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            alt="Coding perspective illustration"
            loading="lazy"
            decoding="async"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />

          <div className="z-10">
            <h3 className="headtext font-semibold text-3xl">I'm Saad.</h3>
            <div className="flex items-center">
              <h2 className="flex flex-col items-center border-r px-6 border-white">
                <span className="text-4xl font-bold">5</span>
                <FaStar className="text-white" fontSize={32} />
              </h2>
              <p className="subtext flex pl-6">
                I'm Level 2 Freelancer on Fiverr Achieving great scores as a
                Full Stack Developer, I developed frontend, backend and full
                stack scalable and optimized websites, as my numbers show. I
                build Full Stack Websites, and Hybrid apps.
              </p>
            </div>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE === CREATIVITY
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Backend"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="Frontend"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="React"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/next.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/ts.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/node.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext  text-2xl mb-4 font-semibold">Time Zone</p>
            <p className="subtext">
              I&apos;m available 24/7, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
