import { useContext, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Form from "../components/Form/Form";
import Logo from "../components/Logo/Logo";
import { AuthContext } from "../context/AuthProvider";
import { IFormInputs } from "../types/IFormInputs";

export default function Home() {
  const [emailError, setEmailError] = useState<string>();
  let navigate = useNavigate();
  const { loading, signUp } = useContext(AuthContext);

  const hundleForm: SubmitHandler<IFormInputs> = async (data) => {
    if (loading) return;
    signUp(data.email, data.password);
    navigate("/?sucess=true");
  };

  return (
    <>
      <div className="flex flex-col gap-10 justify-center items-center min-h-screen">
        <Logo />

        <div className="element lg:w-[400px] w-full">
          <div className="text-center text-lg mb-5">
            S'inscrire sur Facebook
          </div>
          {/* Form */}
          <Form
            handleForm={hundleForm}
            button={
              <Button
                large
                disabled={loading}
              >
                S'inscrire
              </Button>
            }
          ></Form>

          {/* Pass */}
          <div className="flex justify-center mt-5">
            <div className="text-blue-facebook hover:text-blue-500 duration-150 cursor-pointer">
              <Link to="/">Pas de compte ?</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
