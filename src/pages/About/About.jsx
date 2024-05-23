import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Welcome to BookHub, your ultimate online destination for all things literary! Whether you're an avid reader, a budding writer, or simply someone who loves to explore new worlds through the written word, BookHub has something for you. Our mission is to connect book enthusiasts from around the globe, providing a platform that fosters a love for reading and a community where stories come to life.</p>
            <p className='fs-17'>At BookHub, we understand the joy of finding that perfect book. Our extensive collection spans every genre imaginable— from timeless classics and gripping thrillers to inspiring non-fiction and heartwarming romance. With our personalized recommendations and in-depth reviews, you’ll never run out of incredible books to add to your reading list.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
