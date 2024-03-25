import BoldHeading from "@/components/BoldHeading";
import { ShadModal } from "@/components/ShadModal";
import React from "react";

export default function page() {
  return (
    <div>
      <BoldHeading heading="Shadcn Concepts" />
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        The People of the Kingdom
      </h2>
      <div className="py-8">
        <ShadModal />
      </div>
    </div>
  );
}
