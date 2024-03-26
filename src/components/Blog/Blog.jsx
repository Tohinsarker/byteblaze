import React, { useState } from "react";
import { Link, Outlet, useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../Loader";
import { saveBlog } from "../../utils";

const Blog = () => {
  const [tabIndex, setTabIndex] = useState();
  const loader = useLoaderData();
  const { cover_image, tags, id, published_at, title, description } = loader;
const navigation = useNavigation();

if(navigation.state === 'loading') return <Loader />


const handleBookMark = (data) =>{
  saveBlog(data);
}
  return (
    <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
            {title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
            <div className="flex items-center md:space-x-2">
              <img
                src={cover_image}
                alt=""
                className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-300"
              />
              <p className="text-sm">Leroy Jenkins • July 19th, 2021</p>
            </div>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
              4 min read • 1,570 views
            </p>
          </div>
        </div>

        <div className="dark:text-gray-800">
          <p>Insert the actual text content here...</p>
        </div>
        <div className="flex items-center -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
          <Link
          to=''
          onClick={() => setTabIndex(0)}
            className={`flex items-center flex-shrink-0 px-5 py-2 ${tabIndex ===0 ? 'border border-b-0' : 'border-b'} dark:border-gray-300 dark:text-gray-600`}
          >
            Content
          </Link>
          <Link
            to={`author`}
            onClick={() => setTabIndex(1)}
            className={`flex items-center flex-shrink-0 px-5 py-2 ${tabIndex ===1 ? 'border border-b-0' : 'border-b'} dark:border-gray-300 dark:text-gray-600`}
          >
           Author
          </Link>
          <button onClick={() => handleBookMark(loader)} className="btn btn-primary">Save</button>
         
        </div>
      </article>
      <Outlet></Outlet>
      <div>
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
         {tags.map(tag => <a
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
          >
            {tag}
          </a>)}
          
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Related posts</h4>
          <ul className="ml-4 space-y-1 list-disc">
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:underline">
                Nunc id magna mollis
              </a>
            </li>
       
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;
