import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    const configuration = {
      method: "POST",
      url: "http://localhost:3000/Home",
      data: {
        email,
        date,
        time,
      },
    };
    axios(configuration)
      .then((result) => {
        setSubmit(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };
  const mynav = useNavigate();
  return (
    <>
      <div>
        <div className="img_con"></div>
      </div>
      <div id="home">
        <div className="remo">
          <h1>Welcome to Remo--</h1>
        </div>
        <div>
          <p className="remo_text">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>

        <div className="explore_button">
          <button onClick={() => mynav("/Menu")}>
            <button className="btnn">Explore Menu</button>
          </button>
        </div>
      </div>
      <div className="second_containe">
        <div className="second_image">
          <img
            className="image_sec"
            src="https://static.wixstatic.com/media/c837a6_3a1c5d6305c741b193c7026321c090ef~mv2.jpg/v1/fill/w_721,h_1028,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_3a1c5d6305c741b193c7026321c090ef~mv2.jpg"
            alt=""
          />
        </div>
        <div className="second_container_text">
          <div className="second_con">
            <h1>An Innovative Concept from Us</h1>
          </div>

          <p className="second_img_text">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>

          <div className="explore_button">
            <button
              className="btnn"
              aria-current="page"
              onClick={() => mynav("/About")}
            >
              About the Chef
            </button>
          </div>
        </div>

        <div className="third_image_container">
          <div className="third_text">
            <h2>“Every plate is a masterpiece, fresh and flavorful”</h2>
          </div>

          <img
            className="third_image"
            src="https://static.wixstatic.com/media/c837a6_2fc0713ae4f149a1880773f90c2019e1~mv2.jpeg/v1/fill/w_444,h_666,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/AdobeStock_383833779_Preview.jpeg"
            alt=""
          />
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
                The <br />
                Experience
              </h1>
            </div>
            <div className="fourth_text">
              <h3>Dinner</h3>
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
              onClick={() => mynav("/menu")}
            >
              Menu
            </button>
          </div>
          <div className="four_pic_con">
            <div className="four_pic_first">
              <img
                className="four_pic_first_link"
                src="https://images.unsplash.com/photo-1467189484883-c40a85b9e708?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80"
                alt=""
              />
            </div>
            <div className="three_pic_con">
              <div className="four_pic_second">
                <img
                  className="four_pic_second_link"
                  src="https://www.thecoldwire.com/wp-content/uploads/2020/11/selection-of-indian-food.jpg"
                  alt=""
                />
              </div>
              <div className="two_pic_con">
                <div className="four_pic_third">
                  <img
                    className="four_pic_third_link"
                    src="https://i.dailymail.co.uk/1s/2018/12/05/21/7054878-6464399-Top_improve_the_picture_Giulia_has_shot_the_food_from_a_side_ang-a-98_1544044206031.jpg"
                    alt=""
                  />
                </div>
                <div className="four_pic_third">
                  <img
                    className="four_pic_third_link"
                    src="https://cdn.apartmenttherapy.info/image/upload/v1595460519/k/Photo/Series/2020-07-South-Indian-Chritra-Agrawal/Dosa%20Making%20-%20How%20to%20steps/Shot_21_-_Finished_dosas.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="reservation_con">
          <h1>Reservation</h1>
          <div className="reservation_form">
            <input
              className="reservation_input"
              type="email"
              placeholder="Enter Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="reservation_input"
              type="date"
              placeholder="Date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              className="reservation_input"
              type="time"
              placeholder="Time"
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <button className="join" onClick={(e) => handleSubmit(e)}>
              Reserve Table
            </button>{" "}
            {submit ? (
              <p className="text-success">message sent</p>
            ) : (
              <p className="text-danger">please enter message</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
