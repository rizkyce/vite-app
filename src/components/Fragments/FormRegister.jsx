import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
function FormRegister() {
  return (
    <form action="">
      <InputForm
        id="fullname"
        label="Fullname"
        type="text"
        name="fullname"
        placeholder="insert your name here..."
      />
      <InputForm
        id="email"
        label="Email"
        type="email"
        name="email"
        placeholder="example@gmail.com"
      />
      <InputForm
        id="password"
        label="Password"
        type="password"
        name="password"
        placeholder="**********"
      />
      <InputForm
        id="password"
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="**********"
      />
      <Button variant="bg-blue-700 hover:bg-blue-800 active:bg-blue-900 w-full">
        Register
      </Button>
    </form>
  );
}

export default FormRegister;
