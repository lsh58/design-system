import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Gnb from "@/components/Gnb";
import Snb from "@/components/Snb";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathname = router && router.pathname;

  useEffect(() => {
    /** overview 첫페이지를 홈으로 임시 사용, index페이지를 사용한다면 제거 예정 */
    const redirectHome = async () => {
      if (pathname === "/") {
        try {
          await router.replace("/overview");
        } catch (error) {
          console.error(error);
        }
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    redirectHome();
  }, [pathname, router]);

  return (
    <>
      <Gnb pathname={pathname} />
      <div className="flex">
        <Snb pathname={pathname} />
        <Component {...pageProps} />
      </div>
    </>
  );
}
