import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Gnb from "@/components/Gnb";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathname = router && router.pathname;
  const path = pathname === "/" ? "home" : pathname.replace("/", "");
  return (
    <>
      <Gnb path={path} />
      <Component {...pageProps} />
    </>
  );
}
