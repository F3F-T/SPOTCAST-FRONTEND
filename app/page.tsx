"use client";

import React from "react";
import Footer from "../src/components/main/footer";
import Carousel from "../src/components/main/carousel";
import MainArticle1 from "../src/components/main/section/hot-potfolio";
import MainArticle3 from "../src/components/main/section/community-preview";

export default function Page() {
  return (
    <>
      <Carousel />
      <MainArticle1 />
      <MainArticle3 />
      <Footer />
    </>
  );
}
