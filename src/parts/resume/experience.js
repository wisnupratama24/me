import React from "react";

export default function Experience({ title, textLink, link, long, children }) {
  return (
    <div className='lg:pt-6 pt-2 mt-8'>
      <h4 className='lg:text-2xl md:text-xl text-lg font-medium text-gray-200 pb-2 dark:text-gray-100 opacity-70'>
        {title}
      </h4>
      <a
        href={link}
        className='text-blue-100 pt-8 lg:text-lg text-md'
        target='_blank'
        rel='noopenner noreferrer'>
        {textLink}
      </a>
      <span className='block font-light pt-2 text-sm opacity-75 dark:text-gray-100 '>
        {long}
      </span>
      <div className='lg:w-9/12 w-10/12 pt-5 text-gray-200 leading-8'>
        {children}
      </div>
    </div>
  );
}
