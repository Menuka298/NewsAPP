import React from "react";
import "../main.css";
import { useState } from "react";
import Label from "./Layouts/Label";
import AdminNavBar from "@/app/Componenets/Bar/AdminNavBar";
import axios from "axios";
import querystring from "querystring";

function AddNews() {
  const [newstitle, setnewstitle] = useState("");
  const [newsdescription, setnewsdescription] = useState("");
  const [newstype, setnewstype] = useState("");
  const [newsCatagory, setnewsCatagory] = useState("");
  // const [newsimage, setnewsimage] = useState("");

  async function save(event) {
    event.preventDefault();

    const formData = querystring.stringify({
      newstitle: newstitle,
      newsdescription: newsdescription,
      newstype: newstype,
      newsCatagory: newsCatagory,
    });

    try {
      await axios.post("http://localhost:5000/newsroute/insert", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      alert("Added Successfully");
      window.location.href = "./AddNews";
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="flex bg-white min-h-screen flex-col">
      <AdminNavBar />

      <div>
        <div class="min-h-screen p-6 bg-gray-100  items-center justify-center">
          <div class="container max-w-screen-lg mx-auto">
            <div>
              <p class="text-2xl font-bold tracking-tight text-gray-900 dark:text-dark">
                Create News And News Articles
              </p>
              <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div class="lg:col-span-2">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <form action="/">
                        <div class="md:col-span-5 mt-4">
                          <Label Labelname="News title required" />
                          <textarea
                            rows="1"
                            class="mb-4 block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                            required
                            name="newstitle"
                            id="newstitle"
                            onChange={(event) => {
                              setnewstitle(event.target.value);
                            }}
                          ></textarea>

                          <Label Labelname="News Description" />
                          <textarea
                            rows="4"
                            class="mb-4 block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                            required
                            name="newsdescription"
                            id="newsdescription"
                            onChange={(event) => {
                              setnewsdescription(event.target.value);
                            }}
                          ></textarea>

                          <Label Labelname="Select News Catagory" />
                          <select
                            type="text"
                            class="mb-5 block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                            required
                            name="newsCatagory"
                            id="newsCatagory"
                            onChange={(event) => {
                              setnewsCatagory(event.target.value);
                            }}
                          >
                            <option value="MainNews">Select Catagory</option>
                            <option value="MainNews">Main News</option>
                            <option value="MainArticles">Main Articles</option>
                            <option value="Articles">Articles</option>
                          </select>

                          <Label Labelname="Select Catagory" />
                          <select
                            type="text"
                            class="mb-5 block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                            required
                            name="newstype"
                            id="newstype"
                            onChange={(event) => {
                              setnewstype(event.target.value);
                            }}
                          >
                            <option value="0">Select Catagory</option>
                            <option value="politicsNews">politics News</option>
                            <option value="InternatinaolNews">
                              Internatinaol News
                            </option>
                            <option value="HotNews">Hot News</option>
                            <option value="EducationNews">
                              Education News
                            </option>
                          </select>
                        </div>

                        {/* <Label Labelname='Select Catagory'/>
                        <input class="mb-5 block p-2.5 w-full text-md text-gray-900 bg-gray-50  border border-gray-300"
                         type="file"
                         id="newsCatagory"
                        onChange={(event) => {
                          setnewsimage(event.target.value);
                        }}
                        /> */}

                        <button
                          type="submit"
                          className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-dark-900"
                          onClick={save}
                        >
                          Create
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNews;
