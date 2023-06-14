import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

type LogoProps = {
  title: string;
};

const Logo = ({ title }: LogoProps) => {
  return (
    <>
      <FaGithub className="inline pr-2 text-3xl" />
      <Link to="/" className="text-lg font-bold align-middle">
        {title}
      </Link>
    </>
  );
};

export default Logo;
