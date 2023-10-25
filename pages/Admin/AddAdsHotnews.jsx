import React, { useState } from "react";
import "../main.css";
import Label from "./Layouts/Label";
import AdminNavBar from "@/app/Componenets/Bar/AdminNavBar";
import axios from "axios";
import querystring from "querystring";

function AddAdsHotnews() {
  const [description, setdescription] = useState("");
  const [type, settype] = useState("");

  async function save(event) {
    event.preventDefault();

    const formData = querystring.stringify({
      description: description,
      type: type,
    });
    try {
      await axios.post(
        "http://localhost:5000/AdsandNewsroute/insert",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      alert("Added Successfully");
      window.location.href = "./AddAdsHotnews";
    } catch (err) {
      alert("Error", err);
    }
  }
  return (
    <div className="flex bg-white min-h-screen flex-col">
      <AdminNavBar />

      <div class="min-h-screen p-6 bg-gray-100  items-center justify-center">
        <div class="container max-w-screen-lg mx-auto">
          <p class="text-2xl font-bold tracking-tight text-gray-900 dark:text-dark">
            Create Hot News & Ads
          </p>
          <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div class="lg:col-span-2">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <form>
                    <div class="md:col-span-5 mt-4">
                      <Label Labelname="Enter Hot News or Ads description" />
                      <textarea
                        rows="4"
                        class="mb-4 block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                        required
                        name="description"
                        id="description"
                        onChange={(event) => {
                          setdescription(event.target.value);
                        }}
                      ></textarea>

                      <Label Labelname="Select Catagory" />
                      <select
                        type="text"
                        class="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                        required
                        name="type"
                        id="type"
                        onChange={(event) => {
                          settype(event.target.value);
                        }}
                      >
                        <option value="0">Select News Type</option>
                        <option value="Ads">Ads</option>
                        <option value="HotNews">Hot News</option>
                      </select>

                      <button
                        type="submit"
                        class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={save}
                      >
                        Create
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAdsHotnews;
