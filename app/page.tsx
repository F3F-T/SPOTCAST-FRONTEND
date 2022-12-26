"use client";

import React from "react";
import Footer from "../src/components/main/Footer";
import Header from "../src/components/main/Header";
import Carousel from "../src/components/main/Carousel";
import MainArticle1 from "../src/components/main/section/Hot-Potfolio";
import MainArticle3 from "../src/components/main/section/Community-Preview";

export default function Page() {
  return (
    <>
      <Header />
      <Carousel />
      <MainArticle1 />
      <MainArticle3 />
      <Footer />
    </>
  );
}
