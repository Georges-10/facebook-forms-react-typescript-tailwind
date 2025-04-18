import { lazy, Suspense, useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { AuthContext } from "./context/AuthProvider";
import Main from "./layouts/Main";

const Home = lazy(() => import("./pages/Home"));
const Signup = lazy(() => import("./pages/Signup"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

export default function App() {
  const context = useContext(AuthContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,

      children: [
        {
          path: "/",
          element: (
            <Suspense>
              {context?.user ? <Dashboard /> : <Home />}
            </Suspense>
          ),
        },
        {
          path: "/signup",
          element: (
            <Suspense>
              <Signup />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      {" "}
      <ToastContainer
        theme="dark"
        position="bottom-right"
      />
      <RouterProvider router={router} />
    </>
  );
}
