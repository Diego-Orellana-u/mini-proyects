import CreateBtn from "./CreateBtn";
import MiniCalendar from "./MiniCalendar";

export default function Sidebar() {
  return (
    <aside className="border p-5 w-64">
      <CreateBtn />
      <MiniCalendar />
    </aside>
  );
}
