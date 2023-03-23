import React from "react";
import Link from "next/link";

const pages: { title: string; link: string }[] = [
  { title: "Foundations", link: "/foundations" },
  { title: "Components", link: "/components" },
  { title: "Templates", link: "/templates" },
];

const NavBar = () => {
  return (
    <div className="flex justify-between w-full px-8 py-6 border-b">
      <div className="flex gap-16">
        <p className="text-xl font-bold">LOGO</p>
        <ul className="hidden gap-8 sm:flex">
          {pages.map((page, index) => (
            <li
              key={index}
              className="font-bold text-gray-400 transition duration-300 text-l hover:text-black"
            >
              <Link href={page.link}>{page.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>search</p>
      </div>
    </div>
  );
};

export default NavBar;
