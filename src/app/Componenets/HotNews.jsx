import React from "react";

function HotNews() {
  return (
    <div>
      <marquee className="mb-2" velocity={25}>
        <div className="font-normal text-gray-700 dark:text-gray-400">
          <h1>
            {" "}
            Your content goes here Srilanka won the toss Srilanka won the toss
            Srilanka won the toss Srilanka won the toss Srilanka won the toss{" "}
          </h1>
        </div>
      </marquee>
    </div>
  );
}

export default HotNews;
