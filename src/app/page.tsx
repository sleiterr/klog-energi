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

import { Status } from "./utils/statusLabels";
import OpenModal from "./components/Table/open-modal";

export default function Home() {
  const projects = [
    {
      id: 1,
      projekt: "Thor Havvindmøllepark",
      lokation: "Thorsminde",
      type: true,
      aktorer: ["RWE", "Vattenfall", "Thorsminde Havn"],
      status: Status.Pending,
    },
    {
      id: 2,
      projekt: "Projekttitel",
      lokation: "Bynavn",
      type: false,
      aktorer: ["Aktørnavn"],
      status: Status.Active,
    },
    {
      id: 3,
      projekt: "Projekttitel",
      lokation: "Bynavn",
      type: false,
      aktorer: ["Aktørnavn"],
      status: Status.NotActive,
    },
    {
      id: 4,
      projekt: "Projekttitel",
      lokation: "Bynavn",
      type: false,
      aktorer: ["Aktørnavn"],
      status: Status.Pending,
    },
    {
      id: 5,
      projekt: "Projekttitel",
      lokation: "Bynavn",
      type: false,
      aktorer: ["Aktørnavn"],
      status: Status.NotActive,
    },
    {
      id: 6,
      projekt: "Projekttitel",
      lokation: "Bynavn",
      type: false,
      aktorer: ["Aktørnavn"],
      status: Status.Active,
    },
  ];

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <OpenModal projects={projects} />
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
