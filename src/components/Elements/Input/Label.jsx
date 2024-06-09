function Label(props) {
  const { htmlFor, children } = props;
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-2 text-xl font-bold text-slate-700"
    >
      {children}
    </label>
  );
}

export default Label;
