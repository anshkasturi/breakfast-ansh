import './style.css';
import HomePage from "./pages/HomePage";
import PagePost from "./pages/PostPage";
import TestContent from "./components/TestContent";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import FullPost from "./components/FullPost";
import Header from "./components/Header";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <div><Header /><Content /></div>,
      },
      {
        path: "/post/:id",
        element: <FullPost />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
