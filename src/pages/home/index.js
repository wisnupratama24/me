import React from "react";
import { Logo, Navbar } from "../../components";
import { ChangeFavicon } from "../../helpers";
import {
  Avatar,
  Tailwind,
  ReactJs,
  Diamond,
  Rocket,
  Pencil,
  Touch,
  Hello,
  Email,
  Linkedin,
  Github,
  Instagram,
} from "../../assets";
import Button from "../../components/button";
import { ABOUT, BLOG, PORTFOLIO, RESUME } from "../../constants/url";
import { DropMe, Footer } from "../../parts";

export default function Home({ history }) {
  ChangeFavicon("/images/favicon.png", "Wisnu Pratama");
  return (
    <>
      <section className='home-navbar'>
        <Navbar />
      </section>
      <section className='home-body lg:container lg:p-18 md:p-12 p-4 mx-auto'>
        <div className=''>
          <div className='flex items-center'>
            <img
              src={Avatar}
              alt='avatar'
              className='relative ml-5 lg:ml-10 xl:ml-32 h-32 md:h-40 lg:h-full'
            />
          </div>
          <section className='bg-white dark:bg-black-200 rounded-lg -mt-12 px-7  lg:px-10 xl:px-32 lg:pt-20'>
            <section className='pt-16 pb-10'>
              <h3 className='xl:text-4xl md:text-2xl text-xl font-bold text-black-100 dark:text-gray-100'>
                Wisnu Pratama
              </h3>
              <h2 className='xl:text-xl md:text-lg text-sm lg:mt-3 mt-1 font-medium text-black-100 dark:text-gray-100'>
                Frontend Developer / Student{" "}
              </h2>
              <div className='mt-2 flex items-center'>
                <Logo.Pin />
                <span className='ml-2 font-light text-xs lg:text-base text-black-100 dark:text-gray-100'>
                  Semarang, Indonesia
                </span>
              </div>

              <div className='w-full border mt-5 border-gray-100 dark:border-black-100 dark:opacity-5'></div>
              <div className='lg:mt-10 mt-5 border-l-4'>
                <div className='md:px-5 p-2 lg:text-xl md:text-lg xs:text-sm md:text-left text-center dark:text-gray-100 w-full lg:w-3/4 md:leading-relaxed leading-2'>
                  I’m currently working as a
                  <span className='font-medium text-orange-100'>
                    {" "}
                    freelance frontend developer.{" "}
                  </span>{" "}
                  I enjoy building web app using{" "}
                  <Button.Logo
                    logo={Tailwind}
                    text='Tailwind CSS'
                    link='https://tailwindcss.com'
                  />{" "}
                  and{" "}
                  <Button.Logo
                    logo={ReactJs}
                    text='React JS'
                    link='https://reactjs.org/'
                  />{" "}
                  I'm also an active student in{" "}
                  <span className='font-medium text-orange-100'>
                    Dian Nuswantoro University, Semarang.
                  </span>
                </div>
              </div>
            </section>

            <section className='pb-10 pt-5 grid md:grid-cols-4 gap-10 md:gap-0 grid-cols-2 justify-items-center'>
              <Logo.Content logo={Diamond} text='About' to={ABOUT} />
              <Logo.Content logo={Touch} text='Portfolio' to={PORTFOLIO} />
              <Logo.Content logo={Rocket} text='Resume' to={RESUME} />

              <Logo.Content logo={Pencil} text='Blog' to={BLOG} />
            </section>

            <section className='py-10'>
              <h3 className='xl:text-3xl lg:text-2xl text-xl flex font-medium dark:text-gray-100'>
                Drop me a{" "}
                <img src={Hello} alt='logo hello' className='lg:h-8 h-6 mx-3' />{" "}
              </h3>

              <div className='mt-10 grid md:grid-cols-4 grid-cols-2 w-full mx-auto'>
                <a
                  href='mailto:wisnuputrapratama24'
                  target='_blank'
                  rel='noreferrer noopener'>
                  <DropMe text='Email' src={Email} />
                </a>
                <a
                  href='https://www.linkedin.com/in/wisnu-putra-pratama-4531861aa/'
                  target='_blank'
                  rel='noreferrer noopener'>
                  <DropMe text='Linkedin' src={Linkedin} />
                </a>
                <a
                  href='https://github.com/wisnupratama24'
                  target='_blank'
                  rel='noreferrer noopener'>
                  <DropMe text='Github' src={Github} />
                </a>
                <a
                  href='https://www.instagram.com/wisnu_24pratama'
                  target='_blank'
                  rel='noreferrer noopener'>
                  <DropMe text='Instagram' src={Instagram} />
                </a>
              </div>
            </section>
          </section>
        </div>
      </section>

      <footer className='my-20'>
        <Footer />
      </footer>
    </>
  );
}
