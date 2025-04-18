import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Logo from "../components/Logo/Logo";
import { AuthContext } from "../context/AuthProvider";

export default function Dashboard() {
  const context = useContext(AuthContext);
  let navigate = useNavigate();

  return (
    <div className="flex lg:flex-row flex-col lg:gap-0 gap-10 min-h-screen items-center lg:justify-normal justify-center p-10 max-w-6xl mx-auto">
      <div className="lg:w-5/12 w-full lg:block flex flex-col">
        <div className="lg:block flex justify-center">
          <Logo />
        </div>
        <h1 className="text-3xl mt-3 lg:text-left text-center">
          Avec Facebook, partagez et restez en contact avec votre
          entourage.
        </h1>
      </div>
      <div className="lg:w-7/12 w-full flex lg:justify-end">
        <div className="element lg:w-[400px] w-full">
          {/* off */}
          <div className="flex justify-center">
            <Button
              green
              onClick={() => {
                context?.logout();
                navigate("/");
              }}
              disabled={context?.loading}
            >
              Déconnection
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
