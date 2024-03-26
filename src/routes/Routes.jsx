import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Bookmarks from "../Pages/Bookmarks/Bookmarks";
import Blog from "../components/Blog/Blog";
import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Content from "../components/Content";
import Author from "../components/Author";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch(`https://dev.to/api/articles?per_page=20&top=5`),
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
      {
        path: "/blog/:id",
        element: <Blog></Blog>,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            element: <Content></Content>,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path: "author",
            element: <Author></Author>,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
        ],
      },
    ],
  },
]);

export default router;
