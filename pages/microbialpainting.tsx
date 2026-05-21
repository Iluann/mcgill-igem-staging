import Link from "next/link";
import type { NextPage } from "next";
import Image from "next/image";

import Layout from "../components/common/layout";

const MicrobialPainting: NextPage = () => {
  return (
    <>
      <div className="w-full bg-black text-white pt-20  tracking-tight">
        <div className="mb-10 pl-[10rem]">
          <div className="py-10 capitalize font-signika font-light text-3xl">
            INITIATIVES
          </div>
          <div className="capitalize font-signika font-medium text-8xl">
            MICROBIAL PAINTING
          </div>
          <div className="py-5 capitalize font-mono font-bold  text-l">
            <span className="text-mcgill-red">INITIATIVES </span>/ MICROBIAL PAINTING
          </div>
        </div>

    
        <br />

        <div className="">
        <iframe
            src="/files/Flyer.pdf"
            className="w-full h-screen pl-40 pr-40"
            ></iframe>
        </div>
        
        </div>
    </>
  );
};

export default MicrobialPainting;

// export async function getStaticProps() {}

export async function getStaticProps() {
  return {
    props: {},
  };
}