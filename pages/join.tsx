import Link from "next/link";
import type { NextPage } from "next";
import Marquee from "react-fast-marquee";
import Script from "next/script";

import Layout from "../components/common/layout";

const Join: NextPage = () => {
  return (
    <>

      <div className="bg-black text-white pt-20 lg:pl-20">
        <div className="">
          <div className="py-10 capitalize font-signika font-light tracking-tight text-3xl">
            ABOUT US
          </div>
          <div className="capitalize font-signika font-medium tracking-tight text-8xl">
            JOIN US
          </div>
          <div className="py-10 capitalize font-mono font-bold tracking-tight text-l">
            <span className="text-mcgill-red">
              <Link href="/">HOME </Link>
            </span>
            / ABOUT US / JOIN US
          </div>
        </div>
      </div>

      <Marquee gradient={false} speed={45}>
        <img src="img/Photo Chain.png" />
      </Marquee>

      <div className="bg-black text-white py-16 px-20 grid grid-cols-10 gap-16 font-signika">
        <div className="col-span-6">
          <h2 className="text-left text-4xl my-2">
            Want to join an interdisciplinary research group that grows your passion in synthetic biology?
          </h2>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-5">


            <div className="border-mcgill-red border-t">
              <h3 className="text-2xl py-3 ">Wet Lab</h3>
              <p className="font-mono leading-5 text-justify pr-[10%]">
                Wet lab members design, devise, and troubleshoot experiments in the lab,
                 testing the theory of the project and validating its components. 
                 Work occurs from May-October in preparation for the Grand Jamboree.
                  Example workflows include protein purification, enzyme kinetics determination,
                   cell live/dead assays, and DNA computing.{" "}
              </p>

              {/* <p className="font-mono pt-2 text-justify leading-5 pr-[10%]">
                Prior experience in a life sciences or chemistry lab is
                preferred, but by no means required as we will provide training.
                Wet lab requires a lot of time dedicated to it, so we care more
                if you are able to come in and do the work. Positions are not
                remote and presence on campus over the summer is required.
              </p> */}
            </div>


            <div className="border-mcgill-red border-t">
              <h3 className="text-2xl py-3">Dry Lab</h3>
              <p className="font-mono leading-5 text-justify pr-[10%]">
                Dry lab members develop software tools (ex. algorithms, softwares, databases, etc)
                 that complement the wet lab project. Additionally, they may do pre-experiment simulation
                  (modelling proteins, kinetics, RNA). Some members also complete web development
                   for our competition Wiki page. Previous knowledge of programming languages is
                    definitely an asset.
              </p>

              {/* <p className="font-mono pt-2 leading-5 text-justify pr-[10%]">
                Prior computational experience is preferred, especially in areas
                of mathematical modelling and protein modelling. Dry lab
                research can be done with the majority of it being remote.
              </p> */}
            </div>


            <div className="border-mcgill-red border-t">
              <h3 className="text-2xl py-3">Human Practices</h3>
              <p className="font-mono leading-5 text-justify pr-[10%]">
                Human Practices tells the story of our project. Members consult with industry members,
                 researchers, regulatory agencies, and external organizations
                  (i.e. Doctors without Borders) to guide project design. 
                  Entrepreneurship focuses on implementation and project market value. 
                  Members organize consultations, conferences, networking events, and a business report.

              </p>

              {/* <p className="font-mono pt-2 leading-5 text-justify pr-[10%]">
                Prior experience with running surveys is preferred. Strong
                interpersonal skills are required, and members of our human
                practices team may be sent as representatives of our
                organization to local and international conferences. Position is
                mostly remote.
              </p> */}
            </div>



            <div className="border-mcgill-red border-t">
              <h3 className="text-2xl py-3">Education & Inclusivity</h3>
              <p className="font-mono leading-5 text-justify pr-[10%]">
               The education subteam is responsible for hosting different educational initiatives (eg. workshops, resources) throughout the academic year. Inclusivity focuses on empowering diverse perspectives and eliminating barriers for underrepresented groups in STEM. The goal of these subteams is expand the reach for STEM and help make synbio accessible to everyone.
              </p>

              {/* <p className="font-mono pt-2 leading-5 text-justify pr-[10%]">
                Prior experience with design software (ie. Figma, Adobe Creative
                Suite), photography, and/or videography is strongly preferred.
                Position is mostly remote.
              </p> */}
            </div>

                        <div className="border-mcgill-red border-t">
              <h3 className="text-2xl py-3">Finance</h3>
              <p className="font-mono leading-5 text-justify pr-[10%]">
              The Finance subteam is responsible for maintaining financial health for McGill iGEM. This involves procuring grants, searching for partnerships/sponsors and doing fund presentations. These members make budgets and manage payments via the Bioengineering department and the Engineering Undergraduate Society (EUS).

              </p>

              {/* <p className="font-mono pt-2 leading-5 text-justify pr-[10%]">
                Prior experience with design software (ie. Figma, Adobe Creative
                Suite), photography, and/or videography is strongly preferred.
                Position is mostly remote.
              </p> */}
            </div>

            <div className="border-mcgill-red border-t">
              <h3 className="text-2xl py-3">Media</h3>
              <p className="font-mono leading-5 text-justify pr-[10%]">
               The Media subteam designs our iGEM Wiki for the competition and handles 
               social media, posters, and promotion. These members are often very creative 
               and have good artistic skills. A large portion of iGEM is about developing
                a community passionate about synthetic biology–this subteam helps to do so.

              </p>

              {/* <p className="font-mono pt-2 leading-5 text-justify pr-[10%]">
                Prior experience with design software (ie. Figma, Adobe Creative
                Suite), photography, and/or videography is strongly preferred.
                Position is mostly remote.
              </p> */}
            </div>
            
          </div>
        </div>
        <div className="col-span-4 font-signika px-10 my-10">
            <h4 className="my-4 text-2xl">Newsletter</h4>
            <iframe src="https://mcgilligem.substack.com/embed" width="350" height="80" className="border-mcgill-red border-1 -ml-5" scrolling="no" style={{textTransform: "uppercase"}}></iframe>
            {/* style="border:1px solid #EEE; background:white;" frameborder="0"  */}
            {/* <input type="text" placeholder="Email"></input> */}
            <h4 className="my-6 text-2xl">Location</h4>
            <div style={{ display: "none" }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.0705811945377!2d-73.58294048444097!3d45.508657779101526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a374170c221%3A0x6722b2a9457b3c01!2sDuff%20Medical%20Building!5e0!3m2!1sen!2sca!4v1660872117712!5m2!1sen!2sca" width="450" height="450" loading="lazy"></iframe>
            </div>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.3559484137445!2d-73.5822998!3d45.502912800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a3f2816aafd%3A0x84467c484a0b8b5b!2sMcIntyre%20Medical%20Science%20Building%20-%20Lower%20Entrance!5e0!3m2!1ses!2spe!4v1779219383453!5m2!1ses!2spe" width="400" height="300" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
      </div>
      {/* <div className="bg-black text-white py-10 px-20 font-signika text-2xl">
        <button className="bg-mcgill-red hover:bg-mcgill-mahogany text-white px-10 font-bold py-10 rounded">
          <a href='https://docs.google.com/forms/d/1HK8e0vPiEN6frk7yyPbxhYF7qi4eBEZKRk2hSjHZw4k/viewform?pli=1&pli=1&edit_requested=true' rel='noreferrer' target='_blank'>McGill iGEM 2023-2024 Application Form</a>
        </button>
      </div> */}

      {/*<div data-tf-widget="SSyNYsHq" data-tf-iframe-props="title=McGill iGEM 2022-2023 Application Form" className="px-20 pb-10 h-[100vh] bg-black" data-tf-medium="snippet"></div>

                <Script src="//embed.typeform.com/next/embed.js"/>*/}
    </>
  );
};

export default Join;


// export async function getStaticProps() {}

export async function getStaticProps() {
  return {
    props: {},
  };
}

