import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { helpData } from "../../Components/StaticData/FakeData";

const Quiz = () => {
  const navigation = useNavigate();

  return (
    <div className="bg-bgColor w-full h-screen">
      <div className="h-full flex flex-col items-center justify-center space-y-2">
        <div className="flex items-center justify-center space-x-5">
          {helpData.map((data, key) => (
            <Link to={data.link} className="text-center" key={key}>
              <span className="capitalize font-bold text-gray-500">
                {data.name}
              </span>
              <div
                key={key}
                className="cursor-pointer bg-[#f05d5c] w-20 h-20 flex items-center justify-center rounded-md"
              >
                {data.icon}
              </div>
            </Link>
          ))}
        </div>
        <h1 className="text-2xl font-bold text-gray-700">
          If you get a high score, you probably spend way too much time on
          Wikipedia.
        </h1>
        <h2 className="text-md text-gray-700">
          There are 12 questions and a break for refreshments in the middle.
          (You'll have to provide your own snacks, sorry.)
        </h2>
        <button
          onClick={() => navigation("/quiz")}
          className="bg-[#4cb9b7]  rounded-md p-2 text-gray-100 font-[500] text-2xl hover:text-white "
        >
          Let's get started
        </button>
      </div>
    </div>
  );
};

export default Quiz;
