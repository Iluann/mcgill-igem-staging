import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/common/layout";
import ReactPlayer from "react-player";
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";

import Typewriter from "typewriter-effect";
import Loading from "../components/common/loading";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
    <div className="bg-gray-200">
        <div className="snap-y snap-mandatory">

        <div className="snap-start">

        <video
          autoPlay
          muted
          loop
          className="z-10 relative w-full max-h-screen object-fill"
        >
          <source src="videos/homepage_video.mp4" type="video/mp4" />
          <Loading/>
        </video>
        </div>
        {/* <ReactPlayer url="/videos/homepage_video.mp4" loop={true} playing={true} volume={0} className="absolute top-0 left-0 w-full h-full" /> */}
        <div className="cellsSection pt-8 pb-8 snap-start" >

          <div className="text-white w-full relative ">
            <div className="absolute -top-8 z-50 bg-black w-full h-8"/>
            <div className="absolute -top-8 left-0 z-10 h-[10rem] w-full gradienttop" />
            <img className="w-full" src="img/cells.jpg" /> 
            <div className="uppercase leading-none text-[5.8vw] absolute top-[55%] left-[55%] font-semibold font-mono">
            <p>We are</p> <span className="inline-block"><Typewriter
                
                onInit={(typewriter) => {
                  typewriter
                    .typeString("biohackers")
                    .pauseFor(1000)
                    .deleteChars(10)
                    .typeString("academics")
                    .pauseFor(1000)
                    .deleteChars(9)
                    .typeString("adventurers")
                    .pauseFor(1000)
                    .deleteChars(11)
                    .start();
                }}
                options={{
                  loop: true,
                  autoStart: true,
                  deleteSpeed: 8,
                }}
              />
              </span>
            </div>
            <div className="absolute -bottom-8 left-0 z-10 h-[10rem] w-full gradientbottom"></div>
            <div className="absolute -bottom-8 bg-black z-50 text-white py-4 text-center font-source-code-pro w-full">
              &#34;People confuse what&#39;s impossible today with what&#39;s
              impossible tomorrow&#34; -George M. Church
            </div>
          </div>
        </div>
        </div>

        <div className="bg-black text-mcgill-red flex">
        <div className="">
          <div className="w-[45%] pl-2 pt-[3rem]">
            <span className="hometext">OUR TEAM</span>
            <div className="hover:translate-x-0.5 pt-10 pb-10 pl-10 learnmore cursor-pointer">
              &#10230; <span className="hover:underline"><Link href="about">Learn More</Link> </span> 
            </div>
          </div>
          <div className="image_effect p-4">
            <img src="img/home_bot.png" />
          </div>
        </div>

        <div className="">
          <div className="image_effect  p-4">
          <img src="img/team_pic.png"/>
          </div>
          <span className="hometext float-right text-right pt-8 pr-10">
            OUR WORK
          </span>
          <div className="hover:translate-x-0.5 float-right pt-[3rem] pb-10 pr-8 learnmore cursor-pointer">
          &#10230;  <span className="hover:underline"><Link href="mission">Learn More</Link> </span> 
          </div>
        </div>
      </div>

        {/* <div className="h-auto">
          <Marquee
            className="text-black text-8xl"
            direction="left"
            speed={30}
            >
              Build
            </Marquee>
        </div> */}

        <div className="relative text-white text-center">
        <div className="absolute top-0 left-0 z-10 h-[13rem] w-full  gradienttop2"/>

          <img src="img/bac_culture.png" className=""></img>
          <div className="bothalign z-30 w-full">
            <div className="left_marquee w-full font-black text-[13.5vw] -my-12  font-montserrat">BUILD</div>
            <div className="right_marquee w-full font-normal text-[13.5vw] -my-12  font-ibarra">BIOLOGY</div>
            <div className="left_marquee w-full font-normal text-[13.5vw] -my-12  font-monoton">BEYOND</div>
          </div>



          <div className="absolute bottom-0 left-0 z-10 h-[13rem] w-full  gradientbottom2"/>
        

        {/* <video
          autoPlay
          muted
          loop
          className="w-[40%] absolute right-0 bottom-0"
        >
          <source src="videos/multi_pipette.mp4" type="video/mp4" />
        </video>

        <video
          autoPlay
          muted
          loop
          className="w-[40%] absolute right-0 top-0"
        >
          <source src="videos/lab.mp4" type="video/mp4" />
        </video>
        
        <video
          autoPlay
          muted
          loop
          className="w-1/4 absolute left-0 top-0"
        >
          <source src="videos/vert.mp4" type="video/mp4" />
        </video> */}

        </div>
    </div>
    </>
  );
};

export default Home;

// export async function getStaticProps() {}


export async function getStaticProps() {
  return {
    props: {},
  };
}