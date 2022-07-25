import Img from "../components/Img";
import About from "../components/About";
import Buttons from "../components/Buttons";
import MainSection from "../components/MainSection";
import NavBar from "../components/NavBar";
import image1 from "../images/desktop-image-hero-1.jpg";
import image2 from "../images/desktop-image-hero-2.jpg";
import image3 from "../images/desktop-image-hero-3.jpg";
import smallImage1 from "../images/image-about-dark.jpg";
import smallImage2 from "../images/image-about-light.jpg";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Head from "next/head";

const data = [
  {
    image: image1,
    title: "Discover innovative ways to decorate",
    paragraph:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    image: image2,
    title: "We are available all across the globe",
    paragraph:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    image: image3,
    title: "Manufactured with the best materials",
    paragraph:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

export default function Home() {
  const [currentData, setCurrentData] = useState(0);

  return (
    <>
      <Head>
        <title>Room</title>
      </Head>
      <NavBar />
      <main className={styles.container}>
        <Img img={data[currentData].image} className="col-span-2 row-span-2">
          <Buttons
            currentData={currentData}
            setCurrentData={setCurrentData}
            dataLength={data.length}
            containerClass="xl:hidden"
          />
        </Img>
        <MainSection
          data={data[currentData]}
          currentData={currentData}
          setCurrentData={setCurrentData}
          dataLength={data.length}
        />
        <Buttons
          currentData={currentData}
          setCurrentData={setCurrentData}
          dataLength={data.length}
          containerClass="hidden xl:flex"
        />
        <div className="hidden xl:block"></div>
        <Img img={smallImage1} className="" />
        <About />
        <Img img={smallImage2} className="" />
      </main>
    </>
  );
}
