import React from "react";
import "./main.css";
import NavBar from "@/app/Componenets/Bar/NavBar";
import Header from "@/app/Componenets/Bar/Header";

function About() {
  return (
    <div className="flex bg-white min-h-screen flex-col items-center">
      {/* Nav Bar Section */}
      <NavBar />
      {/* End Nav Bar Section */}

      {/* Header Section */}
      <Header />
      {/* End Header Section */}

      <h class="m-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-400">
        About Us
      </h>

      <p class="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo
        molestiae magnam illum nemo iure sunt officia numquam tempore. Totam,
        eum odit dignissimos quas sunt obcaecati animi quia aliquid. Autem sint
        ipsam blanditiis nobis cumque eius, necessitatibus repellendus quis
        minima natus nemo magnam ipsum debitis sit earum saepe, odio libero
        neque voluptatibus? Non odio saepe architecto soluta ipsum explicabo
        praesentium et laborum iure exercitationem! Excepturi laboriosam
        officiis totam provident maiores cupiditate quasi dolorum, minima ipsa
        assumenda, optio eius laborum mollitia at tenetur officia natus, tempora
        maxime obcaecati nostrum consequuntur sint ad! Voluptatibus, maiores
        saepe amet repellat culpa illo commodi beatae.
      </p>
    </div>
  );
}

export default About;
