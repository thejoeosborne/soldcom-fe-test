import Image from "next/image";

export default function RankSubCard() {
  const arrowImgSize = 10;
  return (
    <div className="bg-grayBackground rounded-lg p-6 grid grid-cols-1 gap-2">
      <div className="grid grid-cols-12 justify-between place-items-center">
        <div className="col-span-9 lg:col-span-7">
          <p className="text-xl md:text-2xl text-dark font-bold">
            Your average rank in the markets you serve is:
          </p>
        </div>
        <div className="col-span-3 flex flex-row items-baseline md:-ml-16 lg:col-span-2">
          <p className="text-4xl font-bold text-darkRed">25</p>
          <Image
            src="/img/redArrowDown.svg"
            width={arrowImgSize}
            height={arrowImgSize}
            alt="arrow"
          />
        </div>
        <div className="col-span-0 hidden lg:flex h-1/2 -m-2 justify-center items-center place-items-center  lg:col-span-3 bg-darkRed rounded-lg p-6 hover:cursor-pointer">
          <p className="text-white font-bold">Learn More</p>
        </div>
      </div>
      <div>
        <p>
          Your ranking will directly affect the number of referrals you receive.
          Learn about our{" "}
          <span className="text-customRed">Guaranteed Display</span> program to
          help improve your ranking.
        </p>
      </div>
    </div>
  );
}
