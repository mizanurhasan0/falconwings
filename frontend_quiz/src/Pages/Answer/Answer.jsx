import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Btn from "../../Components/Shares/Btn";
import useRequest from "../../Hooks/useRequest/useRequest";
import { RiDeleteBin5Line } from "react-icons/ri";
import AlertToster from "../../Components/Shares/AlertToster";
import { SlNote } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Answer = () => {
  const [Answers, setAnswers] = useState([]);
  const req = useRequest();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    req({ url: "answer" }).then((res) => setAnswers(res.data));
  }, [loading]);

  //
  const onDelete = (id) => {
    try {
      req({ url: `questions/${id}`, method: "DELETE" }).then((res) => {
        if (res.status === 204) {
          setLoading(!loading);
          AlertToster("Deleted question", "success");
        } else {
          AlertToster("Try again", "error");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-ansBg min-h-screen py-20 max-h-full text-gray-700 ">
      <div className="container">
        <h1 className="text-6xl py-10 ">Question Answer sheet</h1>
        <div className="space-y-10">
          {Answers.map((ans, key) => (
            <div key={key}>
              <div className="flex items-center space-x-4 text-2xl font-bold ">
                <div className="w-10 h-10 shadow-xl bg-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-white ">
                  {key + 1}
                </div>
                <h2 className="flex space-x-2 items-center">
                  <span>{ans?.description}</span>{" "}
                  <RiDeleteBin5Line
                    className="text-red-500 cursor-pointer"
                    onClick={() => onDelete(ans._id)}
                  />
                  <SlNote
                    className="text-blue-500 cursor-pointer"
                    onClick={() => navigate(`/create?id=${ans._id}`)}
                  />
                </h2>
              </div>
              <div className="pl-14">
                <span className="text-2xl text-gray-500">Ans:</span>
                <Btn
                  child={ans.alternatives[0]?.text}
                  cStyle={`text-start  bg-green-700   text-white shadow-xl text-2xl `}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Answer;
