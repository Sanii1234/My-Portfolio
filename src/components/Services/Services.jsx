import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./resume.pdf";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* Left Side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Professional</span>
        <span>Services</span>
        <span>
          I'm a Full Stack Web Developer and UI/UX Designer with a passion for
          <br />
          building beautiful and functional digital experiences.
          <br /> I also manage and deliver projects for international clients.
          <br />
          With experience in the UAE and Pakistan, I blend design and tech to
          build smart solutions.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* Right Side - Cards */}
      <div className="cards">
        {/* Web Development Card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Web Development"}
            detail={
              "React, Next.js, Node.js, MongoDB, REST APIs, Firebase, Cloudinary"
            }
          />
        </motion.div>

        {/* Design Card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"UI/UX & Graphic Design"}
            detail={"Figma, Adobe Photoshop, Illustrator, Canva,  Branding"}
          />
        </motion.div>

        {/* Project Management Card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Project Management"}
            detail={
              "Budget Management Jira, Monday.com, Communication, Time Management, Client Handling"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
