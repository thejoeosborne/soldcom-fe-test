import PlusBulletItem from "./PlusBulletItem";
import RankSubCard from "./RankSubCard";

export default function WideCard() {
  return (
    <div className="grid place-items-center">
      <div className="bg-white gap-2 grid grid-cols-1 lg:grid-cols-2 shadow-md rounded-lg p-6 pt-10 mt-10 md:-mt-8 md:px-18 w-5/6">
        <div className="flex gap-4 flex-col md:px-10 md:pr-16 text-start">
          <p className="text-lg">
            Our referrals are routed to the top performing agents in our
            network. Rankings are based on numerous factors, including:
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
    </div>
  );
}
