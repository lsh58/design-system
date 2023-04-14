import React from "react";
import { useRouter } from "next/router";
import pages from "./pages";
import Icon from "@/components/common/Icon";

const Header = () => {
  const router = useRouter();
  const pathname = router && router.pathname;

  /** pages에서 현재 페이지의 정보 찾기 */
  const getPageInfo = () => {
    let targetPage: Component.Page | undefined;
    const searchPages = (pages: Component.Page[]) => {
      for (const page of pages) {
        if (page.link === pathname) {
          targetPage = page;
        }
        if (page.pages) {
          searchPages(page.pages);
        }
      }
    };
    for (const category of pages) {
      if (category.link === pathname) {
        targetPage = category;
      }
      if (category.pages) {
        searchPages(category.pages);
      }
    }
    return targetPage;
  };

  const currentPage = getPageInfo();

  return (
    <>
      {currentPage && (
        <div className="flex flex-col px-gdsSpacing500 py-gdsSpacing400">
          <ul className="flex gap-gdsSpacing050">
            {currentPage.path?.map((path, index) => {
              if (currentPage.path && index !== currentPage.path.length - 1) {
                return (
                  <li key={index} className="flex items-center">
                    {path} <Icon size="gdsIconSizeSm" name="ChevronRightMD" />
                  </li>
                );
              } else {
                return <li key={index}>{path}</li>;
              }
            })}
          </ul>
          <p className="font-typefaceBrand text-gdsTypescale900 font-gdsTypescaleWeightBold">
            {currentPage.title}
          </p>
        </div>
      )}
    </>
  );
};

export default Header;
