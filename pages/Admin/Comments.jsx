import React, { useEffect, useState } from "react";
import "../main.css";
import Table from "./Layouts/Table";
import AdminNavBar from "@/app/Componenets/Bar/AdminNavBar";
import axios from "axios";

function Comments() {
  const [comment, setcomment] = useState([]);

  useEffect(() => {
    getcomment();
  }, []);

  const getcomment = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/commentroute/view"
      );
      setcomment(response.data);
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
              Comment
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
          {comment.map((comment) => (
            <tr
              key={comment._id}
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {comment.Comment}
              </th>

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

export default Comments;
