import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useRef, useEffect } from "react";

function FormLogin() {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
    console.log("login");
  };

  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        id="email"
        label="Email"
        type="email"
        name="email"
        placeholder="example@gmail.com"
        ref={emailRef}
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
