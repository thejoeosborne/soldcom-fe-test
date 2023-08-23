import PartialBackground from "@/components/PartialBackground";
import MainTextBlock from "@/components/MainTextBlock";
import OriginationCard from "@/components/OriginationCard";
import WideCard from "@/components/WideCard";
import SubHeaderBlurb from "@/components/SubHeaderBlurb";
import OpportunityCard from "@/components/OpportunityCard";
import WinCard from "@/components/WinCard";
import LostCard from "@/components/LostCard";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <div className="pb-12">
      <PartialBackground />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-4 justify-between place-items-center pt-10 md:p-20 px-10 sm:px-14 md:px-36 lg:px-42">
        <MainTextBlock
          title="SOLD.com Difference"
          content="Unlike other lead sources and portals, we don't focus on worthless metrics like impressions or even leads. SOLD.com shows you how many clients actually cross the finish line and buy or sell a home."
          subContent="After all, isn't that the metric that matters most?"
        />
        <OriginationCard />
      </div>
      <WideCard />
      <SubHeaderBlurb />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 pt-2 gap-4">
        <OpportunityCard />
        <WinCard />
        <LostCard />
      </div>
      <CtaSection />
    </div>
  );
}
