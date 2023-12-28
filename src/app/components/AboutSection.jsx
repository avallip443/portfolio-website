"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-none pl-2 text-lg text-[#dedede]">
        <li>
          <span className="text-white font-bold">Front-End: </span>HTML, CSS,
          JavaScript
        </li>
        <br />
        <li>
          <span className="text-white font-bold">Back-End: </span>Python, Java,
          C, C++, Perl, PHP, Ruby, Unix, Linux, Bash, Lisp, MySQL, R, Apache,
          Firebase
        </li>
        <br />
        <li>
          <span className="text-white font-bold">
            Frameworks, libraries, & APIs:{" "}
          </span>
          Node.js, React.js, Next.js, Tailwind CSS, Bootstrap, jQuery, Flutter,
          Matplotlib, NumPy, Pandas
        </li>
        <br />
        <li>
          <span className="text-white font-bold">Tools & Technologies: </span>
          Git, GitHub, Docker, Jupyter Notebook, MS Office,
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-none pl-2 text-lg text-[#dedede]">
        <li>
          <h3 className="text-white font-bold">
            Toronto Metropolitan University
          </h3>
          <p className="text-[#dedede]">
            Honours Bachelor of Science, Computer Science <br />
          </p>
          <p className="ml-6">
            <em>GPA: </em>4.13/4.33 <br />
            <em>2022-Present</em> <br />
            <em>Dean's List:</em> 2022-2023 <br />
            <em>Activities:</em> Google Developer Student Clubs TMU, Women in
            Computer Science (WiCS)
          </p>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="mb-[4rem]" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-6 px-4 xl:gap-16 xl:px-16">
        <Image
          src="/images/profile-picture.png"
          width={420}
          height={420}
          className="rounded-3xl border-[20px] border-double border-[#133034]"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-[#C5B6F1] mb-4">
            {"> about me"}
          </h2>
          <p className="text-[#dedede] text-lg">
            I am currently a{" "}
            <span className="font-extrabold">
              computer science co-op student
            </span>{" "}
            at{" "}
            <span className="text-[#C5B6F1] font-extrabold">
              Toronto Metropolitan University
            </span>{" "}
            (formerly Ryerson). With almost{" "}
            <span className="font-extrabold">5 years of experience</span>{" "}
            programming, I am currently interested in{" "}
            <span className="text-[#C5B6F1] font-extrabold">
              Summer and Fall 2024 internship opportunities
            </span>
            . <br />
            <br />
            Recently, I have been developing my skills in both web development
            and data science. I'm also looking forward to taking software
            engineering, discrete structures, operating systems, and comparative
            programming languages courses. <br />
            <br />
            In my spare time, I enjoy reading novels, graphic design,
            crocheting, and staying involved in my community!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
