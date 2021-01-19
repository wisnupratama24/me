import React from "react";
import { Link } from "react-router-dom";
import { Diamond } from "../../assets";
import { Navbar } from "../../components";
import { ABOUT } from "../../constants/url";
import { ChangeFavicon } from "../../helpers";
import { Footer } from "../../parts";

export default function About() {
  const title = "About";
  ChangeFavicon("/images/diamond.png", title);
  return (
    <>
      <section className='about-navbar'>
        <Navbar>
          <span className='dark:text-gray-100'>/</span>
          <Link to={ABOUT} className='ml-5 text-orange-100 dark:font-medium'>
            About
          </Link>
        </Navbar>
      </section>
      <section className='about-body mx-auto w-full md:w-10/12 px-7 lg:px-10 xl:px-32 lg:pt-20 container'>
        <img src={Diamond} alt='logo diamond' className='lg:h-12 md:h-10 h-8' />
        <h2 className='lg:text-4xl md:text-2xl text-xl font-bold lg:mt-10 md:mt-8 mt-6 dark:text-gray-100 text-gray-200'>
          {title}
        </h2>
        <h5 className='lg:text-2xl text-lg lg:mt-8 mt-4 dark:text-gray-100 opacity-75'>
          What I'm currently up to,{" "}
          <span className='font-medium text-orange-100 italic'> now... </span>{" "}
        </h5>

        <div className='w-11/12 mt-8 lg:leading-10 md:leading-10 leading-8 lg:text-xl md:text-lg opacity-70 font-light dark:text-gray-100'>
          <p>
            It's been long enough since we live alongside this horrific virus
            that has dramatically changed our way of living. My study has turned
            into a online course and made me decided to go back to my hometown.
            This seemingly unfortunate moment was not a total doom. I've got to
            spend more time with my family and I have more time to tinker, so I
            end up making my own wiki. Being highly organized always keeps me
            sane, and these are some of the recent things I've been enjoying
            quite much:
          </p>
          <ul className='mt-10 list-inside list-disc text-justify'>
            <li>
              Find more project as{" "}
              <span className='font-medium text-orange-100'>Freelancer</span>
            </li>
            <li>
              Bought some online classes about{" "}
              <span className='font-medium text-orange-100'>Javascript </span>
              and got it done
            </li>
            <li>
              Take online classes on my campus, and do the
              <span className='font-medium text-orange-100'> assignments</span>
            </li>
            <li>Reading article on Medium or Dev.to</li>
          </ul>
          <p className='mt-8'>
            Last but not least, stay healthy and keep a safe distance!
          </p>
        </div>

        <section className='my-10 flex items-center md:text-lg text-sm dark:text-gray-100 '>
          <div>
            <img
              src='/images/profil.png'
              alt='profil'
              className='md:h-32 h-20'
            />
          </div>
          <div className='ml-10 opacity-80 font-medium'>
            <h5 className='mb-5'>Cheers</h5>
            <span className='text-orange-100'>Wisnu Pratama</span>
          </div>
        </section>
      </section>
      <section className='my-32'>
        <Footer />
      </section>
    </>
  );
}
