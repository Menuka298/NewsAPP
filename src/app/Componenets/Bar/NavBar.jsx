import React from "react";
import NavButton from "../NavButton/NavButton";

function NavBar() {
  return (
    <div className="flex sm:justify-center space-x-4 mt-5 mb-4">
      <h1 className="text-slate-700 font-medium"></h1>
      <NavButton Pageurl="/" NavButton="Home" />
      <NavButton Pageurl="/Article" NavButton="Article" />
      <NavButton Pageurl="/About" NavButton="About" />
      <NavButton Pageurl="/Contact" NavButton="Contact" />
      <NavButton Pageurl="../../../Admin/Dashboard" NavButton="dash" />
      <NavButton Pageurl="/Login" NavButton="Login" />
    </div>
  );
}

export default NavBar;
