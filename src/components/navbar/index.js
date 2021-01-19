import React, { useState, useEffect } from "react";
import { Logo } from "..";
import Moon from "../../assets/images/moon.svg";
import Sun from "../../assets/images/sun.svg";

export default function Navbar({ children }) {
  const [theme, setTheme] = useState(() =>
    localStorage.theme === "dark" ? true : false
  );

  const handleClick = () => {
    setTheme(!theme);

    if (theme === true) {
      localStorage.theme = "dark";
    } else if (theme === false) {
      localStorage.theme = "light";
    }
  };

  useEffect(() => {
    if (
      theme === true ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <div className='mx-auto py-10 md:px-16 px-9 flex justify-between'>
        <div className='flex items-center'>
          <Logo />
          {children}
        </div>
        <div className='cursor-pointer' onClick={handleClick}>
          <img src={theme ? Moon : Sun} alt='moon' className='w-6 h-6' />
        </div>
      </div>
    </>
  );
}
