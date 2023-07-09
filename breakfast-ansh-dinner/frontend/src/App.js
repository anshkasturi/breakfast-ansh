import './style.css';
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import FullPost from "./components/FullPost";
import Header from "./components/Header";
import Author from "./components/Authors";
import About from "./pages/About";
import Contact from "./pages/Contact";
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
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/authors",
        element: <Author />,
      }
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
