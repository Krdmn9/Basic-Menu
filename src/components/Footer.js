import React from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <div id="footer">
      <a
        id="contact"
        style={{ color: props.colorOfCI }}
        onClick={props.changeContactInfo}
      >
        Contact Info
      </a>
      <a
        id="location"
        style={{ color: props.colorOfL }}
        onClick={props.changeLocation}
      >
        Location
      </a>
    </div>
  );
}
