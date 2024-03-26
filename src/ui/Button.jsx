function Button({ children, disabled }) {
  return (
    <button
      className="inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-400"
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
