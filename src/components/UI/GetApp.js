import React from "react";
import mobileimg from "../../assets/mobileimg.avif";
import gplay from "../../assets/googlplayimg.webp";
import astore from "../../assets/applestoreimg.webp";
import "./GetApp.css";

const GetApp = () => {
  return (
    <div className="getapp_container">
      <div className="getapp_img">
        <img src={mobileimg} alt="MobileImg" />
      </div>
      <div className="getapp_info">
        <div className="getapp_info_txt">
          <h3>Get the Zomato app</h3>
          <p>
            We will send you a link, open it on your phone to download the app
          </p>
        </div>
        <div className="getapp_info_radio">
          <div className="getapp_info_radio_btn_1">
            <input type="radio" name="contact" value="email" id="email" checked/>
            <label htmlFor="contact">Email</label>
          </div>
          <div className="getapp_info_radio_btn_2">
            <input type="radio" name="contact" value="phone" id="phone"/>
            <label htmlFor="contact">Phone</label>
          </div>
        </div>
        <div className="getapp_info_input">
          <input type="text" placeholder="Email" />
          <button>Share</button>
        </div>
        <div className="getapp_info_download">
          <p>Download app from</p>
          <img src={gplay} alt="googleplay" />
          <img src={astore} alt="applestore" />
        </div>
      </div>
    </div>
  );
};

export default GetApp;
