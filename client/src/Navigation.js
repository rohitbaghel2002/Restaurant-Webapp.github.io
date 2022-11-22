import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const mynav = useNavigate();
  const [mode, setmode] = useState("light");
  const changemode = () => {
    if (mode === "light") {
      setmode("dark");
    } else {
      setmode("light");
    }
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${mode}`}>
        <div className="container-fluid">
          <button
            className="navbar-brand"
            style={{ color: mode === "light" ? "black" : "white" }}
          >
            Remo
          </button>
          <button
            className="navbar-toggler bg bg-black"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon  btn-light "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  style={{ color: mode === "light" ? "black" : "white" }}
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => mynav("/Home")}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button
                  style={{ color: mode === "light" ? "black" : "white" }}
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => mynav("/Menu")}
                >
                  Menu
                </button>
              </li>
              <li className="nav-item">
                <button
                  style={{ color: mode === "light" ? "black" : "white" }}
                  className="nav-link"
                  onClick={() => mynav("/About")}
                >
                  About us
                </button>
              </li>
              <li className="nav-item">
                <button
                  style={{ color: mode === "light" ? "black" : "white" }}
                  className="nav-link"
                  onClick={() => mynav("/Contact")}
                >
                  Contact us
                </button>
              </li>
              <li className="nav-item">
                <button
                  style={{ color: mode === "light" ? "black" : "white" }}
                  className="nav-link"
                  onClick={() => mynav("/Register")}
                >
                  Sign up
                </button>
              </li>
              <li className="nav-item">
                <button
                  style={{ color: mode === "light" ? "black" : "white" }}
                  className="nav-link"
                  onClick={() => mynav("/Login")}
                >
                  login
                </button>
              </li>
              <button
                onClick={changemode}
                style={{ color: mode === "light" ? "black" : "white" }}
              >
                Change Color
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navigation;
