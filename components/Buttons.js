export default function Buttons({ currentData, setCurrentData, dataLength, containerClass }) {
  const buttonClass =
    "w-1/2 aspect-square flex content-center items-center justify-center bg-black hover:bg-darkGray";
  const iconClass = "h-1/2";

  return (
    <div className={`flex absolute bottom-0 right-0 xl:static w-3/12 xl:w-full ${containerClass}`}>
      <button
        className={buttonClass}
        onClick={() =>
          setCurrentData(
            currentData - 1 === -1 ? dataLength - 1 : currentData - 1
          )
        }
      >
        <img src="/icons/icon-angle-left.svg" className={iconClass} />
      </button>

      <button
        className={buttonClass}
        onClick={() => setCurrentData((currentData + 1) % dataLength)}
      >
        <img src="/icons/icon-angle-right.svg" className={iconClass} />
      </button>
    </div>
  );
}
