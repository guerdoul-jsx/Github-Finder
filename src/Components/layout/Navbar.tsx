import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FC, ChangeEvent, useState, useEffect } from "react";
import { MdNightlight } from "react-icons/md";

type NavBarProps = {
  title: string;
};

type ThemeProps = string | null;

const Navbar: FC<NavBarProps> = ({ title }) => {
  const [theme, setTheme] = useState<ThemeProps>(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    if (checked) {
      setTheme("emerald");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme as string);
    const localTheme = localStorage.getItem("theme");
    document
      .querySelector("html")
      ?.setAttribute("data-theme", localTheme as string);
  }, [theme]);

  return (
    <nav className="mb-12 navbar shaow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <Logo title={title} />
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn ">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn ">
              About
            </Link>
            <button className="btn btn-ghost btn-sm rounded-btn ">
              <label className="swap swap-rotate">
                <input type="checkbox" onChange={handleChange} />
                <MdNightlight size={20} />
              </label>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
};

export default Navbar;
