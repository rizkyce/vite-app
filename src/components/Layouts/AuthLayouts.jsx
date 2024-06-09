import { Link } from "react-router-dom";
function AuthLayouts(props) {
  const { title, children, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-4xl font-bold mb-2 text-blue-700">{title}</h1>
        <p className="mb-4 text-gray-600">
          Welcome, please enter your details!
        </p>
        {children}
        {/* {type === "login" ? (
          <p className="text-center text-sm mt-5">
            Don't have an account?{" "}
            <Link to="/register" className="font-bold text-blue-600">
              Sign up
            </Link>
          </p>
        ) : (
          <p className="text-center text-sm mt-5">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-blue-600">
              Login
            </Link>
          </p>
        )} */}
        <p className="text-center text-sm mt-5">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}

          {type === "login" && (
            <Link to="/register" className="font-bold text-blue-600">
              Sign up
            </Link>
          )}

          {type === "register" && (
            <Link to="/login" className="font-bold text-blue-600">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
}

export default AuthLayouts;
