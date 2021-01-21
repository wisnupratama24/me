import React from "react";
import { Link } from "react-router-dom";
import { Pin } from "../../assets";
import { HOME } from "../../constants/url";

export default function Logo({ children }) {
  return (
    <div className='flex items-center'>
      <div className='h-8 w-8'>
        <img src='/images/favicon.png' alt='logo' />
      </div>
      <div>
        <Link
          to={HOME}
          className='px-4 font-base dark:text-gray-100 text-gray-200'>
          Wisnu Pratama
        </Link>
        {children}
      </div>
    </div>
  );
}

Logo.Pin = function LogoPin() {
  return <img src={Pin} alt='Logo Pin' className='h-4' />;
};

Logo.DropMe = function LogoDropMe({ logo, alt }) {
  return <img src={logo} alt={alt} className='h-6' />;
};

Logo.Content = function LogoContent({ logo, text, to }) {
  return (
    <div className='flex items-center'>
      <img src={logo} alt={text} className='md:h-8 h-6' />
      <Link
        to={to}
        className='lg:text-xl md:text-lg text-md ml-4 dark:text-gray-100 dark:hover:text-orange-100 hover:text-orange-100 transition-all duration-200'>
        {text}
      </Link>
    </div>
  );
};
