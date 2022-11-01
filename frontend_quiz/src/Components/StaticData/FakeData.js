import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RiVideoLine } from "react-icons/ri";
import { BsFillPencilFill } from "react-icons/bs";
import { SlNote } from "react-icons/sl";

const helpData = [
  {
    link: "help",
    name: "help",
    icon: <AiOutlineQuestionCircle className="text-6xl text-blue-600" />,
  },
  {
    link: "https://youtu.be/ECqgewrtVQE",
    name: "Tutorial",
    icon: <RiVideoLine className="text-6xl text-black" />,
  },
  {
    link: "create",
    name: "Create",
    icon: <BsFillPencilFill className="text-6xl text-yellow-300" />,
  },
  {
    link: "update",
    name: "update",
    icon: <SlNote className="text-6xl text-white" />,
  },
];
const MenuList = [
  { name: "Home", path: "/" },
  { name: "Quiz", path: "/quiz" },
  { name: "Answer", path: "/answer" },
  { name: "Create", path: "/create" },
];
export { helpData, MenuList };
