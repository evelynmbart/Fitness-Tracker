export function Button({ text, func }) {
  return (
    <button
      onClick={func}
      className="px-8 py-4 rounded-md border-[2px] mx-auto bg-slate-950 border-blue-400 border-solid blueShadow duration-200"
    >
      <p>{text}</p>
    </button>
  );
}
