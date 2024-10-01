import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"; // Assuming you have custom CSS for additional styling
import { FaUserCircle } from "react-icons/fa"; 
const testimonials = [
  {
    text: "Thank you for providing such tasty options for our pets. They love every bite!",
    name: "Sebastian",
    role: "Customer",
    image: "/path-to-sebastian-image.png",
  },
  {
    text: "My furry friend absolutely adores the food from this website! It's both delicious and nutritious.",
    name: "Donark",
    role: "Customer",
    image: "/path-to-donark-image.png",
  },
  {
    text: "The variety of pet food options available here is unmatched. My cat enjoys every meal.",
    name: "Carolina",
    role: "Customer",
    image: "/path-to-carolina-image.png",
  },
  {
    text: "Thank you for providing such tasty options for our pets. They love every bite!",
    name: "Sebastian",
    role: "Customer",
    image: "/path-to-sebastian-image.png",
  },
  {
    text: "My furry friend absolutely adores the food from this website! It's both delicious and nutritious.",
    name: "Donark",
    role: "Customer",
    image: "/path-to-donark-image.png",
  },
  {
    text: "The variety of pet food options available here is unmatched. My cat enjoys every meal.",
    name: "Carolina",
    role: "Customer",
    image: "/path-to-carolina-image.png",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true,    // Enable automatic scrolling
    autoplaySpeed: 3000, // Speed in milliseconds
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
    <section className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <p>Testimonials & Reviews – What our customers are saying</p>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-item" key={index}>
            <p>{testimonial.text}</p>
            <div className="testimonial-user">
              {/* <img src={testimonial.image} alt={testimonial.name} /> */}
              <FaUserCircle className="testimonial-img"  />
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
