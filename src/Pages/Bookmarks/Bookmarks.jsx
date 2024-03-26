import React, { useEffect, useState } from "react";
import { deleteBlogs, getBlogs, saveBlog } from "../../utils";
import BlogCard from "../../components/BlogCard/BlogCard";
import BookmarksCard from "../../components/BookmarksCard";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blog = getBlogs();
    setBlogs(blog);
  }, []);

  const handleDelete = (id) => {
    deleteBlogs(id)
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };

  return (
    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((data) => (
        <BookmarksCard data={data} handleDelete={handleDelete}></BookmarksCard>
      ))}
    </div>
  );
};

export default Bookmarks;
