import React, { useState } from "react";
import "./main.css";
import NavBar from "@/app/Componenets/Bar/NavBar";
import Label from "./Admin/Layouts/Label";
import axios from "axios";
import querystring from "querystring";
import Header from "@/app/Componenets/Bar/Header";
import FooterBar from "@/app/Componenets/Bar/FooterBar";
import ArticleCard from "@/app/Componenets/Card/ArticleCard";

function NewsPreview() {
  const [Comment, setComment] = useState("");

  async function save(event) {
    event.preventDefault();

    const formData = querystring.stringify({
      Comment: Comment,
    });
    try {
      await axios.post("http://localhost:5000/commentroute/insert", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      alert("Added Successfully");
      window.location.href = "./NewsPreview";
    } catch (err) {
      alert("Error", err);
    }
  }
  return (
    <div className="flex bg-white min-h-screen flex-col items-center">
      <NavBar />

      <Header />

      <div class="grid mb-8 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 mt-4">
        <div
          href="/Article"
          class="m-4 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-white-100 dark:border-white-700 dark:bg-white-800 dark:hover:bg-white-700"
        >
          <ArticleCard>
            <h1>Hot News</h1>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt=""
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ad
              porro blanditiis? Adipisci aspernatur nam nobis consequuntur
              doloribus doloremque, saepe tenetur a dolore est error, corporis
              eum in libero dignissimos molestiae magnam eaque veritatis id
              vitae ipsam hic alias. Minima fugit dolorum sed, dolore quibusdam
              doloribus officiis officia nobis est.
            </p>
          </ArticleCard>
        </div>

        <div class="md:flex-row md:max-w-xl">
          <form>
            <Label Labelname="Comment" />
            <textarea
              rows="4"
              class="mb-4 block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
              required
              placeholder="Type your comment here............."
              name="Comment"
              id="Comment"
              onChange={(event) => {
                setComment(event.target.value);
              }}
            ></textarea>

            <button
              type="submit"
              className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-dark-900"
              onClick={save}
            >
              Add Comment
            </button>
          </form>
        </div>
      </div>

      <FooterBar />
    </div>
  );
}

export default NewsPreview;
