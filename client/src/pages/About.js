import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader'; 
import AboutDetail1 from "../components/AboutDetail1";
import AboutDetail2 from "../components/AboutDetail2";
import AboutImage from "../components/AboutImage";
const About = () => {
    return (
      <>
        <Header />
        <PageHeader title="About Us" imageSrc="/images/aboutheader.png" />
        <AboutDetail1/>
        <AboutDetail2/>
        <AboutImage/>
        <Footer />
      </>
    );
  };
  
  export default About;