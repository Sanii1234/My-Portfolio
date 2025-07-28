import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic2,
      review:
        "Working with Ehsan was an excellent experience. He developed our internal project tracking system and revamped our company website — highly professional and always on time.",
      name: "Xad Technologies LLC (Dubai, UAE)",
    },
    {
      img: profilePic1,
      review:
        "Ehsan helped us build our online presence and manage multiple client websites. His design sense and technical ability made a huge difference for our agency.",
      name: "Smart Digital Marketing (Haripur)",
    },
    {
      img: profilePic3,
      review:
        "We hired Ehsan to set up our LinkedIn and digital brand identity. His communication and project management skills really stood out. Highly recommended!",
      name: "Advance Telecom (UK & Islamabad)",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
