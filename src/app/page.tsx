import Slider from "@/components/Slider";
import Featured from "@/components/Featured";
import Image from "next/image";
import Offer from "@/components/Offer";

export default function Home() {
  return (
    <main>
      <Slider />
      <Featured />
      <Offer />
    </main>
  );
}
