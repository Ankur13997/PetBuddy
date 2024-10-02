import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    text: "Thank you for providing such tasty options for our pets. They love every bite!",
    name: "Sebastian",
    role: "Customer",
  },
  {
    text: "My furry friend absolutely adores the food from this website! It's both delicious and nutritious.",
    name: "Donark",
    role: "Customer",
  },
  {
    text: "The variety of pet food options available here is unmatched. My cat enjoys every meal.",
    name: "Carolina",
    role: "Customer",
  },
  {
    text: "Thank you for providing such tasty options for our pets. They love every bite!",
    name: "Sebastian",
    role: "Customer",
  },
  {
    text: "My furry friend absolutely adores the food from this website! It's both delicious and nutritious.",
    name: "Donark",
    role: "Customer",
  },
  {
    text: "The variety of pet food options available here is unmatched. My cat enjoys every meal.",
    name: "Carolina",
    role: "Customer",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      className="testimonials-section"
      style={{
        maxWidth: "85%", // Reduced width (adjust as needed)
        margin: "0 auto", // Center the section
      }}
    >
      <h2>What Our Clients Say</h2>
      <p>Testimonials & Reviews – What our customers are saying</p>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-item" key={index}>
            <p>{testimonial.text}</p>
            <div className="testimonial-user">
              <FaUserCircle className="testimonial-img" />
              <div>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
