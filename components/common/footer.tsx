import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
  });

  return (
    <footer className="bg-black text-left font-montserrat text-white py-4 px-10 z-[100] text-sm">
      <div className="flex justify-end items-start mr mb-2">
        <div className="px-8 py-2">
          <h2 className="py-2 font-bold hover:underline hover:cursor-pointer">
            <a href="https://mcgilligem.substack.com/">News</a>
            
          </h2>
          <h2 className="font-bold hover:underline hover:cursor-pointer"><Link href="/contact">Contact Us</Link></h2>
        </div>
        <div className="px-8 py-2">
          <h2 className="py-2 font-bold hover:underline hover:cursor-pointer">
            Initiatives
          </h2>
          <ul className="">
            <li className="hover:underline hover:cursor-pointer"><a href="https://open.spotify.com/show/566xfBOfyIhNnNVNsjVHjz?si=8c4f83dca49343cb&nd=1">STEMcast</a></li>
            <li className="hover:underline hover:cursor-pointer"><Link href="https://igemontheverge.wixsite.com/home">Conference: OnTheVerge 2024</Link></li>
            <li className="hover:underline hover:cursor-pointer"><Link href="https://www.youtube.com/channel/UCwqaOp6Mkj4Ekhd9QRchd6w">Synbio Collective</Link></li>
            <li className="hover:underline hover:cursor-pointer"><Link href="/synbiosis_call_for_artists">Synbiosis: Call For Artists</Link></li>
            <li className="hover:underline hover:cursor-pointer"><Link href="https://igemsynbiosis.wixsite.com/home">Synbiosis: The Exhibition</Link></li>
            <li className="hover:underline hover:cursor-pointer"><Link href="https://mcgilligem.substack.com/">Blog</Link></li>
          </ul>
        </div>
        <div className="px-8 py-2">
          <h2 className="py-2 font-bold hover:underline hover:cursor-pointer">
           Projects
          </h2>
          <ul className="">
            <li className="hover:underline hover:cursor-pointer"><Link href="/2024">2024</Link></li>
            <li className="hover:underline hover:cursor-pointer"><Link href="/2023">2023</Link></li>
            <li className="hover:underline hover:cursor-pointer"><Link href="/2022">2022</Link></li>
            
          </ul>
        </div>
        <div className="px-8 py-2">
          <h2 className="py-2 font-bold hover:underline hover:cursor-pointer">
            Partners
          </h2>
          <ul className="">
            <li className="hover:underline hover:cursor-pointer"><Link href="/sponsors">Sponsors</Link></li>
            <li className="hover:underline hover:cursor-pointer">
              <Link href="/partner">Partner with us</Link>
            </li>
            <li className="hover:underline hover:cursor-pointer">
              {/*<Link href="/collaborators">Collaborations</Link>*/}
            </li>
          </ul>
        </div>
        <div className="px-8 py-2">
          <h2 className="py-2 font-bold hover:underline hover:cursor-pointer">
            About Us
          </h2>
          <ul className="">
            <li className="hover:underline hover:cursor-pointer"><Link href="/about">Our Team</Link></li>
            <li className="hover:underline hover:cursor-pointer"><Link href="/mission">Our Mission</Link></li>
            <li className="hover:underline hover:cursor-pointer"><Link href="/join">Join Us</Link></li>
          </ul>
        </div>
      </div>
      {/* <hr /> */}
      <div ref={titleRef} className="flex items-center flex-row py-10 px-5">
        <div>
          <p>&#169;McGill IGEM 2025</p>
        </div>
        <p className="ml-auto pr-2">Follow Us:</p>
        <div className="hover:scale-125 loadLeft">
          {titleInView && <SocialIcon
         
            url="https://twitter.com/igemmcgill"
            fgColor="white"
            bgColor="transparent"
          />}
        </div>
        <div className="hover:scale-125 ">
          <SocialIcon
            url="https://www.instagram.com/igem.mcgill/"
            fgColor="white"
            bgColor="transparent"
          />
        </div>
        <div className="hover:scale-125">
          <SocialIcon
            url="https://www.linkedin.com/company/mcgill-igem"
            fgColor="white"
            bgColor="transparent"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
