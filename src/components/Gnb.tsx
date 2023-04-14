import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { useRouter } from "next/router";
import pages from "./pages";

const Gnb = () => {
  const router = useRouter();
  const pathname = router && router.pathname;

  const basePath = pathname && pathname.split("/")[1];

  return (
    <div className="flex items-center justify-between w-full px-gdsSpacing250 py-gdsSpacing200">
      <h1 className="flex items-center text-gdsTypescale300 font-gdsTypescaleWeightBold">
        <Image src="/images/logo.svg" width={64} height={64} alt={""} />
        Design System
      </h1>
      <ul className="hidden gap-gdsSpacing800 sm:flex">
        {pages.map((page) => (
          <li
            key={page.id}
            className={classNames(
              "font-gdsTypescaleWeightBold transition duration-300 text-gdsLightColorTextAssistant text-gdsTypescale200 hover:text-gdsLightColorTextInteractive",
              {
                "!text-gdsLightColorTextInteractive": basePath === page.id,
              }
            )}
          >
            {page.link && <Link href={page.link}>{page.title}</Link>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gnb;
