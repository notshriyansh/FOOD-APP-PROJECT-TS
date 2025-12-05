import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError() as {
    status?: number;
    statusText?: string;
  };

  return (
    <div className="error-page">
      <h1>Sorry!!</h1>
      <h2>Something went wrong</h2>
      <h3>
        {err?.status} : {err?.statusText}
      </h3>
    </div>
  );
};

export default Error;
