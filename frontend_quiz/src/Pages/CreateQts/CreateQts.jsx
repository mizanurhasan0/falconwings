import React from "react";
import { useState } from "react";
import Btn from "../../Components/Shares/Btn";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import useRequest from "../../Hooks/useRequest/useRequest";
import AlertToster from "../../Components/Shares/AlertToster";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const CreateQts = () => {
  const [options, setOptions] = useState([
    { text: "", isCorrect: false },
    { text: "", isCorrect: false },
  ]);
  const [description, setDescription] = useState("");
  const req = useRequest();
  const [searchParam] = useSearchParams();
  // const [qt, setQt] = useState(false);
  const navigation = useNavigate();

  useEffect(() => {
    if (searchParam.get("id")) {
      req({ url: `questions/${searchParam.get("id")}` }).then((res) => {
        // setQt(res.data);
        setDescription(res?.data?.description);
        setOptions(res?.data?.alternatives);
      });
    }
  }, [searchParam]);

  const onChangeValue = (event, index) => {
    let data = [...options];
    data[index][event.target.name] = event.target.value;
    setOptions(data);
  };
  const onCheckAnswer = (event, index) => {
    let data = [...options];

    if (data[index][event.target.name] === true) {
      data[index][event.target.name] = false;
    } else {
      data[index][event.target.name] = true;
    }
    setOptions(data);
  };
  const OnAddOpt = () => {
    let object = { text: "", isCorrect: false };
    setOptions([...options, object]);
  };
  const onDelOpt = (index) => {
    let data = [...options];
    data.splice(index, 1);
    setOptions(data);
  };

  const onCreateQts = (e) => {
    e.preventDefault();

    try {
      let data = { description: description, alternatives: options };
      if (searchParam.get("id")) {
        req({
          url: `questions/${searchParam.get("id")}`,
          method: "PUT",
          data: data,
        }).then((res) => {
          if (res.status === 200) {
            AlertToster("Updated!!", "success");
            setDescription("");
            setOptions([
              { text: "", isCorrect: false },
              { text: "", isCorrect: false },
            ]);
            navigation("/answer");
          } else {
            AlertToster("Again try", "error");
          }
        });
      } else {
        req({ url: "questions", method: "POST", data: data }).then((res) => {
          if (res.status === 201) {
            AlertToster("Added Question", "success");
            setDescription("");
            setOptions([
              { text: "", isCorrect: false },
              { text: "", isCorrect: false },
            ]);
          } else {
            AlertToster("Again try", "error");
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full py-20">
      <div className="container max-w-lg py-10 text-gray-500">
        <h1 className="text-6xl pb-10">Question Creation</h1>
        <form className="" onSubmit={onCreateQts}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Your Question
              </label>
              <input
                className="appearance-none font-bold block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="nick"
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <p className="text-gray-600 text-xs italic">
                Input valid question
              </p>
            </div>
          </div>

          {/* start options field */}
          {options?.map((option, index) => (
            <div className="flex flex-wrap -mx-3 mb-6" key={index}>
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Option {index + 1}
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="text"
                  name="text"
                  type="text"
                  required
                  value={option.text}
                  onChange={(e) => onChangeValue(e, index)}
                />
                <div className="flex justify-between">
                  <div className="cursor-pointer flex space-x-3 capitalize text-blue-400 items-center text-xs italic">
                    <label htmlFor={"topping" + index}>
                      true value checked
                    </label>
                    <input
                      type="checkbox"
                      id={"topping" + index}
                      name="isCorrect"
                      value={option.isCorrect}
                      onChange={(e) => onCheckAnswer(e, index)}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <p className="">Remove if not needed</p>
                    <RiDeleteBin5Line
                      onClick={() => onDelOpt(index)}
                      className={`${
                        index === 0 ? "hidden" : "block"
                      } cursor-pointer hover:text-red-500`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="text-end">
            <Btn
              onClick={() => OnAddOpt()}
              child={<IoIosAddCircleOutline className="text-2xl " />}
              cStyle={"shadow bg-white hover:bg-teal-400 "}
            />
          </div>
          {/* End options field */}
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <Btn
                type="submit"
                child={searchParam.get("id") ? "Update" : "Save"}
                cStyle={
                  "shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-md"
                }
              />
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateQts;
