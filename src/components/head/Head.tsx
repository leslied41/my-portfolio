import React from "react";
import { Helmet } from "react-helmet";

interface Props {}

const Head = (props: Props) => {
  return (
    <div>
      <Helmet>
        <title>Leslie's Portfolio</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../../../public/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../../../public/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../../../public/favicon-16x16.png"
        />
        <link rel="manifest" href="../../../public/site.webmanifest"></link>
        <meta name="title" content="Leslie's Portfolio" />
        <meta
          name="description"
          content="Web Developer Leslie Duan's personal portfolio website, demonstrating Font-End, Back-End, Full-Stack, React, Javascript, Typescript, Node.js skills."
        />
        <meta
          name="keywords"
          content="portfolio website, web developer,  front-end, back-end, full-stack, reactjs, javascript"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Zhonghui Duan" />
      </Helmet>
    </div>
  );
};
export default Head;
