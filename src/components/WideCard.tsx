import PlusBulletItem from "./PlusBulletItem";
import RankSubCard from "./RankSubCard";

export default function WideCard() {
  return (
    <div className="bg-white gap-6 grid grid-cols-1 lg:grid-cols-2 justify-between place-items-center shadow-md rounded-lg p-6 px-4 md:px-20 w-full">
      <div className="flex gap-4 flex-col">
        <p className="text-xl md:pr-6">
          Our referrals are routed to the top performing agents in our network.
          Rankings are based on numerous factors, including:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-between px-1 lg:px-4">
          <PlusBulletItem content="Transaction Statistics" />
          <PlusBulletItem content="Customer Satisfaction" />
          <PlusBulletItem content="Responsiveness" />
          <PlusBulletItem content="Portal Updates" />
        </div>
      </div>
      <RankSubCard />
    </div>
  );
}
