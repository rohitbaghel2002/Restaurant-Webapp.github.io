import React from "react";
import "./App.css";
export default function Footer() {
  return (
    <div>
      <div className="footer" id="contact">
        <div className="footer_brand_name">
          <h1 className="footer_remo">Remo</h1>
        </div>
        <div className="contact_container">
          <div className="contact">
            <h2>Contact</h2>
            <p>Basant Vihar, Malviya Nagar, NH - 8 Jaipur, Jaipur</p>
          </div>
          <div className="contact">
            <h2>Follow us</h2>
            <a href="https://www.instagram.com/rohitbaghel627">Instagram</a>
            <br />
            <a href="https://www.linkedin.com/in/rohit-baghel-052904211">
              Linkedin
            </a>
          </div>
        </div>
      </div>
      <div className="mail_container1">
        <div className="heading_label_con">
          <div className="mail_container">
            <h2>Join Our Mailing List</h2>
          </div>
          <div className="label">
            <label htmlFor="mail">Email*</label>
            <br />
            <input className="input1" type="email" />
            <button className="join">Join</button>
          </div>
        </div>
        <div className="creator_con">
          <h4>@ 2022 by Rohit Baghel</h4>
        </div>
      </div>
    </div>
  );
}
