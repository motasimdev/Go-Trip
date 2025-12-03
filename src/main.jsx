import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/layout/Root";
import Home from "./components/pages/Home";
import Destination from "./components/pages/Destination";
import Categories from "./components/pages/Categories";
import Blog from "./components/pages/Blog";
import Pages from "./components/pages/Pages";
import Contact from "./components/pages/Contact";
import Error from "./components/pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "categories", Component: Categories },
      { path: "destination", Component: Destination },
      { path: "blog", Component: Blog },
      { path: "pages", Component: Pages },
      { path: "contact", Component: Contact },
      { path: "*", Component: Error },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
