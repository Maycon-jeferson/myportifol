import Hero from "./_components/hero";
import Body from "./_components/body";

export default function Home() {
  return (
    <div className=" bg-gray-900
        md:bg-gradient-to-b md:from-gray-950 md:via-purple-950 md:to-gray-950">
      <Hero />
      <Body />
    </div>
  );
}
