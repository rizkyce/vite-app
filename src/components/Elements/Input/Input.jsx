/* eslint-disable react/display-name */
import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  return (
    <input
      id={name}
      type={type}
      className="text-xl border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder={placeholder}
      autoComplete="off"
      name={name}
      ref={ref}
    />
  );
});

export default Input;
