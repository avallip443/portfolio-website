"use client";
import React, { useState } from "react";
import NavLink from "./Navlink";
import { MenuIcon, XCircleIcon, MailIcon } from "@heroicons/react/outline";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "home",
    path: "#home",
  },
  {
    title: "about",
    path: "#about",
  },
  {
    title: "experience",
    path: "#experience",
  },
  {
    title: "projects",
    path: "#projects",
  },
];

const socialLinks = [
  {
    title: "GitHub",
    url: "https://github.com/avallip443",
    imageSrc: "/images/github-icon.svg",
    altText: "GitHub Icon",
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/arathi-vallipuranathan/",
    imageSrc: "/images/linkedin-icon.svg",
    altText: "Linkedin Icon",
  },
  {
    title: "Email",
    url: "mailto:avallipuranathan@gmail.com",
    customIcon: <MailIcon className="h-9 w-9" />,
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed container mx-auto top-0 left-0 right-0 z-10 px-16 bg-[#050F1F]">
      <div className="flex container lg:py-4 items-center justify-between mx-auto px-4 py-2">
        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            {navbarOpen ? (
              <XCircleIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
        <div
          className="menu hidden md:flex md:flex-wrap md:w-full md:justify-between"
          id="navbar"
        >
          <ul className="flex gap-x-4 items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
          <ul className="flex gap-x-4 items-center ml-auto">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  {link.customIcon ? (
                    <span className="mr-2">{link.customIcon}</span>
                  ) : (
                    <img
                      src={link.imageSrc}
                      alt={link.altText}
                      className="w-8 h-8"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
