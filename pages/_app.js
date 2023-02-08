import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The ToolKit</title>
        <meta
          name="deScription"
          content="The ToolKit is an online tool factory where you can get all tools you needed in one place. Every tool is designed to solve a problem with minimum number of steps to save time of the users and decrease the complexity of the operation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/3271/3271758.png"
        />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></Script>
      <Script src="https://rawcdn.githack.com/kousik19/foto.js/d604b02c69b6f037875bc4a3050b85d776dc4659/foto.js"></Script>
      <Script
        src="https://kit.fontawesome.com/5818d7bece.js"
        crossorigin="anonymous"
      ></Script>
      <Component {...pageProps} />
    </>
  );
}
