import { FaStar } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";
import TitleHeader from "../components/TitleHeader";
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const ReviewCard = ({ img, name, url, review }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo/70 to-storm hover:bg-indigo hover-animation"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full bg-white/10"
          width="32"
          height="32"
          alt={name}
          src={img}
        />
        <div className="flex items-center justify-between flex-1">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs flex font-medium text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">
        {review.slice(0, 40)}...
        <a href={url}  className="pl-2 text-xs font-semibold hover:scale-110 ">
          Verify
        </a>
      </blockquote>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div id="testimonials" className="items-start mt-40 md:mt-35 c-space section-padding">
      {/* <h2 className="text-heading">Hear From My Clients</h2> */}
      <TitleHeader
        title="What my Clients Say"
        sub="✅ How I Performed in past"
      />
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="duration-1000">
          {firstRow.map((review) => (
            <ReviewCard key={review.review} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.review} {...review} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
