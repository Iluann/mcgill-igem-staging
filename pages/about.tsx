import Link from "next/link";
import Image from "next/image";
import Person from "../components/about/person";
import type { NextPage } from "next";
import { useState } from "react";


interface TeamMember {
  name: string;
  role?: string;
}

interface TeamMembersByYear {
  [year: number]: {
    [section: string]: TeamMember[];
  };
}

const About: NextPage = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2024);

  const handleYearChange = (year: number) => {
      setSelectedYear(year);
  };

  const teamMembersByYear: TeamMembersByYear = {
    2022: {
      leadership: [
        { name: "Jesse Lee" },
        { name: "Albert Nitu" },
        { name: "Hanwen Wang" },
        { name: "Anna Li" },
        { name: "Thomas Lai" },
        { name: "Chandler Ochs" },
        { name: "Dan Voicu" },
        { name: "Hyerin Kim" },
        { name: "Emily Martin" },
        { name: "Justin Kashi" },
      ],
      wetLab: [
        { name: "Jade Tong" },
        { name: "Elliott Cole" },
        { name: "Jonathan Cheng" },
        { name: "Rylan Donohoe" },
        { name: "Mysha Ibnat" },
        { name: "Huanyi Zhang" },
        { name: "Stephen Lu" },
      ],
      dryLab: [
        { name: "Huilin Liang" },
        { name: "Anita Kriz" },
        { name: "Jessica Zhu" },
        { name: "Kingsley Zhong" },
      ],
      graduateAdvisors: [
        { name: "Ansley Gnanapragasam" },
        { name: "Faiz Hussain" },
        { name: "Christien Dykstra" },
        { name: "Clara MacMahon" },
        { name: "Eduardo Cepeda-Canedo" },
        { name: "Smriti Suresh" },
        { name: "Ilhem Chaima Bousbiat" },
      ],
    },
    2023: {
      leadership: [
        { name: "Dan Voicu", role: "Executive Director" },
        { name: "Albert Nitu", role: "Executive Director" },
        { name: "Emily Martin", role: "Human Practices" },
        { name: "Henry Stephenson", role: "Director of Finance" },
        { name: "Isabelle Guo", role: "Media and Outreach" },
        { name: "Megan Farrow", role: "Director of Operations" },
        { name: "Elliot Cole", role: "Wet Lab" },
        { name: "Jonas Lehar", role: "Wet Lab" },
        { name: "Ben Segall", role: "Dry Lab" },
        { name: "Jen Tram Su", role: "Dry Lab" }
      ],
      wetLab: [
        { name: "Owen Tang"},
        { name: "Angela Zhu"},
        { name: "Kaya Risch"},
        { name: "Julia Forsey"},
        { name: "Olivia Lopardo"},
        { name: "Hyerin Kim"}
      ],
      dryLab: [
        //{ name: "Pilar DaRonco"},
        //{ name: "Elya Renom"},
        { name: "Signe Hoel"}
      ],
      humanPractices: [
        { name: "Mia Bhatia"},
        //{ name: "Michael Weldon"}
      ],
      /*graduateAdvisors: [
        { name: "Jean-Alexandre Bureau"},
        { name: "James Manalad"},
        { name: "Asia Vighi"},
        { name: "Faiz Hussain"},
        { name: "Larsen Iorgovits"},
        { name: "Miranda Medeiros"},
        { name: "Eduardo Cepeda-Cañedo"},
        { name: "Joan Miguel Romero"}
      ]*/
    },

    2024: {
      leadership: [
        { name: "Isabelle Guo", role: "Team Co-Lead" },
        { name: "Laura Hebert", role: "Team Co-Lead, Wet Lab Co-Lead"},
        { name: "Lesley Zhan", role: "Wet Lab Co-Lead"},
        { name: "Nicholas Da Costa-Bastidas", role: "Operations Lead"},
        { name: "Ali Najjar", role: "Dry Lab Lead"},
        { name: "Mia Bhatia", role: "Human Practices Lead, Education Lead"},
        { name: "Sabrina Du", role: "Entrepreneurship Lead"},
        { name: "Kohan Ketch", role: "Finance Lead"},
        { name: "Sofian Martinais", role: "Outreach Lead"},
        { name: "Chloe Wei", role: "Media Lead"},
      ],

      wetLab: [
        { name: "Lucas Elliott"},
        { name: "Laurianne Daoust"},
        { name: "Jung Hao Cau"},
        { name: "Sophia Chen"},
        { name: "Yaman Al Janaideh"},
        { name: "Tomos Salathiel"},
        { name: "Alexa Truong"},
        { name: "Yuman Jiang"},
        { name: "Alex Jung"},
        { name: "Ahoor Saleem"},
        { name: "Farha Fazal"},
        { name: "Gil Qin"},
        { name: "Siqi Mi"}
      ],

      dryLab: [
        { name: "Angela Zhu"},
        { name: "Bokuan Li"},
        { name: "Hao Kang"},
        { name: "Michel Hijazin"},
        { name: "Seyla Wickramasinghe"},
        { name: "Serena Elzein"},
      ],
      webDev: [
        { name: "Kevin Liu"},
        { name: "Ariel-Wilkins Saintil"},
      ]
    },


  };
  
  const sections = Object.keys(teamMembersByYear[selectedYear]);

  return (
    <>
      <div className="bg-black text-white pt-20 px-20">
        <div className="mb-15">
          <div className="py-10 capitalize font-signika font-light tracking-tight text-3xl">
            ABOUT US
          </div>
          <div className="capitalize font-signika font-medium tracking-tight text-8xl -mt-5">
            OUR TEAM
          </div>
          <div className="py-10 capitalize font-mono font-bold tracking-tight text-l">
            <span className="text-mcgill-red">
              <Link href="/">HOME </Link>
            </span>
            / ABOUT US / OUR TEAM /
            <select
              className="hover:cursor-pointer py-1 px-2 rounded-md text-white outline:none focus:outline-none bg-black"
              value={selectedYear}
              onChange={(e) => handleYearChange(Number(e.target.value))}
            >
              {Object.keys(teamMembersByYear).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
        
      </div>

      <div className="pl-20 bg-black">
        <div className="bg-black text-white py-16 pr-10">
          <div className="text-right w-full font-mono px-2 pb-4 text-3xl border-b-2 border-mcgill-red">{selectedYear}</div>
          {sections.map((section) => {
            const formattedSection = section
            .replace(/([A-Z])/g, ' $1') // Insert space before capital letters
            .trim() // Remove leading space
            .toLowerCase(); // Convert to lowercase
      
            return (
            <div key={section}>
              <div className="font-mono font-bold text-left uppercase text-4xl py-4">
                {formattedSection}
              </div>
              <div className="grid grid-cols-5 gap-2">
                {teamMembersByYear[selectedYear][section].map((teamMember) => (
                  <Person alt={teamMember.name} key={teamMember.name} name={teamMember.name} img={`/team/${selectedYear}/${teamMember.name}.jpeg`} role={teamMember.role} />
                ))}
              </div>
            </div>
            );
                })}
        </div>
      </div>
      </>
  );
};

export default About;


// export async function getStaticProps() {}

export async function getStaticProps() {
  return {
    props: {},
  };
}