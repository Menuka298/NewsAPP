import React from "react";

function ArticleCard(props) {
  return (
    <div>
      <a
        href={props.pageurl}
        class="m-2 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        {props.children}
      </a>
    </div>
  );
}

export default ArticleCard;
