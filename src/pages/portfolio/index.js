import React from "react";
import { Link } from "react-router-dom";
import { Touch } from "../../assets";
import { Navbar } from "../../components";
import { PORTFOLIO } from "../../constants/url";
import { ChangeFavicon } from "../../helpers";
import { Footer } from "../../parts";

export default function Portfolio() {
  const title = "Portfolio";
  ChangeFavicon("/images/touch.png", title);
  return (
    <>
      <section className='portfolio-navbar'>
        <Navbar>
          <span className='dark:text-gray-100'>/</span>
          <Link
            to={PORTFOLIO}
            className='ml-5 text-orange-100 dark:font-medium'>
            Portfolio
          </Link>
        </Navbar>
      </section>
      <section className='portfolio-body mx-auto w-full md:w-10/12 px-7 lg:px-10 xl:px-32 lg:pt-20 container'>
        <img src={Touch} alt='logo touch' className='lg:h-20 md:h-16 h-12' />
        <h2 className='lg:text-4xl md:text-2xl text-xl font-bold lg:mt-10 md:mt-8 mt-6 dark:text-gray-100 text-gray-200'>
          {title}
        </h2>
        <h5 className='lg:text-2xl text-lg lg:mt-8 mt-4 dark:text-gray-100 opacity-75 border-b-2  pb-5'>
          My curated{" "}
          <span className='font-medium text-orange-100 italic'>works</span>{" "}
        </h5>

        <section className='portfolio pt-20'>
          <div className=''>
            <div className='rounded-lg bg-white dark:bg-black-200 border border-opacity-40 dark:border-none dark:border-opacity-0 border-gray-100 dark:border-black-100 shadow-md grid grid-cols-1'>
              <img src='/images/accouting.png' alt='accounting project' />
              <div className='mt-5 p-4'>
                <h3 className='text-2xl dark:text-gray-200 font-medium'>
                  Software Accounting
                </h3>
                <p className='leading-8 mt-5 text-gray-200 opacity-90'>
                  Penjualan, pembelian, stok, produksi, laporan laba rugi, buku
                  besar, jurnal umum dan masih banyak fitur lainnya, penjualan
                  pada software ini juga sudah menggunakan metode fifo .
                  Software ini dibuat dengan YII Framework.
                </p>
              </div>
            </div>
            <div className='flex mt-10 grid lg:grid-cols-3 grid-cols-1 gap-8'>
              <div className='rounded-lg bg-white dark:bg-black-200 border border-opacity-40 border-gray-100 dark:border-black-100 shadow-md'>
                <img
                  src='/images/dailymessage.png'
                  alt='daily message project'
                />
                <div className='mt-5 p-4'>
                  <h3 className='text-xl dark:text-gray-200 font-medium'>
                    Daily Message
                  </h3>
                  <p className='leading-relaxed mt-5 text-gray-200 opacity-90 text-sm'>
                    Daily message adalah suatu web dimana pengguna bisa mengirim
                    pesan ke masa depan, selain ini juga pengguna bisa saling
                    berinteraksi seperti facebook versi lite. website ini dibuat
                    menggunakan MERN Stack
                  </p>
                </div>
              </div>
              <div className='rounded-lg bg-white dark:bg-black-200 border border-opacity-40 border-gray-100 dark:border-black-100 shadow-md'>
                <img src='/images/staycation.png' alt='staycation project' />
                <div className='mt-5 p-4'>
                  <h3 className='text-xl dark:text-gray-200 font-medium'>
                    Staycation
                  </h3>
                  <p className='leading-relaxed mt-5 text-gray-200 opacity-90 text-sm'>
                    Web booking hotel, villa ataupun apartemen, dibuat dengan
                    menggunakan MERN Stack
                  </p>
                </div>
              </div>
              <div className='rounded-lg bg-white dark:bg-black-200 border border-opacity-40 border-gray-100 dark:border-black-100 shadow-md'>
                <img
                  src='/images/microservices.png'
                  alt='microservices project'
                />
                <div className='mt-5 p-4'>
                  <h3 className='text-xl dark:text-gray-200 font-medium'>
                    Microservices Online Course
                  </h3>
                  <p className='leading-relaxed mt-5 text-gray-200 opacity-90 text-sm'>
                    Web online course, dimana terdapat berbagai macam kelas
                    prabayar dan gratis. pengguna dapat mengenrollnya, web ini
                    dibuat dengan arsitektur microservices. menggunakan MERN
                    Stack dan Laravel + Mysql
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className='py-20'>
        <Footer />
      </section>
    </>
  );
}
