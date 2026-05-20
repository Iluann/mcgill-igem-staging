import Link from "next/link";
import type { NextPage } from "next";

import Layout from "../components/common/layout";

const Contact: NextPage = () => {
  return (
    <>
      <div className="bg-black text-white pt-20 lg:pl-20">
        <div className="mb-1">
          <div className="py-10 capitalize font-signika font-light tracking-tight text-3xl">
            MORE
          </div>
          <div className="capitalize font-signika font-medium tracking-tight text-8xl">
            CONTACT US
          </div>
          <div className="py-10 capitalize font-mono font-bold tracking-tight text-l">
            <span className="text-mcgill-red">
              <Link href="/">HOME </Link>
            </span>
            / MORE / CONTACT US
          </div>
          <div className="font-mono font-bold tracking-tight text-l">Contact email: <a href="mailto:igem@mcgill.ca">igem@mcgilleus.ca</a></div>
          
        </div>

        <div className="flex flex-row justify-center items-center">
          <form className="w-[80%]  py-16 font-signika" action="https://formspree.io/f/xbjnwkde" method="post">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                  name="First Name"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                  name="Last Name"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  name="_replyto"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="no-resize appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                  name="Message"
                ></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <input type="submit" value="SEND" className="shadow bg-mcgill-red focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 font-thin"/>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
