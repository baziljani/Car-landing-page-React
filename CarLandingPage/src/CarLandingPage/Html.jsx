import React from "react";
import "./Html.css";

const Html = () => {
  return (
    <>
      <nav className="navbar">
        <article className="art">
                  <div id="box1">
                      <img src="https://static.vecteezy.com/system/resources/thumbnails/013/923/537/small/red-car-vehicle-auto-detailing-logo-png.png" alt="Car Logo" className="logo" />
         </div>


          {/* Navigation Links */}
          <div id="box2">
            <ul className="list">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div id="box3">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </article>
      </nav>

      <div className="hero">
        <p className="p1">Powerful Fun and</p>
        <h1 className="h12">FIERCE TO</h1>
        <h1 className="h13">DRIVE</h1>
        <p className="p2">Real Poise, Real Power, Real Performance.</p>
        <button className="btn1">BOOK A TEST RIDE</button>
        <div className="backlight-glow"></div>
      </div>
    </>
  );
};

export default Html;
