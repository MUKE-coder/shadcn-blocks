import BoldHeading from "@/components/BoldHeading";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-8">
      <BoldHeading heading="How to Use Shadcn UI Like a Pro" />
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-xl">
        <li>
          Shadcn Typography - <span className="font-bold">Simple</span>
        </li>
        <li>
          Shadcn Darkmode - <span className="font-bold">Simple</span>
        </li>
        <li>
          Shadcn Components - <span className="font-bold">Simple</span>
        </li>
        <li>
          Shadcn Blocks - <span className="font-bold">Medium</span>
        </li>
        <li>
          Shadcn Examples - <span className="font-bold">Advanced</span>
        </li>
        <li>
          Shadcn UI Native Components -{" "}
          <span className="font-bold">Advanced</span>
        </li>
      </ul>
    </main>
  );
}
