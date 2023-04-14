import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Gnb from "@/components/Gnb";
import Snb from "@/components/Snb";
import Header from "@/components/Header";

export default function App({ Component, pageProps }: AppProps) {
  //middleware로
  // useEffect(() => {
  //   /** overview 첫페이지를 홈으로 임시 사용, index페이지를 사용한다면 제거 예정 */
  //   const redirectHome = async () => {
  //     if (pathname === "/") {
  //       try {
  //         await router.replace("/overview");
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //   };
  //   // eslint-disable-next-line @typescript-eslint/no-floating-promises
  //   redirectHome();
  // }, [pathname, router]);

  return (
    <>
      <Gnb />
      <div className="flex">
        <Snb />
        <div className="flex flex-col">
          <Header />
          <div className="px-gdsSpacing500">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  );
}
