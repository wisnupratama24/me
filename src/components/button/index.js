import React from "react";

export default function Button() {
  return <div></div>;
}

Button.Logo = function ButtonLogo({ logo, text, link }) {
  return (
    <a
      href={link}
      rel='noopenner noreferrer'
      target='_blank'
      className='button-tailwind inline-flex bg-white focus:outline-none dark:text-gray-200 text-xs lg:text-sm font-medium  px-2 py-3 m-4 rounded-full'>
      <div className='flex items-center px-1 md:px-2'>
        <img src={logo} alt='logo tailwindcss' className='h-4 mr-1 md:mr-2' />{" "}
        {text}
      </div>
    </a>
  );
};
