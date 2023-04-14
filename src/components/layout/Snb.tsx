import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import pages from "./pages";

const Snb = () => {
  const router = useRouter();
  const pathname = router && router.pathname;
  const pathSplit = pathname && pathname.split("/");
  const basePath = pathSplit[1];

  const page = pages.find((page) => page.id === basePath);

  const openSubPage = (pages: Component.Page[]) => {
    return pages.some((page) => page.link == pathname);
  };

  return (
    <>
      {page && (
        <div className="w-[300px] h-[calc(100vh-100px)] py-gdsSpacing250 items-center">
          <ul className="hidden sm:flex sm:flex-col">
            <li className="py-gdsSpacing150 pl-gdsSpacing400">
              <p className="leading-normal text-gdsTypescale100 font-gdsTypescaleWeightBold">
                {page.title}
              </p>
            </li>
            {page.pages?.map((page) => (
              <li
                key={page.title}
                className={classNames(
                  "pl-gdsSpacing400 py-gdsSpacing150 transition duration-300 text-gdsLightColorTextPrimary text-gdsTypescale200 hover:!text-gdsColorLightTextAccent",
                  {
                    "!text-gdsColorLightTextAccent":
                      page.link === pathname ||
                      (page.pages && pathname.includes(page.link)),
                  }
                )}
              >
                <Link href={page.link}>{page.title}</Link>
                {page.pages && openSubPage(page.pages) && (
                  <ul className="sm:flex sm:flex-col">
                    {page.pages.map((page) => (
                      <li
                        key={page.title}
                        className={classNames(
                          "pl-gdsSpacing400 py-gdsSpacing150 transition duration-300 text-gdsLightColorTextPrimary text-gdsTypescale200 hover:!text-gdsColorLightTextAccent",
                          {
                            "!text-gdsColorLightTextAccent":
                              page.link === pathname,
                          }
                        )}
                      >
                        <Link href={page.link}>{page.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Snb;
