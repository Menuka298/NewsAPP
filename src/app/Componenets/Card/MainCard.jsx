import React from "react";
import Link from "next/link";

function MainCard(props) {
  return (
    <div>
      <Link
        href="/Article"
        class="m-4 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-white-100 dark:border-white-700 dark:bg-white-800 dark:hover:bg-white-700"
      >
        {props.children}
        {/* <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWIXE-SG7mRMral4srrWCUMhchgEfVY27PIORWYg5t950LxNon90rupsO9sVr_A7OHftA&usqp=CAU" alt=""/>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-dark-900 dark:text-gray-400">{props.name}</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <h1 class="mb-2 text-2xl font-bold tracking-tight text-dark-900 dark:text-gray-400">Click to More News</h1>
                </div> */}
      </Link>
    </div>
  );
}

export default MainCard;
