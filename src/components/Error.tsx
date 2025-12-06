import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError() as {
    status?: number;
    statusText?: string;
  };

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold text-red-600 mb-3">Sorry!!</h1>
      <h2 className="text-2xl text-gray-700 mb-3">Something went wrong</h2>
      <h3 className="text-gray-600">
        {err?.status} : {err?.statusText}
      </h3>
    </div>
  );
};

export default Error;
