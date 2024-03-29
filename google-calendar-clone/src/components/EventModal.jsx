import DeepMenu from "./icons/DeepMenu";
import X from "./icons/X";

export default function EventModal() {
  return (
    <div className="h-screen w-full fixed left-0 top-0 justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <DeepMenu />
          <button className="text-gray-400">
            <X />
          </button>
        </header>
      </form>
    </div>
  );
}
