import useLogin from "../hooks/useLogin";
import Button from "../components/Elements/Button";

const ProfilePage = () => {
  const username = useLogin();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="flex flex-col items-center justify-between p-20">
      <h1 className="text-3xl font-bold mb-2">Profile</h1>
      <h3 className="text-xl mb-5">
        Name:{" "}
        {username
          ? username
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")
          : ""}
      </h3>
      <Button variant="bg-red-700" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default ProfilePage;
