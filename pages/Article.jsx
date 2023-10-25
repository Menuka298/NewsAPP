import React, { useEffect, useState } from "react";
import "./main.css";
import NavBar from "@/app/Componenets/Bar/NavBar";
import Header from "@/app/Componenets/Bar/Header";
import axios from "axios";
import ArticleCard from "@/app/Componenets/Card/ArticleCard";
import HotNews from "@/app/Componenets/HotNews";

function Article() {
  const [news, setnews] = useState([]);

  useEffect(() => {
    getnews();
  }, []);

  const getnews = async () => {
    try {
      const response = await axios.get("http://localhost:5000/newsroute/view");
      setnews(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const [HotNewsAds, setHotNewsAds] = useState([]);

  useEffect(() => {
    getHotNewsAds();
  }, []);

  const getHotNewsAds = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/AdsandNewsroute/view"
      );
      setHotNewsAds(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex bg-white min-h-screen flex-col items-center">
      {/* Nav Bar Section */}
      <NavBar />
      {/* End Nav Bar Section */}

      {/* Header Bar Section */}
      <Header />
      {/* End Header Bar Section */}

      {/* News Section */}

      {HotNewsAds.map((HotNewsAds) => (
        <marquee className="mb-2" velocity={25}>
          <div className="font-normal text-gray-700 dark:text-gray-400"></div>
          <h1>{HotNewsAds.description}</h1>
        </marquee>
      ))}

      <div class="grid mb-8 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 mt-4">
        {news.map((news) => (
          <ArticleCard pageurl="/NewsPreview">
            <h1>{news.newstype}</h1>
            <h1>{news.newstitle}</h1>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt=""
            />
            <p>{news.newsdescription}</p>
          </ArticleCard>
        ))}
      </div>
    </div>
  );
}

export default Article;
