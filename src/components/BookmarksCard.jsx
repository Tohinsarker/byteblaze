import React from "react";
import { deleteBlogs } from "../utils";

const BookmarksCard = ({ data,handleDelete }) => {
  const { cover_image, id, published_at, title, description } = data;




  
  return (
    <div className="relative max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 ">
      <button
        onClick={()=>handleDelete(id)}
        className="absolute right-2 top-1 cursor-pointer rounded-lg p-2 z-index: 10 bg-red-600 text-white"
      >
        Delete
      </button>
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500 "
        src={cover_image ? cover_image : placeHolderImage}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <span className="text-xs dark:text-gray-600">
          {new Date(published_at).toLocaleDateString()}
        </span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BookmarksCard;
