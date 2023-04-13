import React from "react";
import Link from "next/link";
import classNames from "classnames";

const categories: Component.Category[] = [
  {
    id: "overview",
    title: "Overview",
    pages: [
      { id: "overview", title: "Getting Start", link: "/overview" },
      {
        id: "designtoken",
        title: "Design Token",
        link: "/overview/designtoken",
      },
      { id: "changelog", title: "Change Log", link: "/overview/changelog" },
    ],
  },
  {
    id: "foundations",
    title: "Foundations",
    pages: [
      {
        id: "color",
        title: "Color",
        link: "/foundations/color",
        pages: [
          { id: "color", title: "Color Palette", link: "/foundations/color" },
          {
            id: "semantic",
            title: "Semantic Color",
            link: "/foundations/color/semantic",
          },
          { id: "dark", title: "Dark Mode", link: "/foundations/color/dark" },
        ],
      },
      {
        id: "typography",
        title: "Typography",
        link: "/foundations/typography",
      },
      {
        id: "icongraphy",
        title: "Icongraphy",
        link: "/foundations/icongraphy",
      },
      { id: "layout", title: "Layout", link: "/foundations/layout" },
      {
        id: "objectstyles",
        title: "Object Styles",
        link: "/foundations/objectstyles",
      },
    ],
  },
];

const Snb = (props: Component.Nav) => {
  const { pathname } = props;

  const pathSplit = pathname && pathname.split("/");

  const basePath = pathSplit[1];

  const category = categories.find((category) => category.id === basePath);

  const openDepth = (pages: Component.Page[]) => {
    return pages.some((page) => page.link == pathname);
  };

  return (
    <>
      {category && (
        <div className="w-[300px] h-[calc(100vh-100px)] py-gdsSpacing250 items-center">
          <ul className="hidden sm:flex sm:flex-col">
            <li className="py-gdsSpacing150 pl-gdsSpacing400">
              <p className="leading-normal text-gdsTypescale100 font-gdsTypescaleWeightBold">
                {category.title}
              </p>
            </li>
            {category.pages?.map((page) => (
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
                {page.pages && openDepth(page.pages) && (
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
