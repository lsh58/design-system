import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex justify-between w-full px-8 py-6 border-b">
      <div className="flex gap-16">
        <p className="text-xl font-bold">LOGO</p>
        <ul className="flex gap-4">
          <li>
            <Link href="/">OVERVIEW</Link>
          </li>
          <li>
            <Link href="/foundations">FOUNDATIONS</Link>
          </li>
          <li>
            <Link href="/components">COMPONENTS</Link>
          </li>
          <li>
            <Link href="/templates">TEMPLATES</Link>
          </li>
        </ul>
      </div>
      <div>
        <p>search</p>
      </div>
    </div>
  );
};

export default NavBar;
