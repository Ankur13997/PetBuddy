// Testimonials.js
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUserCircle } from "react-icons/fa";
import axios from 'axios';
import ApiConfig from '../utils/ApiConfig';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await axios.get(`${ApiConfig.backendUrl}/api/testimonials`);
                setTestimonials(response.data);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            }
        };

        fetchTestimonials();
    }, []);

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
        <section className="testimonials-section" style={{ maxWidth: "85%", margin: "0 auto" }}>
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
