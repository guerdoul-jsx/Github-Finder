import { FaFacebookF, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="p-4 footer bg-neutral text-neutral-content">
      <div className="container flex items-center justify-between w-full px-3 mx-auto md:px-8">
        <div className="flex items-center md:space-x-4">
          <div className="hidden md:flex">
            <Logo title="Github" />
          </div>
          <p>Copyright © {footerYear} - All right reserved</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/mahmoud2153"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://twitter.com/MGuerdoul"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/mahmoud-guerdoul-0b56b6229/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/guerdoul-jsx"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
