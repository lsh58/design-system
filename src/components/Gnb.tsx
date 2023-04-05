import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  path?: string;
}

const pages: { title: string; link: string }[] = [
  { title: "Overview", link: "overview" },
  { title: "Foundations", link: "foundations" },
  { title: "Components", link: "components" },
  { title: "Templates", link: "templates" },
];

const Gnb = (props: Props) => {
  const { path } = props;
  return (
    <div className="flex justify-between w-full px-5 py-[18px] items-center">
      <div className="flex items-center">
        <Image src="/images/logo.svg" width={64} height={64} alt={""} />
        <p className="text-gdsTypescale300 font-gdsTypescaleWeightBold">
          Design System
        </p>
      </div>
      <ul className="hidden gap-8 sm:flex">
        {pages.map((page, index) => (
          <li
            key={index}
            className={`font-gdsTypescaleWeightBold transition duration-300 text-gdsLightColorTextAssistant text-gdsTypescale200 hover:text-gdsLightColorTextInteractive ${
              path && path.includes(page.link)
                ? "text-gdsLightColorTextInteractive"
                : ""
            }`}
          >
            <Link href={"/" + page.link}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gnb;
