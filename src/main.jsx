import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import AboutUs from "./AboutUs";
import ProgramLpk from "./ProgramLPK";
import GalleryPage from "./Gallery";
import FormPendaftaran from "./Pendaftaran";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/program",
    element: <ProgramLpk />,
  },
  {
    path: "/gallery",
    element: <GalleryPage />,
  },
  {
    path: "/pendaftaran",
    element: <FormPendaftaran />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
