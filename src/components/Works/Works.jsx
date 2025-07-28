import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works" id="works">
      {/* Left Side */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>
            Worked with Top
          </span>
          <span>Clients & Platforms</span>
          <span>
            I've collaborated with global companies and brands across multiple
            platforms.
            <br />
            From developing custom websites and e-commerce stores on Shopify &
            Amazon,
            <br />
            to managing digital presence for clients on Fiverr, Upwork, and
            social media.
            <br />
            Companies like Xad Technologies (UAE), Smart Digital Marketing, and
            Advance Telecom (UK/PK)
            <br />
            have trusted me with their tech and digital growth.
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="Upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="Fiverr" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="Amazon" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="Shopify" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="Facebook" />
          </div>
        </motion.div>
        {/* Background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
