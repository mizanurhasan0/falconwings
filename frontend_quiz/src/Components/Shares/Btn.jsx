import React from "react";

export default function Btn({
  onClick = () => {},
  cStyle,
  child,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`border-2 border-gray-200  h-10  p-1 px-2
rounded-md   transition-all duration-700 ${cStyle}`}
    >
      {child}
    </button>
  );
}
