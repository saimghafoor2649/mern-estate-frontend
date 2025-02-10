import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Signin from "./Pages/Signin";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Header from "./Components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/sign-in" element={<Signin></Signin>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
