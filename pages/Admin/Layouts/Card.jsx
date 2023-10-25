import React from "react";

function Card(props) {
  return (
    <div class="mt-4 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg">
      {props.children}
    </div>
  );
}

export default Card;
