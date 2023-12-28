"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Kumon",
    id: "kumon",
    content: (
      <div>
        <h3 className="text-white font-extrabold text-2xl">
          Math & English Tutor @{" "}
          <span className="text-[#C5B6F1]">Kumon Math & Reading Center</span>
        </h3>
        <p className="mb-5 text-base">JUL 2022 - PRESENT</p>
        <ul className="list-disc pl-2 text-lg text-[#dedede]">
          <li>
            Facilitated an engaging and supportive learning environment for
            students, tailoring teaching methods and education plans to
            accommodate diverse learning styles
          </li>
          <br />
          <li>
            Managed administrative tasks including parent communication,
            scheduling, and organization of students' weekly learning plans,
            progress reports, and material
          </li>
          <br />
          <li>
            Monitored student progress closely to identify areas of improvement
            and implementing targeted strategies to address individualized
            challenges in collaboration with fellow teaching assistants
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Agincourt Collegiate Institute",
    id: "aci",
    content: (
      <div>
        <div>
          <h3 className="text-white font-extrabold text-2xl">
            Senior Yearbook Editor @{" "}
            <span className="text-[#C5B6F1]">
              Agincourt Collegiate Institute
            </span>
          </h3>
          <p className="mb-5 text-base">JUL 2021 - JUN 2022</p>
          <ul className="list-disc pl-2 text-lg text-[#dedede]">
            <li>
              Lead and supported a dynamic team of 35+ writers, photographers,
              and designers to publish and distribute 700 copies of a 144-page
              yearbook
            </li>
            <br />
            <li>
              Facilitated seamless communication and coordination among team
              members and school groups, establishing weekly and monthly goals
              and supervising all facets of content gathering, designing, and
              editing
            </li>
            <br />
            <li>
              Organized and executing yearbook-related events including
              photoshoots, recruiting and training team members, and promotional
              initiatives for sales
            </li>
            <br />
            <li>
              Demonstrated mastery of time management skills by consistently
              meeting tight deadlines without compromising quality of final
              product
            </li>
            <br />
          </ul>
        </div>
        <div>
          <h3 className="text-white font-extrabold text-2xl">
            Junior Yearbook Editor @{" "}
            <span className="text-[#C5B6F1]">
              Agincourt Collegiate Institute
            </span>
          </h3>
          <p className="mb-5 text-base">JUL 2020 - JUN 2021</p>
          <ul className="list-disc pl-2 text-lg text-[#dedede]">
            <li>
              Directed team of 5 editors to layout and design 24 impactful pages
              in a 128-page yearbook
            </li>
            <br />
            <li>
              Collaborated closely with the senior editoral team, actively
              contributing to the organization and execution of yearbook-related
              inititives
            </li>
            <br />
            <li>
              Fostered seamless communication between various section editorial
              groups navigating the challenges of a primarily-online school
              experience
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];

const ExperienceSection = () => {
  const [tab, setTab] = useState("kumon");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="mb-[4rem]" id="experience">
      <div className="items-center py-6 px-4 xl:gap-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-[#C5B6F1] mb-4">
            {"> experience"}
          </h2>
          <div className="flex flex-row justify-start">
            <TabButton
              selectTab={() => handleTabChange("kumon")}
              active={tab === "kumon"}
            >
              {" "}
              kumon{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("aci")}
              active={tab === "aci"}
            >
              {" "}
              agincourt collegiate institute{" "}
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

export default ExperienceSection;
