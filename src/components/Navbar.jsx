import { useState } from "react";
import { navLinks } from "../constants";
import { close, logo, menu } from "../assets";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Hamburger = ({ open, setOpen }) => {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="outline-none tap_highlight_remove"
    >
      <div className="relative w-10 h-8">
        <div
          className={`absolute h-1 transition-all bg-black rounded-full right-0 ${
            open ? "w-10 rotate-45 top-1/2 -translate-y-1/2" : "w-7 top-0"
          }`}
        ></div>
        <div
          className={`absolute h-1 w-10 bg-black rounded-full transition-all top-1/2 -translate-y-1/2 ${
            open ? "bg-opacity-0" : "bg-opacity-100"
          }
              `}
        ></div>
        <div
          className={`absolute h-1 transition-all w-10 bg-black rounded-full ${
            open ? "-rotate-45 bottom-1/2 translate-y-1/2" : "bottom-0"
          }
              `}
        ></div>
      </div>
    </button>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex py-0 justify-between items-center navbar md:px-6">
      <Link to="/">
        <img
          src={logo}
          alt="marine design"
          className="w-[190px] h-[190px] -ml-9 -mt-10 -mb-7"
        />
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-black`}
          >
            {nav.type === "route" ? (
              <Link to={nav.id}>{nav.title}</Link>
            ) : (
              <a href={`#${nav.id}`}>{nav.title}</a>
            )}
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Hamburger open={open} setOpen={setOpen} />
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: "100%" }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              className="flex p-6 shadow-lg absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl bg-white"
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] ${
                      index === navLinks.length - 1 ? "mr-0" : "mr-10"
                    } text-black`}
                  >
                    {nav.type === "route" ? (
                      <Link
                        to={nav.id}
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        {nav.title}
                      </Link>
                    ) : (
                      <a
                        href={`#${nav.id}`}
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        {nav.title}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
