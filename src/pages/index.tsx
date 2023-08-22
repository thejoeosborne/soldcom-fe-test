import PartialBackground from "@/components/PartialBackground";
import MainTextBlock from "@/components/MainTextBlock";
import OriginationCard from "@/components/OriginationCard";
import WideCard from "@/components/WideCard";

export default function Home() {
  return (
    <>
      <PartialBackground />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-4 justify-between items-center grid place-items-center pt-10 md:p-20 px-10 sm:px-14 md:px-36 lg:px-42">
        <MainTextBlock
          title="Sold.com Difference"
          content="Unlike other lead sources and portals, we don't focus on worthless metrics like impressions or even leads. SOLD.com shows you how many clients actually cross the finish line and buy or sell a home."
          subContent="After all, isn't that the metric that matters most?"
        />
        <OriginationCard />
      </div>
      <div className="grid grid-cols-1 gap-10 md:gap-4 justify-between items-center grid place-items-center pt-10 md:p-20 px-6 lg:px-42 md:px-72 sm:px-14 md:-mt-24">
        <WideCard />
      </div>
    </>
  );
}
