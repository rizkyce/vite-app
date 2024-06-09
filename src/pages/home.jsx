import Button from "../components/Elements/Button";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";

function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-24 ">
      <div className="bg-slate-400 max-w-lg w-full p-10 rounded-2xl shadow-md shadow-sky-200">
        <h1 className="text-xl font-semibold text-sky-300 italic text-center antialiased">
          Welcome, Belajar React JS...
        </h1>
      </div>
      <div className="flex flex-row p-7 gap-4 items-center">
        <Link to="/login">
          <Button variant="bg-blue-700 text-center inline-flex items-center gap-1">
            Login
            <CiLogin />
          </Button>
        </Link>
        <Link to="/profile">
          <Button variant="bg-slate-600 inline-block h-12 w-12 rounded-full ring-2 ring-sky-700 shadow-md shadow-slate-500">
            <FaUser />
          </Button>
        </Link>
      </div>
    </main>
  );
}

export default HomePage;
