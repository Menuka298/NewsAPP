import React from "react";
import NavButton from "../NavButton/NavButton";

function AdminNavBar(props) {
  return (
    <div className="flex sm:justify-center  mt-8 mb-4">
      <h1 className="rounded-lg px-3 py-2 text-slate-700 font-medium">
        {props.PageName}
      </h1>
      <NavButton Pageurl="../../Admin/Dashboard" NavButton="Dashboard" />
      <NavButton Pageurl="../../Admin/AddNews" NavButton="Add News" />
      <NavButton
        Pageurl="../../Admin/AddAdsHotnews"
        NavButton="Add Ad & Hot News"
      />
      <NavButton Pageurl="#" NavButton="Logout" />
    </div>
  );
}

export default AdminNavBar;
