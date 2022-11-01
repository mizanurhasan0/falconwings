import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { SlClose } from "react-icons/sl";
import { MenuList } from "../StaticData/FakeData";
import OutSideClick from "../../utils/OutSideClick";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  let refContent = useRef(false);
  const [display, setDisplay] = useState(true);
  OutSideClick(refContent, setOpen);

  return (
    <div
      ref={refContent}
      className={`bg-gray-900 ${
        display
          ? " fixed top-0 left-0 w-full shadow-xl text-gray-200 hover:text-white  text-2xl z-50"
          : "hidden"
      } `}
    >
      <div
        className="py-4 bg-gray-900 px-6 md:px-0 md:container 
      md:flex justify-between  font-Audiowide "
      >
        {/* Logo */}
        <div className="flex items-center text-4xl space-x-2 ">
          <span>QUIZ</span>
        </div>
        {/* End Logo */}
        {/* Icon */}
        <div
          className="md:hidden absolute top-6 right-6 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <SlClose /> : <HiMenuAlt3 />}
        </div>
        {/* End Icon */}
        {/* Menu */}
        <ul
          className={`md:flex items-center md:space-x-5  absolute 
          md:static w-full md:w-auto bg-black md:bg-transparent left-0 
          transition-all duration-1000 ease-in  z-[-1] md:z-auto
          pl-5
          ${open ? "top-[4.7rem] pb-10" : "top-[-300px]"}`}
        >
          {MenuList.map((menu, key) => (
            <li key={key} className="ml-4 capitalize  my-7 md:my-0">
              <NavLink to={menu.path}>{menu.name}</NavLink>
            </li>
          ))}
        </ul>

        {/* End menu */}
      </div>
    </div>
  );
}
