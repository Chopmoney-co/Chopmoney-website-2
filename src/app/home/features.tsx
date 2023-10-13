// import { stylesWithCssVar } from "@/utils/motion";
"use client"
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import Lenis from '@studio-freight/lenis'

import { useEffect, useRef } from "react";
import { FeatureBg, IndexPhone ,CreateBudget ,Processing ,TopUp} from "../../../public/images";


export const Features = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // offset: ["end start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.9, 1], [0.8, 0.8, 1]);
  // const x = useTransform(scrollYProgress, [0.3, 1], ["50%", "0%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 0.85, 0.9],
    [1, 1, 0.4, 0.4, 1]
  );

  const text1Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    [0, 1, 0]
  );
  const text1Y = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    ["30px", "0px", "-30px"]
  );

  const text2Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    [0, 1, 0]
  );
  const text2Y = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    ["30px", "0px", "-30px"]
  );

  const text3Opacity = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    [0, 1, 0]
  );
  const text3Y = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    ["30px", "0px", "-30px"]
  );
  
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
    <section
      ref={targetRef}
      className="flex h-[800vh] flex-col w-full  items-center bg-black justify-start"
    >

<div className="sticky top-[16.7vh] h-[66.8vh] px-16 text-2xl leading-[1] text-white [&_p]:w-[45rem] [&_p]:max-w-[90%]">
      <div className="text-white grid grid-col-2 grid-flow-col gap-4  ">
        <div className=" w-[30vw] h-full rounded-3xl">
         <motion.p
          style={({
            opacity: text1Opacity,
            // "--y": text1Y,
          })as any}
          className=" paraghrap "
        >
          <span className="text-primary">Preconfigured environments</span>
          <br />
          We detect your environment so you don't need to fiddle with
          configuration files.
        </motion.p>
        <motion.p
          style={({
            opacity: text2Opacity,
            // "--y": text2Y,
          })as any}
          className="paraghrap1 "
        >
          <span className="text-primary">Command Pallete</span>
          <br />
          Access and complete any action in seconds with the command palette.
        </motion.p>
        <motion.p
          style={({
            opacity: text3Opacity,
            // "--y": text3Y,
          })as any}
          className="paraghrap2 "
        >
          <span className="text-primary">Devtools</span>
          <br />
          We've bundled useful tools to help you get your work done faster and
          more efficiently.
        </motion.p>
        </div>
        {/* <div className=" text-black w-[30vw] rounded-3xl"> */}
          <motion.div style={{  scale }} className="relative h-full">
          <motion.figure style={{ opacity }} className="h-full">
            <Image src={CreateBudget} alt="img" className="h-full w-auto" />
          </motion.figure>
          <motion.figure style={{ opacity: text2Opacity }}>
            <Image
              src={TopUp}
              className="absolute inset-0 h-full w-auto"
              alt="img"
            />
          </motion.figure>
          <motion.figure style={{ opacity: text3Opacity }}>
            <Image
              src={Processing}
              className="absolute inset-0 h-full w-auto"
              alt="img"
            />
          </motion.figure>
        </motion.div>
        {/* </div> */}
      </div>
      </div>
    </section>
  );
};
