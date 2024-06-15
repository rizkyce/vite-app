import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useRef, useEffect, useState } from "react";
import { login } from "../../services/auth.service";
import { Toaster, toast } from "sonner";

function FormLogin() {
  // const [loginStatus, setLoginStatus] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/products";
    // console.log("login");
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    if (data.username === "" || data.password === "") {
      toast.error("Please fill username and password");
      return;
    }

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        // setLoginStatus(res.response.data);
        toast.error(
          res.response.data
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
        );
      }
    });
  };

  const usernameRef = useRef();

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <Toaster position="top-center" richColors />
      <InputForm
        id="username"
        label="Username"
        type="text"
        name="username"
        placeholder="Jhon Doe"
        ref={usernameRef}
      />
      <InputForm
        id="password"
        label="Password"
        type="text"
        name="password"
        placeholder="**********"
      />
      <Button
        variant="bg-blue-700 hover:bg-blue-800 active:bg-blue-900 w-full"
        type="submit"
      >
        Login
      </Button>
    </form>
  );
}

export default FormLogin;
