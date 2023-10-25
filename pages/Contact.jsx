import React from "react";
import "./main.css";
import NavBar from "@/app/Componenets/Bar/NavBar";
import ContactCard from "@/app/Componenets/Card/ContactCard";

function Contact() {
  return (
    <div className="flex bg-white min-h-screen flex-col items-center">
      {/* Nav Bar Section */}
      <NavBar />
      {/* End Nav Bar Section */}

      {/* ContactCard Section */}
      <h class="m-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-400">
        Contact Us
      </h>
      <h1 class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
        Derana Macro Entertainment (Pvt) Ltd
      </h1>
      <ContactCard />
      {/* End ContactCard Section */}
    </div>
  );
}

export default Contact;
