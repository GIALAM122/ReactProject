
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Admin from "./components/admin/layout_admin.jsx";
import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import Home from "./components/project/home.jsx";
import ChartsOverviewDemo from "./components/admin/dash_admin.jsx"
import BasicGroupingDemo from "./components/admin/user_admin.jsx"
import Lab1 from "./components/lab1/lab1.jsx";
import TodoLab2 from "./components/lab2/lab2.jsx";
import VideoPlayer from "./components/lab3/lab3bai1.jsx";
import TodoList from "./components/lab3/lab3bai2.jsx";
import Contact from "./components/project/contact.jsx";
import AppAbout from "./components/project/about.jsx";
import Exma from "./components/project/expense/exma.jsx";
import Exmaseting from "./components/project/expense/exma-set.jsx";
import ExmaOverview from "./components/project/expense/exma_view.jsx";
import PriceFre from "./components/project/expense/price-fre.jsx";
import Login from "./components/project/login.jsx";
// import About from "./components/about.jsx";

function checkLogin() {
  let token = localStorage.getItem("access_token");
  if (token) {
    return redirect("/");
  } else {
    return null;
  }
}

const routes = createBrowserRouter([
  {
    path: "home",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "about",
        element: <AppAbout/>,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "quanly",
        element: <Exma/>,
        
      },
      {
        path: "thietlap",
        element: <Exmaseting/>,
        
      },
      {
        path: "overview",
        element: <ExmaOverview/>,
        
      },
      {
        path: "pricefre",
        element: <PriceFre/>,
        
      },
      {
        path: "login",
        loader: checkLogin,
        element: <Login/>,
        
      },
    ],
  },
  {
    path: "admin",
    element: <Admin />,
    children: [
      {
        path: "",
        element: <ChartsOverviewDemo/>,
      },
      {
        path: "users",
        element: <BasicGroupingDemo/>,
      },
      {
        path: "products",
        element: <h2>Product Management</h2>,
      },
    ],
  },
  {
    path: "lab1",
    element: <Lab1 />,
  },
  {
    path: "lab2",
    element: <TodoLab2 />,
  },
  {
    path: "lab3bai1",
    element: <VideoPlayer/>,
  },
  {
    path: "lab3bai2",
    element: <TodoList/>,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);