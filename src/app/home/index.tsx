"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { BackgroundImg, IndexPhone } from "../../../public/images";
import { useTransform, useScroll, motion } from "framer-motion";
import "styled-jsx/style";

export const Index = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3.2]);
  // Adjust the range and values as needed for your desired fade-out effect

  return (
    <>
      <motion.section className="index-page bg-black">
        <div className="relative w-screen h-[100vh] wrapper">
          <motion.div
            className="absolute mobile-div"
            style={{ scale }}
            initial={false} // Set initial to false to start with the scale at 1
            animate={{ scale: 1 }}
          >
            <Image alt="mobile" src={IndexPhone} className="mobile"></Image>
          </motion.div>
          <motion.div
            style={{ opacity }}
            ref={targetRef}
            // Use style prop instead of placing directly inside motion.div
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
            className="absolute text-center mt-24 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <p className="index-page-header">
              Pay yourself
              <span className="font-medium">anytime, any day!</span>
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
      <section className="w-full h-screen bg-black">
        <div className="h-screen">check if this is working</div>
      </section>
    </>
  );
};
