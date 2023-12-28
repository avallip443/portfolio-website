"use client";
import React from "react";
import { MailIcon } from "@heroicons/react/outline";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="min-h-[90vh] md:grid gap-8 items-center justify-center py-2 px-2 xl:gap-16 xl:px-16">
        <div className="col-span-8 place-self-center text-center">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            hi, i'm
            <span className="text-[#C5B6F1]"> arathi</span>!
          </h1>
          <div className="w-full flex justify-center">
            <p className="text-[#dedede] text-base w-1/2 sm:text-lg mb-6 lg:text-xl">
              I'm a computer science student at Toronto Metropolitan University.
              I have a great interest in full-stack development and data
              analytics and I am always open to new opportunities!
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Link href="mailto:avallipuranathan@gmail.com" target="_blank">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4  bg-[#C5B6F1] hover:bg-slate-200 text-black">
                <span className="flex font-extrabold text-lg">
                  <MailIcon className="h-7 w-7 mr-2" />
                  Say hi!
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
