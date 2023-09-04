import {useState} from 'react'
import { navLinks } from '../constants'
import {close, logo, menu} from '../assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const closeNavbar = () => {
    setToggle(false);
};
  
  return (
    <nav className='w-full flex py-0 justify-between items-center bg-white navbar'>
      
      <Link to="/">
        <img src={logo} alt="marine design" className='w-[190px] h-[190px] -ml-9 -mt-10 -mb-7' />
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} text-black`}
          >
            {nav.type === "route" ? 
              <Link to={nav.id}>
                {nav.title}
              </Link> 
              : 
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            }
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} text-black`}
              >
                {nav.type === "route" ? 
                  <Link to={nav.id} onClick={closeNavbar}>
                    {nav.title}
                  </Link> 
                  : 
                  <a href={`#${nav.id}`}  onClick={closeNavbar}>
                    {nav.title}
                  </a>
                }
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
