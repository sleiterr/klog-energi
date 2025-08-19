import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { About } from "./components/About/About";
import Debate from "./components/Debate/Debate";
import Profile from "./components/Profile/Profile";
import Featured from "./components/Featured/Featured";
import BannerCover from "./components/Banner/Cover";
import EnergyInfo from "./components/EnergyHubInfo/EnergyInfo";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Debate />
        <Profile />
        <Featured />
        <BannerCover />
        <EnergyInfo />
      </main>
      <Footer />
    </>
  );
}
