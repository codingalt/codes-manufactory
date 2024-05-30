import React from "react";
import { Link, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import IndexPage from "../pages/IndexPage";
import ViewProjectPage from "../pages/ViewProjectPage";
import Root from "../pages/Root";
import SelectServicePage from "../pages/SelectServicePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <IndexPage /> },
      {
        path: "projects/:projectTitle/:projectId",
        element: <ViewProjectPage />,
      },
      {
        path: "selectService",
        element: <SelectServicePage />,
      },
      // {
      //   path: "contacts/:contactId",
      //   element: (
      //     <>
      //       <h1 style={{ color: "#fff" }}>Contact Page</h1>
      //     </>
      //   ),
      //   handle: {
      //     crumb: () => <Link to="/contacts/:contactId">Contacts</Link>,
      //   },
      // },
    ],
  },
]);
