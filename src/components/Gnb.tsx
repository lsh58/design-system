import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

const categories: Component.Category[] = [
  { id: "overview", title: "Overview", link: "/overview" },
  { id: "foundations", title: "Foundations", link: "/foundations/color" },
  { id: "components", title: "Components", link: "/components" },
  { id: "templates", title: "Templates", link: "/templates" },
];

const Gnb = (props: Component.Nav) => {
  const { pathname } = props;

  const basePath = pathname && pathname.split("/")[1];

  return (
    <div className="flex items-center justify-between w-full px-gdsSpacing250 py-gdsSpacing200">
      <h1 className="flex items-center text-gdsTypescale300 font-gdsTypescaleWeightBold">
        <Image src="/images/logo.svg" width={64} height={64} alt={""} />
        Design System
      </h1>
      <ul className="hidden gap-gdsSpacing800 sm:flex">
        {categories.map((category) => (
          <li
            key={category.id}
            className={classNames(
              "font-gdsTypescaleWeightBold transition duration-300 text-gdsLightColorTextAssistant text-gdsTypescale200 hover:text-gdsLightColorTextInteractive",
              {
                "!text-gdsLightColorTextInteractive": basePath === category.id,
              }
            )}
          >
            {category.link && (
              <Link href={category.link}>{category.title}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gnb;
