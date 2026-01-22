import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <a href="/" className="logo">
            <img
              src="/logo.png"
              width={60}
              height={60}
              loading="lazy"
              decoding="async"
              alt="Saad logo"
            />
          </a>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a href={socialImg.url} key={index} className="icon">
              <img
                src={socialImg.imgPath}
                className="invert !w-18"
                alt="social icon"
                loading="lazy"
                decoding="async"
                width={40}
                height={40}
              />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Saad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
