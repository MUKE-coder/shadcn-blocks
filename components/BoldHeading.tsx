import React from "react";

export default function BoldHeading({ heading }: { heading: string }) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {heading}
    </h1>
  );
}
