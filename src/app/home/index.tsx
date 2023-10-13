"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { BackgroundImg, IndexPhone } from "../../../public/images";
import { useTransform, useScroll, motion } from "framer-motion";
import "styled-jsx/style";
import '../page.scss'
import Lenis from '@studio-freight/lenis'


export const Index = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.1], [1, 0.0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 6.5]);
    // const x = useTransform(scrollYProgress, [0.3, 1], ["50%", "50%"]);
useEffect(()=>{
  const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

function raf(time:any) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
},[])

  return (
    <>
      <motion.section className="index-page bg-black">
        <div className="relative w-screen h-[100vh] wrapper">
          <motion.div
            className="absolute mobile-div"
            style={{ scale,opacity : opacity2}}
            initial={false} 
            animate={{ scale: 1 }}
          >
            <Image alt="mobile" src={IndexPhone} className="mobile"></Image>
          </motion.div>
          <motion.div
            style={{ opacity }}
            ref={targetRef}
          >
            <Image
              alt="bg"
              src={BackgroundImg}
              className="absolute bg-img"
            ></Image>
          </motion.div>

          <motion.div
            style={{ opacity }}
            ref={targetRef}
            className="absolute text-center mt-24 text-div text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <p className="index-page-header">
              Pay yourself
              <span className="font-medium"> anytime, any day!</span>
            </p>
            <p className="index-page-sub-header">
              Enjoy life while sticking to your budget with Chopmoney. Whether
              you’re a Big Spender or an Economic Guru, your money makes it to
              the month's end!
            </p>
            <div className="mt-12">
              <a
                href="#"
                className="px-12 py-4 border border-slate-400 border-t-white  rounded-full"
              >
                Download
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>
      {/* <section className="w-full h-screen bg-black">
        <div className="h-screen">check if this is working</div>
      </section> */}
    </>
  );
};

