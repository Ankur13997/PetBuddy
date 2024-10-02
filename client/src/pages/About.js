import React from "react";
import Header from './Header';
import Footer from './Footer';
import PageHeader from './PageHeader'; 
import AboutDetail1 from "./AboutDetail1";
import AboutDetail2 from "./AboutDetail2";
import AboutImage from "./AboutImage";
const About = () => {
    return (
      <>
        <Header />
        <PageHeader title="About Us" imageSrc="/images/blog.png" />
        <AboutDetail1/>
        <AboutDetail2/>
        <AboutImage/>
        <Footer />
      </>
    );
  };
  
  export default About;