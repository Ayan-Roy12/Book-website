import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Search Your Book.</h2><br />
                <p className='header-text fs-18 fw-3'>Whether you're diving into a new genre or revisiting an old favorite, BookHub is here to accompany you on every step of your literary adventure. Explore, engage, and immerse yourself in the world of books with us.

Happy reading!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header