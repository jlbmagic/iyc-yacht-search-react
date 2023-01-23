//create a button function component. Export it so it can be used in other files

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Button({ text, setBtn, status = "enabled" }) {
  console.log(
    classNames(
      status,
      status === "enabled"
        ? "cols-span-1 hover:bg-blue-700 m-2 bg-blue-500 text-blue-grey-050 font-light py-2 px-4 rounded"
        : "cols-span-1 bg-blue-grey-400 italic text-blue-grey-050 font-light py-2 px-4 rounded"
    )
  );
  return (
    <button
      className={classNames(
        status === "enabled"
          ? "cols-span-1 hover:bg-blue-700 m-2 bg-blue-500 text-blue-grey-050 font-light py-2 px-4 rounded"
          : "cols-span-1 bg-yellow-vivid-400 m-2 italic text-blue-grey-050 font-light py-2 px-4 rounded"
      )}
      onClick={() => {
        setBtn(text);
      }}
    >
      {text}
    </button>
  );
}
