import TitleHeader from "../components/TitleHeader";
import { services } from "../constants";

const Services = () => {
  return (
    <div className="w-full padding-x-lg  md:mt-40 mt-20">
      <TitleHeader title="Services" sub="💼 What I can do?" />

      <div className="mx-auto mt-12 grid-3-cols">
        {services.map(({ imgPath, title, desc, pricing }) => (
          <div
            key={title}
            className="card-border rounded-xl p-8 flex flex-col gap-4"
          >
            <div className="size-14 flex items-center justify-center rounded-full">
              <img
                src={imgPath}
                alt={title}
                loading="lazy"
                decoding="async"
                width={56}
                height={56}
              />
            </div>
            <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
            <p className="text-white-50 text-lg">{desc}</p>
            <span className="font-semibold">
              Starting from <strong className="font-bold">{pricing}</strong>
            </span>
          </div>
        ))}
        <div className="card-border rounded-xl p-8 flex flex-col gap-4 items-center justify-center">
          <p className="font-medium text-xl text-center">
            Can't see your service? <br />
            No problem click below
          </p>
          <a
            href="https://wa.me/+447512270510"
            className="w-full"
            target="_blank"
          >
            <div className="cta-button group">
              <div className="bg-circle" />
              <p className="text font-semibold">Get Started</p>
              <div className="arrow-wrapper">
                <img
                  src="/images/arrow-down.svg"
                  className="-rotate-90"
                  alt="arrow"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
