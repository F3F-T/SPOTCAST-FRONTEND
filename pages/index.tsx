import React from "react";
import Footer from "../src/components/main/Footer";
import Header from "../src/components/main/Header";
import Carousel from "../src/components/main/Carousel";
import MainArticle1 from "../src/components/main/section/hotPortfolio";
import MainArticle3 from "../src/components/main/section/communityPreview";
import MainArticle2 from "../src/components/main/section/findCrew";

export default function Page() {
  return (
    <div>
      <Header />
      <Carousel />
      <MainArticle1 />
      <MainArticle2 />
      <MainArticle3 />
      <Footer />
    </div>
  );
}