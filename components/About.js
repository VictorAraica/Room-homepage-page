import Paragraph from "./Paragraph";

export default function About() {
  return (
    <div className="col-span-2 flex flex-col justify-center items-center">
      <div className="w-4/5 xl:m-7">
        <h2
          style={{ fontFamily: "League Spartan, sans-serif" }}
          className="tracking-wide uppercase text-xl font-bold text-black mb-4 content-center"
        >
          About our furniture
        </h2>

        <Paragraph>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </Paragraph>
      </div>
    </div>
  );
}
