"use client";

import React from "react";
import Footer from "../src/components/main/Footer";
import Carousel from "../src/components/main/Carousel";
import MainArticle1 from "../src/components/main/section/hot-potfolio";
import MainArticle3 from "../src/components/main/section/community-preview";
import MainArticle2 from "../src/components/main/section/find-crew";

export default function Page() {
  return (
    <>
      <Carousel />
      <MainArticle1 />
      <MainArticle2 />
      <MainArticle3 />
      <Footer />
    </>
  );
}
