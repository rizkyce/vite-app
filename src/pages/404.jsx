import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <section className="bg-white min-h-screen flex flex-col items-center justify-center ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-600 ">
            {error.status}
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
            {error.statusText || error.message}
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 ">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <Link
            to="/home"
            className="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ErrorPage;
