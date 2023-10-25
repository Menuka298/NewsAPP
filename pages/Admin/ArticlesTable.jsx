import React, { useEffect, useState } from "react";
import "../main.css";
import Table from "./Layouts/Table";
import AdminNavBar from "@/app/Componenets/Bar/AdminNavBar";
import axios from "axios";

function ArticlesTable() {
  const [news, setnews] = useState([]);

  useEffect(() => {
    getnews();
  }, []);

  const getnews = async () => {
    try {
      const response = await axios.get("http://localhost:5000/newsroute/view");
      setnews(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex bg-white min-h-screen flex-col">
      <AdminNavBar />

      <Table>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Article Tittle
            </th>
            <th scope="col" class="px-6 py-3">
              Article Description
            </th>

            <th scope="col" class="px-6 py-3">
              Article News type
            </th>
            <th scope="col" class="px-6 py-3">
              Article News Catagory
            </th>

            <th scope="col" class="px-6 py-3">
              Action
            </th>

            <th scope="col" class="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {news.map((news) => (
            <tr
              key={news._id}
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {news.newstitle}
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {news.newsdescription}
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {news.newstype}
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {news.newsCatagory}
              </td>

              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>

              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ArticlesTable;
