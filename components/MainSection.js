import Paragraph from "./Paragraph";

export default function MainSection({ data }) {
  return (
    <div className="col-span-2 xl:mt-12 flex items-center justify-center">
      <div className="w-10/12 xl:w-3/4 ">
        <h1
          style={{ fontFamily: "League Spartan, sans-serif" }}
          className="text-5xl font-bold mb-7 "
        >
          {data.title}
        </h1>
        <Paragraph>{data.paragraph}</Paragraph>
        <button className="flex content-center items-center mt-6 tracking-widest font-semibold text-lg hover:opacity-50">
          SHOP NOW <img src="/icons/icon-arrow.svg" className="ml-6 " />
        </button>
      </div>
    </div>
  );
}
