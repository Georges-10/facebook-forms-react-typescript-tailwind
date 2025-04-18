import { useForm } from "react-hook-form";
import { IFormInputs } from "../../types/IFormInputs";

interface FormProps {
  handleForm: (data: IFormInputs) => void;
  button: JSX.Element;
}
export default function Form({ handleForm, button }: FormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>();

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <input
        type="email"
        placeholder="Adresse e-mail"
        className="input"
        {...register("email", {
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "email incorrect format",
          },
        })}
      />
      {errors.email && (
        <p className="text-red-500 mb-5">{errors.email.message}</p>
      )}
      <input
        placeholder="Mot de passe"
        type="password"
        className="input"
        {...register("password", {
          required: true,
          pattern: {
            value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*?]).{8,}$/,
            message:
              "Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial.",
          },
        })}
      />
      {errors.password && (
        <p
          role="alert"
          className="text-red-400 mb-5"
        >
          {errors.password.message}
        </p>
      )}

      {button}
    </form>
  );
}
