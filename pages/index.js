import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="ml-6">
        <h1 className="text-4xl font-bold">Hello, world!</h1>
        <p className={`${inter} text-2xl mt-5 leading-8 tracking-wide`}>
          HOMEPAGE
        </p>
      </div>
    </div>
  );
}
