import Link from "next/link";
import type { NextPage } from "next";
import Image from "next/image";

import Layout from "../components/common/layout";

const Standard: NextPage = () => {
  return (
    <>
      <div className="bg-black text-white pt-20 lg:pl-20">
        <div className="mb-16">
          <div className="py-10 capitalize font-signika font-light tracking-tight text-3xl">
            PARTNERS
          </div>
          <div className="capitalize font-signika font-medium tracking-tight text-8xl">
            SPONSORS
          </div>
          <div className="py-10 capitalize font-mono font-bold tracking-tight text-l">
            <span className="text-mcgill-red">
              <Link href="/">HOME </Link>
            </span>
            / PARTNERS / SPONSORS
          </div>
        </div>

        <div className="w-1/2 font-signika font-regular text-5xl pb-12">
          <span className="text-mcgill-red">Thank you </span>
          to all of our sponsors for supporting our mission!
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center py-10">
        <div className="h-full w-[80%] py-5">
          <a href="https://www.mcgill.ca/" className="">
            <Image
              alt="image of mcgill logos"
              width={819}
              height={193}
              layout="responsive"
              src="/sponsors/McGill logos.png"
            />
          </a>
        </div>
        <div className="h-full w-[50%] py-5 flex flex-row justify-center items-center">
          {/* <div className="border-4 border-mcgill-red h-20 w-20 mx-5"></div>
            <div className="border-4 border-mcgill-red h-20 w-20"></div> */}
          <div className="h-full w-full mx-5">
            <a href="https://ssmu.ca/" className="">
              <Image
                alt="SSMU logo"
                width={10}
                height={20}
                layout="responsive"
                src="/sponsors/SSMU logo.png"
              />
            </a>
          </div>
          <div className="h-full w-[200%] mx-5">
            <a href="https://https://susmcgill.ca/" className="">
              <Image
                alt="science undergraduate society logo"
                width={603}
                height={316}
                layout="responsive"
                src="/sponsors/SUS logo.webp"
              />
            </a>
          </div>
          <div className="h-full w-[100%] mx-5">
            <a href="https://https://eusmcgill.ca/" className="">
              <Image
                alt="engineering undergraduate society logo"
                width={603}
                height={316}
                layout="responsive"
                src="/sponsors/EUS logo.png"
              />
            </a>
          </div>
        </div>
        <div className="h-full w-[70%] py-5 flex flex-row justify-center items-center">
          <div className="h-full w-1/2 py-5">
            <a href="https://https://genomecanada.ca" className="">
              <Image
                alt="genome canada logo"
                width={819}
                height={193}
                layout="responsive"
                src="/sponsors/genome canada logo.png"
              />
            </a>
          </div>

          <div className="h-full w-1/2 py-5">
            <a href="https://www.crbsmcgill.ca/" className="">
              <Image
                alt="Centre de recherche en biologie structurelle logo"
                width={819}
                height={193}
                layout="responsive"
                src="/sponsors/CRBS logo.png"
              />
            </a>
          </div>

          <div className="h-full w-full mx-5">
            <a href="https://smblairfoundation.com/" className="">
              <Image
                alt="SM blair foundation logo"
                width={586}
                height={199}
                layout="responsive"
                src="/sponsors/SM blair logo.png"
              />
            </a>
          </div>
          
        </div>

        <div className="h-full w-[75%] py-5 flex flex-row justify-center items-center">
          {/* <div className="border-4 border-mcgill-red h-20 w-20 mx-5"></div>
            <div className="border-4 border-mcgill-red h-20 w-20"></div> */}
          <div className="h-full w-full mx-5">
            <a href="https://www.idtdna.com/" className="">
              <Image
                alt="integrated DNA technologies logo"
                width={400}
                height={100}
                layout="responsive"
                src="/sponsors/IDT logo.png"
              />
            </a>
          </div>
          <div className="h-full w-full mx-5">
            <a href="https://www.cultivarium.org/" className="">
              <Image
                alt="cultivarium logo"
                width={514}
                height={229}
                layout="responsive"
                src="/sponsors/Cultivarium-Logo.jpg"
              />
            </a>
          </div>
          <div className="h-full w-full mx-5">
            <a href="https://district3.co/" className="">
              <Image
                alt="district 3 logo"
                width={461}
                height={179}
                layout="responsive"
                src="/sponsors/D3 logo.jpeg"
              />
            </a>
          </div>
        </div>

        <div className="w-[75%] py-5 flex flex-row justify-center items-center">
          {/* <div className="border-4 border-mcgill-red h-20 w-20 mx-5"></div>
            <div className="border-4 border-mcgill-red h-20 w-20"></div> */}
          <div className="h-full w-full mx-5">
            <a href="https://www.twistbioscience.com/" className="">
              <Image
                alt="twist bioscience logo"
                width={495}
                height={105}
                layout="responsive"
                src="/sponsors/Twist_Bioscience_Official_Logo.png"
              />
            </a>
          </div>
 
          <div className="h-full w-full mx-5">
            <a href="https://molecularforecaster.com/" className="">
              <Image
                alt="molecular forecaster logo"
                width={1200}
                height={158}
                layout="responsive"
                src="/sponsors/molecular forecaster logo.png"
              />
            </a>
          </div>
        </div>


        <div className="h-full w-[75%] py-5 flex flex-row justify-center items-center">
          {/* <div className="border-4 border-mcgill-red h-20 w-20 mx-5"></div>
            <div className="border-4 border-mcgill-red h-20 w-20"></div> */}
          <div className="h-full w-full mx-5">
            <a href="https://www.boxone.xyz" className="">
              <Image
                alt="boxone logo"
                width={385}
                height={122}
                layout="responsive"
                src="/sponsors/BoxOne Logo.avif"
              />
            </a>
          </div>
          <div className="h-full w-full mx-5">
            <a href="https://frontrow.ventures" className="">
              <Image
                alt="frontrow ventures logo"
                width={355}
                height={124}
                layout="responsive"
                src="/sponsors/FRV logo.webp"
              />
            </a>
          </div>
          
        </div>

      </div>
    </>
  );
};

export default Standard;


export async function getStaticProps() {
  return {
    props: {},
  };
}