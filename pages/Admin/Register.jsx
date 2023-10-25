import React, { useState } from "react";
import axios from "axios";
import querystring from "querystring";
import "../main.css";
import Label from "./Layouts/Label";
import AdminNavBar from "@/app/Componenets/Bar/AdminNavBar";

function Register() {
  const [Username, setUsername] = useState("");
  const [ID, setID] = useState("");
  const [Gmail, setGmail] = useState("");
  const [Position, setPosition] = useState("");

  async function save(event) {
    event.preventDefault();

    const formData = querystring.stringify({
      Username: Username,
      ID: ID,
      Gmail: Gmail,
      Position: Position,
    });

    try {
      await axios.post("http://localhost:5000/registerroute/insert", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      alert("Added Successfully");
      window.location.href = "./Register";
    } catch (err) {
      alert(err);
    }
  }
  return (
    <div className="flex bg-white min-h-screen flex-col">
      {/* AdminNavBar */}
      <AdminNavBar />
      {/* AdminNavBar */}
      <div class="min-h-screen p-6 bg-gray-100  items-center justify-center">
        <div class="container max-w-screen-lg mx-auto">
          <div>
            <p class="text-2xl font-bold tracking-tight text-gray-900 dark:text-dark">
              Create New Admin
            </p>
            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div class="lg:col-span-2">
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <form action="/">
                      <div class="md:col-span-5 mt-4">
                        <Label Labelname="Admin Username" />
                        <textarea
                          rows="1"
                          class="mb-4 block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                          required
                          name="Username"
                          id="Username"
                          onChange={(event) => {
                            setUsername(event.target.value);
                          }}
                        ></textarea>

                        <Label Labelname="Admin ID" />
                        <textarea
                          rows="1"
                          class="mb-4 block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                          required
                          name="ID"
                          id="ID"
                          onChange={(event) => {
                            setID(event.target.value);
                          }}
                        ></textarea>

                        <Label Labelname="Admin Gmail" />
                        <textarea
                          rows="1"
                          class="mb-4 block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                          required
                          name="Gmail"
                          id="Gmail"
                          onChange={(event) => {
                            setGmail(event.target.value);
                          }}
                        ></textarea>

                        <Label Labelname="Select Position" />
                        <select
                          type="text"
                          class="mb-5 block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                          required
                          name="Position"
                          id="Position"
                          onChange={(event) => {
                            setPosition(event.target.value);
                          }}
                        >
                          <option value="SuperAdmin">Super Admin</option>
                          <option value="Admin">Admin</option>
                          <option value="ArticleCreaters">
                            Article Creaters
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
                        Create New Admin
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
  );
}

export default Register;
