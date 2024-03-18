import Plus from "./icons/Plus";

export default function CreateBtn() {
  return (
    <button className="border p-2 rounded-full flex items-center shadow-md hover:shadow-[0_5px_10px_0px_rgba(0,0,0,0.1)]">
      <Plus src={Plus} className="w-7 h-7" />
      <span className="pl-3 pr-7 pt-1">Create</span>
    </button>
  );
}
