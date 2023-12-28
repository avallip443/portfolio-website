import React from "react";
import { CodeIcon, EyeIcon } from "@heroicons/react/outline";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  skills,
  gitUrl,
  previewUrl,
}) => {
  return (
    <div className="group">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          {previewUrl !== "/" && (
            <Link
              href={previewUrl}
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>
      <div className="text-white font-semibold rounded-b-xl bg-[#133034] py-6 px-4 transition-all group-hover:bg-[#254246]">
        <h5 className="text-xl font-bold">{title}</h5>
        <p className="text-sm text-[#dedede]">
          <br />
          {description}
        </p>
        <p className="text-sm text-[#dedede] italic">
          <br />
          {skills}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
