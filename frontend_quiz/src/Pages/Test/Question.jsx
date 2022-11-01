import React from "react";
// import TimeCounter from "../../Components/TimeCounter";
// import style from "./style.module.css";
import Btn from "../../Components/Shares/Btn";
import AlertToster from "../../Components/Shares/AlertToster";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRequest from "../../Hooks/useRequest/useRequest";

const Question = () => {
  const [Qts, setQts] = useState([]);
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const req = useRequest();
  useEffect(() => {
    req({ url: "questions" }).then((res) =>
      res.status === 200
        ? setQts(res.data)
        : AlertToster("Not connected server", "error")
    );
  }, []);

  const onCheck = (option) => {
    if (option) {
      AlertToster("Correct!", "success");
    } else {
      AlertToster("Wrong! , try again", "error");
    }
  };

  const stepChange = (stp) => {
    if (stp !== Qts.length - 1) {
      step < Qts.length - 1 && setStep(step + 1);
    } else {
      navigate("/answer");
    }
  };
  return (
    <div className="bg-bgColor h-full text-white">
      <div className="h-screen  ">
        <div className="flex items-center justify-center h-full">
          {/* Card Start */}

          <div className="bg-gray-800 flex space-x-10  rounded-md shadow-2xl p-10">
            <div className="space-y-4 flex flex-col justify-between">
              <div>
                <h1 className="text-4xl capitalize pb-4">
                  Question <span>{step + 1}</span>/
                  <span className="text-2xl">{Qts.length}</span>
                </h1>
                <p className="text-xl">{Qts[step]?.description}</p>
              </div>
              <div className="space-x-2">
                <Btn
                  child={"Back"}
                  onClick={() => step > 0 && setStep(step - 1)}
                  cStyle={"text-start hover:bg-gray-900  w-20 uppercase "}
                />
                <Btn
                  child={step === Qts.length - 1 ? "Finish" : "Next"}
                  onClick={() => stepChange(step)}
                  cStyle={
                    "text-end hover:bg-gray-900 w-20 uppercase bg-blue-500"
                  }
                />
              </div>
            </div>
            <div className=" flex flex-col space-y-2">
              {Qts[step]?.alternatives.map((opt) => (
                <Btn
                  key={opt._id}
                  child={opt?.text}
                  onClick={() => onCheck(opt?.isCorrect)}
                  cStyle={`text-start  hover:bg-gray-900 w-72  hover:bg-gray-900`}
                />
              ))}
            </div>
          </div>
          {/* End card */}
        </div>
      </div>
    </div>
  );
};

export default Question;
