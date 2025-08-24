import Image from "next/image";

interface PersonProps {
  name: string;
  img: string;
  alt: string; // Add alt prop
  role?: string; // Add role prop
}

const Person = (props: PersonProps) => {
  return (
    <div className="group relative">
      <div className="h-full w-full">
        <Image
          src={props.img}
          alt={props.alt} // Add alt attribute
          width={258}
          height={350}
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="group-hover:block hidden transition-all absolute w-full hover:bg-gradient-to-b from-[rgba(237,27,47,0.2)] to-[rgba(237,27,47,0.5)] h-full translate-y-[-100%] left-0">
        <p className="text-sm px-8 -translate-x-5 font-mono font-semibold mt-1 translate-y-[40%] leading-[90%]">
          {props.name}
          <br></br>
          <br></br>   
          {props.role}
        </p>
      </div>
    </div>
  );
};

export default Person;
