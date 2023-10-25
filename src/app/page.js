import Image from "next/image";
import ArticleCardList from "./Componenets/ArticleCardList/ArticleCardList";
import NavBar from "./Componenets/Bar/NavBar";
import Header from "./Componenets/Bar/Header";
import FooterBar from "./Componenets/Bar/FooterBar";
import HotNews from "./Componenets/HotNews";
import React from "react";
import MainCard from "./Componenets/Card/MainCard";

export default function Home() {
  
  return (
    <div className="flex bg-white min-h-screen flex-col items-center">

      {/* Nav Bar Section */}
        <NavBar/>

      {/* Hero Section */}

      {/* <AutoShowNews/> */}
      
      {/* Header Section */}
        <Header/>
      
      {/* Hero Section */}

      {/* Hot News Section */}
        <HotNews/>

      {/* Special News Section */}
      <div class="grid mb-8 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 mt-4">
      <MainCard>
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWIXE-SG7mRMral4srrWCUMhchgEfVY27PIORWYg5t950LxNon90rupsO9sVr_A7OHftA&usqp=CAU" alt=""/>
          <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-dark-900 dark:text-gray-400">Noteworthy technology acquisitions 2021</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <h1 class="mb-2 text-2xl font-bold tracking-tight text-dark-900 dark:text-gray-400">Click to More News</h1>
          </div>
      </MainCard>

      <MainCard>
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWIXE-SG7mRMral4srrWCUMhchgEfVY27PIORWYg5t950LxNon90rupsO9sVr_A7OHftA&usqp=CAU" alt=""/>
          <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-dark-900 dark:text-gray-400">Noteworthy technology acquisitions 2021</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <h1 class="mb-2 text-2xl font-bold tracking-tight text-dark-900 dark:text-gray-400">Click to More News</h1>
          </div>
      </MainCard>
      </div>
      
      {/* End Special News Section */}

        <ArticleCardList />
      {/* End Hero Section */}

      {/* FooterBar Section */}
        <FooterBar/>
      
    </div>
  );
}
