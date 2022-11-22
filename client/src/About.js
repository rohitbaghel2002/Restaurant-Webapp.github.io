import React from "react";
import "./App.css";

import { useNavigate } from "react-router-dom";

export default function About() {
  const mynav = useNavigate();
  return (
    <div>
      <div className="about_first_con">
        <div className="about_first_pic">
          <img
            className="lemon_pic"
            src="https://static.wixstatic.com/media/11062b_a92d70eeb5d34bc9b8beec27c8bde3ab~mv2.jpg/v1/fill/w_503,h_754,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Slicing%20Lime.jpg"
            alt=""
          />
        </div>
        <div className="about_first_pic_text">
          <h1 className="about_h1">
            Best Food <br /> For you <br /> from all over India.
          </h1>
          <p className="about_first_pic_para">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
      </div>

      <div className="about_second_con">
        <div className="about_second_pic_text">
          <h1 className="about_h1">
            A Dining <br /> Destination
          </h1>
          <p className="about_first_pic_para">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
        <div className="about_second_pic">
          <img
            className="about_second_pic_link"
            src="https://static.wixstatic.com/media/c837a6_788f3c32d725407c971409859d409052~mv2.jpeg/v1/crop/x_203,y_0,w_2205,h_2832/fill/w_664,h_853,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AdobeStock_396612620.jpeg"
            alt=""
          />
        </div>
      </div>

      <div className="fourth_container">
        <div className="fourth_container_flex">
          <div className="fourth_container_text">
            <h1
              style={{
                fontSize: "3rem",
                color: "#fb5101",
              }}
            >
              Events & &nbsp; &nbsp; <br /> Private &nbsp; &nbsp;
              <br /> Dining &nbsp; &nbsp;
            </h1>
          </div>
          <div className="fourth_text">
            <h3>Dinner </h3>
            <p className="fourth_second_text">
              I'm a paragraph. Click here to add your own text and edit me.
            </p>
          </div>
          <div className="fourth_text">
            <h3>Raw Bar</h3>
            <p className="fourth_second_text">
              I'm a paragraph. Click here to add your own text and edit me.
            </p>
          </div>
          <div className="fourth_text">
            <h3>Cocktails</h3>
            <p className="fourth_second_text">
              I'm a paragraph. Click here to add your own text and edit me.
            </p>
          </div>
        </div>
        <div className="menu-con">
          <button
            className="btun"
            aria-current="page"
            onClick={() => mynav("/Contact")}
          >
            Contact
          </button>
        </div>
        <div>
          <div className="about_last_pic"></div>
        </div>
      </div>
    </div>
  );
}
