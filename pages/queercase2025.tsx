import Link from "next/link";
import type { NextPage } from "next";
import Image from "next/image";

import Layout from "../components/common/layout";

const QueerCase2025: NextPage = () => {
  return (
    <>
      <div className="w-full bg-black text-white pt-20  tracking-tight">
        <div className="mb-10 pl-[10rem]">
          <div className="py-10 capitalize font-signika font-light text-3xl">
            INITIATIVES
          </div>
          <div className="capitalize font-signika font-medium text-8xl">
            QUEER CASE 2025
          </div>
          <div className="py-5 capitalize font-mono font-bold  text-l">
            <span className="text-mcgill-red">INITIATIVES </span>/ QUEER CASE 2025
          </div>
        </div>

        <div className="pl-40 pr-40">
          <div className="w-3/3 mt-14 font-mono font-regular text-2xl" style={{ textAlign: "justify" }}>
            Across the medical system, 2SLGBTQIA+ individuals face consistent access
            barriers to queer-inclusive healthcare. From hormone therapy to gender-affirming
            care to sexual health resources, queer healthcare gaps are rooted in systemic 
            neglect, lack of education and, notably, underrepresentation in the medical
            research field. Most often, healthcare-related research considers only the cisgender,
            heterosexual experience, ignoring health struggles faced by queer and gender-diverse folk. 
            Thus, there exists a need for queer-focused research in this area.
          </div>
        </div>
        {/* <div className="h-10 w-full bg-blue-400"/> */}
        <br />

       <div className="w-full overflow-hidden">
        <img
            src="/img/prideflag.jpg"
            className="min-w-[100%] h-auto"
            alt="banner"
        />
        </div>




        <div className="pl-40 pr-40">
          
          <div className="w-3/3 mt-14 font-mono font-regular text-2xl" style={{ textAlign: "justify" }}>
            Synthetic biology has recently emerged at the forefront of the medical field. 
            With genetic engineering, new and improved solutions are consistently being developed
             for a wide variety of health issues.
            <br />
            <br />
            So why not queer healthcare? This was a question our team asked ourselves: 
            we wanted to explore further how synthetic biology could be used as a tool 
            to improve accessibility and quality of queer and trans healthcare. What’s more,
            we wanted to invite others to reflect on these intersections as well and expand
            access to synthetic biology in this unique context. The rest fell into place,
            and the case competition became a reality.

            <br />
            <br />
            If you are interested in potentially highlighting the intersections of queer
            healthcare and synthetic biology in your own community, we have compiled
            a list of resources from our QueerCase event, including further reading
            materials and case competition prompts. These resources can be found below.
          </div>
        </div>

         <br />
        <br />

        <div className="">
        <iframe
            src="/files/2SLGBTQIA+ _ McGill - iGEM 2025.pdf"
            className="w-full h-screen pl-40 pr-40"
            ></iframe>
        </div>
         <br />
        <br />
        </div>
    </>
  );
};

export default QueerCase2025;

// export async function getStaticProps() {}

export async function getStaticProps() {
  return {
    props: {},
  };
}