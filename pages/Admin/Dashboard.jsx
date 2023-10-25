import React from "react";
import "../main.css";
import MainCard from "./Layouts/MainCard";
import AdminNavBar from "@/app/Componenets/Bar/AdminNavBar";

function Dashboard() {
  return (
    <div className="flex bg-white min-h-screen flex-col">
      {/* AdminNavBar */}
      <AdminNavBar />
      {/* AdminNavBar */}

      <div className="flex bg-white max-h-screen flex-col items-center mt-8">
        {/* <Label Labelname='Main News'/> */}
        <h class="text-2xl font-bold tracking-tight text-gray-900 dark:text-dark">
          Admin Section
        </h>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mt-2">
          <div class="grid gap-4">
            <div>
              <MainCard
                pageurl="../../Admin/AddNews"
                NewsCardName="Add Articles"
              ></MainCard>
              <MainCard
                pageurl="../../Admin/ArticlesTable"
                NewsCardName="Articles"
              >
                <h1>Articles</h1>
              </MainCard>
            </div>
          </div>

          <div class="grid gap-4">
            <div>
              <MainCard
                pageurl="../../Admin/AddAdsHotnews"
                NewsCardName="Add Ads"
              ></MainCard>

              <MainCard
                pageurl="../../Admin/AdsTable"
                NewsCardName="Ads"
              ></MainCard>
            </div>
          </div>

          <div class="grid gap-4">
            <div>
              <MainCard
                pageurl="../../Admin/AddAdsHotnews"
                NewsCardName="Add Hot News"
              ></MainCard>
              <MainCard
                pageurl="../../Admin/HotNewsTable"
                NewsCardName="Hot News"
              >
                <h1>Hot News</h1>
              </MainCard>
            </div>
          </div>

          <div class="grid gap-4">
            <div>
              <MainCard pageurl="../../Admin/Comments" NewsCardName="Comments">
                <h1>Comments</h1>
              </MainCard>
              <MainCard
                pageurl="../../Admin/Register"
                NewsCardName="Admin Register"
              >
                <h1>Admin Register</h1>
              </MainCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
