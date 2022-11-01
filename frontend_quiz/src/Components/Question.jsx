import React from "react";
import TimeCounter from "./TimeCounter";
import style from "./style.module.css";
import Btn from "./Shares/Btn";
import AlertToster from "./Shares/AlertToster";

const Question = () => {
  return (
    <div className="bg-[#f9de57] h-full text-white">
      <div className="h-screen  ">
        <div className="flex items-center justify-center h-full">
          <div className="bg-gray-800 flex space-x-10  rounded-md shadow-2xl p-10">
            <div className="space-y-4 flex flex-col justify-between">
              <div>
                <h1 className="text-4xl capitalize pb-4">
                  Question <span>1</span>/<span className="text-2xl">4</span>
                </h1>
                <p className="text-xl">What is the capital of France?</p>
              </div>
              <div className="space-x-2">
                <Btn
                  child={"Back"}
                  cStyle={"text-start hover:bg-gray-900  w-20 uppercase "}
                />
                <Btn
                  child={"Next"}
                  cStyle={
                    "text-end hover:bg-gray-900 w-20 uppercase bg-blue-500"
                  }
                />
              </div>
            </div>
            <div className=" flex flex-col space-y-2">
              <Btn
                child={"New York"}
                onClick={() => AlertToster("Success", "success")}
                cStyle={"text-start hover:bg-gray-900 w-72  hover:bg-gray-900"}
              />
              <Btn
                child={"New York"}
                cStyle={"text-start hover:bg-gray-900 w-72  hover:bg-gray-900"}
              />
              <Btn
                child={"New York"}
                cStyle={"text-start hover:bg-gray-900 w-72  hover:bg-gray-900"}
              />
              <Btn
                child={"New York"}
                cStyle={"text-start hover:bg-gray-900 w-72  hover:bg-gray-900"}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <TimeCounter /> */}
      {/* <div className="h-screen w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl font-[500] text-gray-600">
          What's your name, challenger?This question is required. *
        </h1>
        <div></div>
        <input placeholder="Type your answer here..." />
        <button>Ok</button>
      </div> */}
      {/*  */}
      {/* <div className="h-screen w-full flex flex-col items-center justify-center">
        <h1>What's your name, challenger?This question is required. *</h1>
        <p>Just your first one is fine. Or a nickname.</p>
        <div className={`${style.options} flex  space-x-10`}>
          <div className="">
            <input type="radio" id="featured-1" name="featured" />
            <label htmlFor="featured-1">HTML</label>
          </div>
          <div>
            <input type="radio" id="featured-2" name="featured" />
            <label htmlFor="featured-2">PHP</label>
          </div>
          <div className="">
            <input type="radio" id="featured-3" name="featured" />
            <label htmlFor="featured-3">Phython</label>
          </div>
          <div>
            <input type="radio" id="featured-4" name="featured" />
            <label htmlFor="featured-4">Zango</label>
          </div>
        </div>
        <button>Ok</button>
      </div> */}
      {/*  */}
    </div>
  );
};

export default Question;
