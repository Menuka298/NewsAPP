import React from "react";
import ArticleCard from "../Card/ArticleCard";

function ArticleCardList() {
  return (
    <div className="p-2">
      <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
        <div class="grid gap-4">
          <ArticleCard pageurl="/Article">
            <h1>Hot News</h1>
          </ArticleCard>
        </div>

        <div class="grid gap-4">
          <ArticleCard pageurl="/Article">
            <h1>Education News</h1>
          </ArticleCard>
        </div>

        <div class="grid gap-4">
          <ArticleCard pageurl="/Article">
            <h1>Politics News</h1>
          </ArticleCard>
        </div>

        <div class="grid gap-4">
          <ArticleCard pageurl="/Article">
            <h1>Internatinaol News</h1>
          </ArticleCard>
        </div>

        <div class="grid gap-4">
          <ArticleCard pageurl="/Article">
            <h1>Local News</h1>
          </ArticleCard>
        </div>

        <div class="grid gap-4">
          <ArticleCard pageurl="/Article">
            <h1>Sports News</h1>
          </ArticleCard>
        </div>
      </div>
    </div>
  );
}

export default ArticleCardList;
