import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import axios from "axios";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    const configuration = {
      method: "POST",
      url: "http://localhost:3000/contact",
      data: {
        name,
        email,

        message,
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
  return (
    <div>
      <div className="contact_location_hour_con">
        <div className="heading_location">
          <h1>
            Location <br /> & Hours
          </h1>
        </div>
        <div className="location_time_con">
          <div className="contact_address_con">
            <h2>Address</h2>
            <p>Basant Vihar, Malviya Nagar, NH - 8 Jaipur, Jaipur</p>
          </div>
          <div className="contact_opening_hour">
            <h2>Opening Hours</h2>
            <p>
              Mon - Fri: 11am - 10pm <br /> ​​Sat - Sun: 11am - 12am
            </p>
          </div>
        </div>
      </div>

      <div className="inquries_con">
        <div className="inquries_first_con">
          <h1>Inquires</h1>
          <p>
            Have any questions about the menu or dining experience? Leave us a
            message
          </p>
        </div>
        <div className="info_con">
          <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="Name"> Name*</label>
            <Form.Control
              className="ip"
              type="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />
            <label htmlFor="mail">Email*</label>
            <Form.Control
              className="ip"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />

            <label htmlFor="text">Message*</label>
            <Form.Control
              className="ip"
              type="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter Message"
            />
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              submit
            </Button>
            {submit ? (
              <p className="text-success">message sent</p>
            ) : (
              <p className="text-danger">please enter message</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
