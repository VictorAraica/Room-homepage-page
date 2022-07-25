import React from "react";

export default function Paragraph({ children }) {
  return (
    <p
      style={{ fontFamily: "League Spartan, sans-serif" }}
      className="text-darkGray font-semibold tracking-tight leading-7"
    >
      {children}
    </p>
  );
}
