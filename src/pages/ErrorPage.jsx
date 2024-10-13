import { useRouteError } from "react-router-dom";
import errorpic from "../assets/error.svg";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="text-xl text-center">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <img className="w-3/4 md:w-1/2" src={errorpic} alt="" />
    </div>
  );
};

export default ErrorPage;
