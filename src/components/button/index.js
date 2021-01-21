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
      className='button-tailwind inline-flex bg-white focus:outline-none dark:text-gray-200 text-xss lg:text-sm font-medium md:px-2 md:py-2 md:m-4 rounded-full'>
      <div className='flex items-center md:px-2 p-1'>
        <img src={logo} alt='logo tailwindcss' className='md:h-4 h-2 md:mr-2' />{" "}
        <p className='text-xss md:text-base'>{text}</p>
      </div>
    </a>
  );
};
