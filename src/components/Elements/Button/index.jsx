function Button(props) {
  const {
    variant = "bg-black",
    children = "...",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      className={`${variant} text-white font-bold py-2 px-4 rounded-lg`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
