import React from "react";
import { Link } from "react-router-dom";
import {
  Rocket,
  Udinus,
  Bootstrap,
  ReactSkill,
  TailwindSkill,
  Express,
  Codeigniter,
  Nodejs,
  Yii,
  Figma,
} from "../../assets";
import { Navbar } from "../../components";
import { RESUME } from "../../constants/url";
import { ChangeFavicon } from "../../helpers";
import { Experience, Footer } from "../../parts";

export default function Resume() {
  const title = "Resume";
  ChangeFavicon("/images/rocket.png", title);
  return (
    <>
      <section className='resume-navbar'>
        <Navbar>
          <span className='dark:text-gray-100'>/</span>
          <Link to={RESUME} className='ml-5 text-orange-100 dark:font-medium'>
            Resume
          </Link>
        </Navbar>
      </section>
      <section className='resume-body mx-auto w-full md:w-10/12 px-7 lg:px-10 xl:px-32 lg:pt-20 container'>
        <img src={Rocket} alt='logo rocket' className='lg:h-12 md:h-10 h-8' />
        <h2 className='lg:text-4xl md:text-2xl text-xl font-bold lg:mt-10 md:mt-8 mt-6 dark:text-gray-100 text-gray-200'>
          {title}
        </h2>
        <h5 className='lg:text-2xl text-lg lg:mt-8 mt-4 dark:text-gray-100 opacity-75'>
          What I've been going through to grow my career as as a{" "}
          <span className='font-medium text-orange-100 italic'>
            Frontend Developer
          </span>{" "}
        </h5>
        <section className='working-experience lg:mt-16 md:mt-10 mt-8'>
          <h2 className='lg:text-2xl absolute font-bold dark:text-gray-100 text-gray-200 border-b-2 pb-3 dark:border-gray-200 '>
            Working Experience
          </h2>

          <div className='pt-16'>
            <Experience
              title='Head of IT Division'
              textLink='Brebes Education Fair'
              link='http://brebesedufair.org/'
              long='Jun 2018 - Jan 2019'>
              {" "}
              Working as Fullstack Developer for make website for event in
              Brebes, the name of event is Brebes Education Fair or we can call
              BEF. BEF is a event for student like simulation SBMPTN or UTBK,
              this website for registation and genereate a ticket.{" "}
            </Experience>

            <Experience
              title='Programmer'
              textLink='Garuda Sarana Sejahtera'
              link='https://klikgss.com/'
              long='Feb 2019 - Des 2020'>
              Working as Programmer for CV. Garuda Sarana Sejahtera, i make some
              project, among them sijaksa, accounting, and program for control
              student in school like register new student, payment, etc.
            </Experience>
          </div>
        </section>

        <section className='resume-education mt-16'>
          <h2 className='lg:text-2xl absolute font-bold dark:text-gray-100 text-gray-200 border-b-2 pb-3 dark:border-gray-200 '>
            Education
          </h2>

          <div className='pt-24 flex items-center'>
            <img src={Udinus} alt='logo udinus' className='md:h-32 h-24' />
            <div className='pl-6 text-gray-200 dark:text-gray-200'>
              <h4 className='md:text-2xl text-lg font-medium '>
                Dian Nuswantoro University ( UDINUS )
              </h4>
              <p className='py-2 md:text-base text-sm'>
                Bachelor's Degree, Information Technology
              </p>
              <span className='block text-sm'>2018 - Now</span>
            </div>
          </div>
        </section>

        <section className='resume-skills mt-16'>
          <h2 className='lg:text-2xl absolute font-bold dark:text-gray-100 text-gray-200 border-b-2 pb-3 dark:border-gray-200 '>
            Skills
          </h2>

          <div className='pt-24 grid grid-cols-4 gap-y-14'>
            <a
              target='_blank'
              rel='noreferrer noopenner'
              href='https://getbootstrap.com/'>
              <Bootstrap />
            </a>
            <a
              target='_blank'
              rel='noreferrer noopenner'
              href='https://reactjs.org/'>
              <ReactSkill />
            </a>
            <a
              target='_blank'
              rel='noreferrer noopenner'
              href='https://tailwindcss.com'>
              <TailwindSkill />
            </a>
            <a
              target='_blank'
              rel='noreferrer noopenner'
              href='https://expressjs.com/'>
              <Express />
            </a>
            <a target='_blank' rel='noreferrer noopenner' href='/'>
              <Codeigniter />
            </a>
            <a
              target='_blank'
              rel='noreferrer noopenner'
              href='https://nodejs.org/en/'>
              <Nodejs />
            </a>
            <a
              target='_blank'
              rel='noreferrer noopenner'
              href='https://www.yiiframework.com/'>
              <Yii />
            </a>
            <a
              target='_blank'
              rel='noreferrer noopenner'
              href='https://www.figma.com/'>
              <Figma />
            </a>
          </div>
        </section>
        <section className='mt-20'>
          <p className='text-xl dark:text-gray-200 leading-10'>
            If you interested with me, please email to{" "}
            <span className='text-orange-100 font-medium'>
              {" "}
              wisnuputrapratama24@gmail.com
            </span>
          </p>
        </section>
      </section>
      <section className='mt-10 py-20'>
        <Footer />
      </section>
    </>
  );
}
