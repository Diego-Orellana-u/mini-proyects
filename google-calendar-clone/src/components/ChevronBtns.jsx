import LeftIcon from "./icons/LeftIcon";
import RightIcon from "./icons/RightIcon";

export default function ChevronBtns({
  onSmallPrev,
  onSmallNext,
  onBigPrev,
  onBigNext,
}) {
  return (
    <div className="flex gap-x-6">
      <button
        className="cursor-pointer text-gray-600"
        onClick={onSmallPrev ?? onBigPrev}
      >
        <LeftIcon fill={"black"} />
      </button>
      <button
        className="cursor-pointer text-gray-600"
        onClick={onSmallNext ?? onBigNext}
      >
        <RightIcon fill={"black"} />
      </button>
    </div>
  );
}
