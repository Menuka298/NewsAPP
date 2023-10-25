import React from "react";

function ArticleHeading(props) {
  return (
    <div>
      <div class="bg-white dark:bg-slate-800 rounded-lg px-3 py-4 ring-1 ring-slate-900/5 shadow-xl mt-2 mb-2">
        {props.children}
      </div>
    </div>
  );
}

export default ArticleHeading;
