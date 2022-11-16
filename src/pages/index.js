import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Login from "./login";

function Pageindex(props) {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
}

export default Pageindex;
