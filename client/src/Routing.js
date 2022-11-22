import React from "react";
import { Routes, Route } from "react-router-dom";

import Contact from "./Contact";
import Home from "./Home";
import Navigation from "./Navigation";
import "./App.css";

import Menu from "./Menu";
import About from "./About";
import Footer from "./Footer";
import Register from "./Register";
import Login from "./Login";

export default function Routing() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/Contact" element={<Contact user="rohit" />} />
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}
