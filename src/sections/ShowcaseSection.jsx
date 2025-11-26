import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project-1.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>School Transport Management System</h2>
              <p className="text-white-50 md:text-xl">
                An app built with Next.js, React Native, Expo, & TailwindCSS for
                a fast, user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="/images/project-3.png" alt="Hardware Tools Website" />
              </div>
              <h2>
                <a href="https://www.grinddrill.com">Hardware Tools Website</a>
              </h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#407294]">
                <img
                  className="rounded-xl border-none outline-none"
                  src="/images/project-2.png"
                  alt="EasyKrypt Web3 Banking"
                />
              </div>
              <h2>
                <a href="https://easy-krypt.vercel.app">Easy Krypt - A Web3 Banking App</a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
