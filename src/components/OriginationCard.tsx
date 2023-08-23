import Image from "next/image";

export default function OriginationCard() {
  const imgSize = 35;
  return (
    <>
      <div className="bg-white flex flex-col gap-6 rounded-lg p-6 w-full lg:w-auto lg:mr-12">
        <div>
          <p className="text-sm lg:text-lg">
            In your zips over the last 18 months, we{"'"}ve originated:
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 justify-between px-1 lg:px-4">
          <Image
            src="/img/redAsset.svg"
            width={imgSize}
            height={imgSize}
            alt="asset1"
          />
          <Image
            src="/img/greenAsset.svg"
            width={imgSize}
            height={imgSize}
            alt="asset2"
          />
          <p className="text-3xl text-dark">$20M</p>
          <p className="text-3xl text-dark">$500k</p>
          <p className="text-xs md:text-sm text-dark">in sales</p>
          <p className="text-xs md:text-sm text-dark">in Commissions (est)</p>
        </div>
      </div>
    </>
  );
}
