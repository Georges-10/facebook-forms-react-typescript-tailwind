import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { AuthContext } from "../context/AuthProvider";

export default function Main() {
  const userContext = useContext(AuthContext);
  return (
    <>
      {userContext?.loading && (
        <p className="flex justify-center items-center h-screen text-4xl ">
          <PacmanLoader color="#3477fe" />
        </p>
      )}
      <Outlet />
    </>
  );
}
