import React from "react";
import { Pencil, Peace } from "../../assets";
import { Navbar } from "../../components";
import { BLOG } from "../../constants/url";
import { ChangeFavicon } from "../../helpers";
import { Link } from "react-router-dom";

export default function Blog() {
  const title = "Blog";
  ChangeFavicon("/images/pencil.png", title);
  return (
    <>
      <section className='about-navbar'>
        <Navbar>
          <span className='dark:text-gray-100'>/</span>
          <Link to={BLOG} className='ml-5 text-orange-100 dark:font-medium'>
            Blog
          </Link>
        </Navbar>
      </section>
      <section className='portfolio-body mx-auto w-full md:w-10/12 px-7 lg:px-10 xl:px-32 lg:pt-20 container'>
        <img src={Pencil} alt='logo touch' className='lg:h-18 md:h-14 h-8' />
        <h2 className='lg:text-4xl md:text-2xl text-xl font-bold lg:mt-10 md:mt-8 mt-6 dark:text-gray-100 text-gray-200'>
          {title}
        </h2>
        <h5 className='lg:text-2xl text-lg lg:mt-8 mt-4 dark:text-gray-100 opacity-75 border-b-2 flex  pb-5'>
          this section is still under construction <Peace />
        </h5>
      </section>
    </>
  );
}
