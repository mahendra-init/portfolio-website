import React from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ytms0os",
        "template_h1srmn9",
        form.current,
        "9KZ66FdXw69YDT_t7"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="contact-form" id="Contact">
      <div className="c-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>
            Get in Touch
            <br />
            <span>Contact me</span>
          </span>

          <div
            className="blur c-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="text"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
          ></textarea>
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for contacting me!"}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
