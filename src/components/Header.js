import React from 'react';
import Logo from '../assets/logo.svg'
const Header = () => {
  return(
      <header className="py-8 ">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
              {/* Logo */}
              <a href="#" >
                  <img src={Logo} alt="Logo" className="w-32"/>
              </a>
              {/* button */}
              <button className="btn btn-sm">
                  work with me
              </button>
          </div>
        </div>
      </header>
  );
};

export default Header;
