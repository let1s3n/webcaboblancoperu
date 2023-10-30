// import App from 'next/app'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SSRProvider from "react-bootstrap/SSRProvider";

import "../sass/app.scss";

import Default from "../components/layout/DefaultLayout/DefaultLayout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);
  return (
    <Default>
      <Component {...pageProps} />
    </Default>
  );
}
export default MyApp;
