import { useState } from "react";
import styles from "../styles/NavBar.module.css";

const buttons = ["home", "shop", "about", "contact"];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="absolute xl:w-auto w-full flex justify-center items-center gap-x-20 top-10 xl:top-16 xl:left-20 z-10">
      <img
        src="/icons/logo.svg"
        className="h-full shrink-0 scale-125 translate-y-0.5"
      />

      <div
        className={`fixed xl:static h-24 xl:h-auto w-full xl:w-auto bg-white xl:bg-transparent flex items-center justify-around top-0 z-10 transition-transform duration-500 xl:translate-y-0 ${
          open ? "" : "-translate-y-full"
        }`}
      >
        <button onClick={() => setOpen(false)}>
          <img
            src="/icons/icon-close.svg"
            className="shrink-0 scale-105 xl:hidden"
          />
        </button>
        <div className="gap-x-5 xl:gap-x-10 items-center justify-center flex">
          {buttons.map((text) => {
            return (
              <button className={styles.link} key={text}>
                {text}
              </button>
            );
          })}
        </div>
      </div>

      <button
        className="absolute left-12 md:left-32 lg:left-40"
        onClick={() => setOpen(true)}
      >
        <img
          src="/icons/icon-hamburger.svg"
          className="h-full shrink-0 scale-105 xl:hidden"
        />
      </button>
    </nav>
  );
}
