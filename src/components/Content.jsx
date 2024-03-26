import React from "react";
import Markdown from "react-markdown";
import { useLoaderData } from "react-router-dom";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();
  const { cover_image, published_at,body_html, title, description } = blog;
  return (
    <div
      className=" mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 "
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500 transition "
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
        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
      </div>
    </div>
  );
};

export default Content;
