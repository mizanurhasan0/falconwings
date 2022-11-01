import React from "react";
import { Route, Routes } from "react-router-dom";
import Answer from "../Pages/Answer/Answer";
import CreateQts from "../Pages/CreateQts/CreateQts";
import Quiz from "../Pages/Home/Quiz";
import Question from "../Pages/Test/Question";

const RouterConf = () => {
  return (
    <Routes>
      <Route path="/" element={<Quiz />} />
      <Route path="/quiz" element={<Question />} />
      <Route path="/answer" element={<Answer />} />
      <Route path="/create" element={<CreateQts />} />
    </Routes>
  );
};

export default RouterConf;
