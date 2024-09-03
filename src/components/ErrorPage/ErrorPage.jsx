import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  console.log(error);
  return (
    <div>
      <h1 className="text-5xl">Error Ocurred</h1>
      <p> {error.statusText || error.message} </p>
      {error.status === 404 && (
        <div>
          <h3 className="text-3xl">Page not Found</h3>
          <button onClick={goHome} className="btn btn-primary">
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
