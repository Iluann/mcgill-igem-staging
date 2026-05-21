import styles from "../../styles/Navbar.module.scss";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

interface NavbarProps {
  pageLoading: boolean;
}

const Navbar = (props: NavbarProps) => {
  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (props.pageLoading) {
      setNavOpen(false);
    }
  }, [props.pageLoading]);

  const handleNavClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="fixed w-full z-[1000] h-[4.5rem] bg-[#ffffff0]">
      <div className="hover:cursor-pointer fixed float-left ml-4 mt-4 h-10 z-[2000]">
        <Link href="/">
          <img
            src="img/mcgill-igem-logo.png"
            alt="McGill IGEM Logo"
            className="h-full"
          />
        </Link>
      </div>

      <div className={navOpen ? styles.bgoopen : ""}></div>
      <div className={!navOpen ? styles.bg : ""}></div>

      <div className={styles.burgerAlign}>
        <div
          className={`${styles.simplyburger} ${
            navOpen ? styles.simplyburgeropen : null
          }`}
          onClick={handleNavClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {navOpen && (
        <div className="fixed w-full h-full text-white font-signika font-medium">
          <div className="bothalign">
            <div className={styles.navanim}>
              <div className="grid lg:grid-cols-2 grid-cols-1 w-full h-full lg:gap-x-55 lg:gap-y-10 gap-5">
                <div>
                  <h1 className="uppercase lg:text-5xl text-xl lg:py-2 py-1">About Us</h1>
                  <ul className="lg:text-xl text-base px-4">
                    <li className="hover:underline hover:cursor-pointer"><Link href="/about">Our Team</Link></li>
                    <li className="hover:underline hover:cursor-pointer"><Link href="/mission">Our Mission</Link></li>
                    <li className="hover:underline hover:cursor-pointer"><Link href="/join">Join Us</Link></li>
                    </ul>
                </div>
                <div>
                  <h1 className="uppercase lg:text-5xl text-xl lg:py-2 py-1">Partners</h1>
                  <ul className="lg:text-xl text-base px-4">
                    <li className="hover:underline hover:cursor-pointer"><Link href="/sponsors">Sponsors</Link></li>
                    {/*<li className="hover:underline hover:cursor-pointer"><Link href="/collaborators">Collaborators</Link></li>*/}
                    <li className="hover:underline hover:cursor-pointer"><Link href="/partner">Partner With Us</Link></li>
                    </ul>
                </div>
                <div>
                  <h1 className="uppercase lg:text-5xl text-xl lg:py-2 py-1">Projects</h1>
                  <ul className="lg:text-xl text-base px-4">
                    <li className="hover:underline hover:cursor-pointer"><Link href="/2025">2025</Link></li>
                    <li className="hover:underline hover:cursor-pointer"><Link href="/2024">2024</Link></li>
                    <li className="hover:underline hover:cursor-pointer"><Link href="/2023">2023</Link></li>
                    <li className="hover:underline hover:cursor-pointer"><Link href="/2022">2022</Link></li>
                    </ul>
                </div>
                <div>
                  <h1 className="uppercase lg:text-5xl text-xl lg:py-2 py-1">Initiatives</h1>
                  <ul className="lg:text-xl text-base px-4">
                    <li className="hover:underline hover:cursor-pointer"><Link href="/queercase2025" onClick={() => setNavOpen(false)}>Queer Case 2025 </Link></li>
                    <li className="hover:underline hover:cursor-pointer"><Link href="/minigem2025" onClick={() => setNavOpen(false)}>MiniGEM 2025 </Link></li>
                    <li className="hover:underline hover:cursor-pointer"><Link href="/microbialpainting" onClick={() => setNavOpen(false)}>Microbial Painting</Link></li>
                    <li className="hover:underline hover:cursor-pointer"><a href="https://open.spotify.com/show/566xfBOfyIhNnNVNsjVHjz?si=8c4f83dca49343cb&nd=1">STEMcast</a></li>
                    <li className="hover:underline hover:cursor-pointer"><Link href="https://igemontheverge.wixsite.com/home">Conference: OnTheVerge 2025</Link></li>
                    <li className="hover:underline hover:cursor-pointer"><a href="https://www.instagram.com/synbiocollective/">Synbio Collective</a></li>
                    <li className="hover:underline hover:cursor-pointer"><Link href="https://igemsynbiosis.wixsite.com/home">Synbiosis: The Exhibition</Link></li>
                    <li className="hover:underline hover:cursor-pointer"><Link href="https://mcgilligem.substack.com/">Blog</Link></li>
                    </ul>
                </div>
                <div>
                  <h1 className="uppercase lg:text-5xl text-xl lg:py-2 py-1 hover:underline hover:cursor-pointer"><a href="https://mcgilligem.substack.com/">NEWS</a></h1>
                </div>
                <div>
                  <h1 className="uppercase lg:text-5xl text-xl lg:py-2 py-1 hover:underline hover:cursor-pointer"><Link href="/contact">Contact Us</Link></h1>
                </div>



              </div>
          
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

{
  /* 
Old Navbar


 // Use this code if the topbar is to change based on the scroll position
  // const [atTop, setAtTop] = useState(true);

  // const handleScroll = () => {
  //   if (window.scrollY < 200) {
  //     setAtTop(true);
  //   } else {
  //     setAtTop(false);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  // })

<nav className="px-4 z-50 h-auto flex md:flex-wrap flex-col md:flex-row items-center bg-white text-mcgill-red fixed w-full top-0">
    <div className="ml-5 h-10 hover:cursor-pointer">
      <Link href="/">
        <img src="mcgill-igem-logo.png" alt="McGill IGEM Logo" className="h-full w-full" />

      </Link>
    </div>

  </nav>


    <div className="py-1 ml-auto group flex justify-center hover:shadow">
      <div className="hover:text-mcgill-mahogany px-4 py-2 hover:shadow">
        <Link href="/test">About Us</Link>
      </div>
      
      <div className="group-hover:block absolute h-auto mt-10 hidden">
        <ul className="block w-full bg-white hover:shadow">
          <li className="px-6 py-2 hover:shadow">
            <div className="hover:text-mcgill-mahogany">
              <Link href="/test">Team</Link>
            </div>
          </li>
          <li className="px-6 py-2 hover:shadow">
            <div className="hover:text-mcgill-mahogany">
              <Link href="/test">Impact</Link>
            </div>
          </li>
          <li className="px-6 py-2 hover:shadow">
            <div className="hover:text-mcgill-mahogany">
              <Link href="/test">Join Us</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="px-4 py-3 hover:shadow hover:text-mcgill-mahogany">
      <Link href="/test">Projects</Link>
    </div>
    <div className="py-1 group flex justify-center hover:shadow">
      <div className="hover:text-mcgill-mahogany px-4 py-2 hover:shadow">
        <Link href="/test">Partners</Link>
      </div>

      <div className="group-hover:block absolute h-auto mt-10 hidden">
        <ul className="block w-full bg-white hover:shadow">
          <li className="px-6 py-2 hover:shadow">
            <div className="hover:text-mcgill-mahogany">
              <Link href="/test">Sponsors</Link>
            </div>
          </li>
          <li className="px-6 py-2 hover:shadow">
            <div className="hover:text-mcgill-mahogany">
              <Link href="/test">Partner with Us</Link>
            </div>
          </li>
          <li className="px-6 py-2 hover:shadow">
            <div className="hover:text-mcgill-mahogany">
              <Link href="/test">Collaborations</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="px-4 py-3 hover:shadow hover:text-mcgill-mahogany">
      <Link href="/test">News</Link>
    </div>
    <div className="px-4 py-3 hover:shadow hover:text-mcgill-mahogany">
      <Link href="/test">Contact Us</Link>
    </div>

*/
}
