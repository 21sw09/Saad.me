import { twMerge } from "tailwind-merge";
import { technologies } from "../assets";
import Marquee from "../components/Marquee";

import TitleHeader from "../components/TitleHeader";
const firstRow = technologies.slice(0, technologies.length / 2);
const secondRow = technologies.slice(technologies.length / 2);

const ReviewCard = ({ name, icon }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo/70 to-storm hover:bg-indigo hover-animation",
      )}
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt={name}
          src={icon}
          loading="lazy"
          decoding="async"
        />
        <div className="flex items-center justify-between flex-1">
          <figcaption className="capitalize text-sm font-medium text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export default function TechSkills() {
  return (
    <div
      id="skills"
      className="items-start mt-40 md:mt-35 c-space section-padding"
    >
      {/* <h2 className="text-heading">Hear From My Clients</h2> */}
      <TitleHeader
        title="How I Can Contribute & My Key Skills"
        sub="🤝 What I Bring to the Table"
      />
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="duration-1000">
          {firstRow.map((tech) => (
            <ReviewCard key={tech.name} {...tech} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((tech) => (
            <ReviewCard key={tech.name} {...tech} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
