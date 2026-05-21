import Link from "next/link";
import type { NextPage } from "next";
import Image from "next/image";

import Layout from "../components/common/layout";

const MiniGEM2025: NextPage = () => {
  return (
    <>
      <div className="w-full bg-black text-white pt-20  tracking-tight">
        <div className="mb-10 pl-[10rem]">
          <div className="py-10 capitalize font-signika font-light text-3xl">
            INITIATIVES
          </div>
          <div className="capitalize font-signika font-medium text-8xl">
            MINIGEM 2025
          </div>
          <div className="py-5 capitalize font-mono font-bold  text-l">
            <span className="text-mcgill-red">INITIATIVES </span>/ MINIGEM 2025
          </div>
        </div>

        <div className="pl-40 pr-40">
          <div className="w-3/3 mt-14 font-mono font-regular text-2xl" style={{ textAlign: "justify" }}>
            In 2025, we organized the first ever Canadian synthetic biology competition for 
            secondary school students, miniGEM, in order to provide an accessible introduction
             to synthetic biology for young students across Canada. Over 150 students from nine
              Canadian provinces and one Canadian territory participated in workshops, project
               design, and guided work-sessions throughout the week-long competition.

          </div>
        </div>
        {/* <div className="h-10 w-full bg-blue-400"/> */}
 


        <div className="pl-40 pr-40">
          
          <div className="w-3/3 mt-14 font-mono font-regular text-2xl" style={{ textAlign: "justify" }}>


           We prepared a wide variety of resources aimed at students, teachers, and judges 
           that future iGEM teams may find useful for organizing similar secondary school competitions.

          </div>
        </div>

         <br />
        <br />

        <div className="">
        <iframe
            src="/files/Paper Reading Guide.pdf"
            className="w-full h-screen pl-40 pr-40"
            ></iframe>
        </div>
        <br />
        <div className="">
        <iframe
            src="/files/Presenting Science.pdf"
            className="w-full h-screen pl-40 pr-40"
            ></iframe>
        </div>
        <br />

        <div className="">
        <iframe
            src="/files/Synbio Dictionary.pdf"
            className="w-full h-screen pl-40 pr-40"
            ></iframe>
        </div>
         <br />
        <br />
        </div>
    </>
  );
};

export default MiniGEM2025;

// export async function getStaticProps() {}

export async function getStaticProps() {
  return {
    props: {},
  };
}