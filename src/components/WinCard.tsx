import Image from "next/image";
import DashedDivider from "./DashedDivider";
import Divider from "./Divider";

export default function WinCard() {
  const iconSize = 80;
  return (
    <div className="bg-transparent border border-grayBorder rounded-lg p-4">
      <div className="grid grid-rows-6 gap-4 p-6">
        <Image
          src="/img/icon-happy-face.svg"
          width={iconSize}
          height={iconSize}
          alt="leads"
        />
        <p className="text-4xl">Wins</p>
        <div>
          <div className="grid grid-cols-2 justify-between pb-6 items-center">
            <div className="text-dark">
              <p>Your signed</p>
              <p>agreements</p>
            </div>
            <div className="flex justify-end text-customGreen text-3xl font-bold">
              <p>500</p>
            </div>
          </div>
          <DashedDivider />
        </div>
        <div>
          <div className="grid grid-cols-2 justify-between pb-6 items-center">
            <div className="text-dark">
              <p>Your closings</p>
            </div>
            <div className="flex justify-end text-customGreen text-2xl font-bold">
              <p>10</p>
            </div>
          </div>
        </div>
        {/* Got fairly hacky here to get the gray background to expand outside of the containers padding
        There's likely a better solution using some tricky positioning */}
        <div className="bg-grayBackground rounded-b-lg flex flex-col rounded-t-none row-span-2 -mx-10 -mt-10 -mb-10 md:-mb-14 z-[-1]">
          <div className="row-span-1 px-10 pt-4">
            <div className="grid grid-rows-2 justify-end items-end pb-6 items-center">
              <div className="text-dark">
                <p>Your closed volume</p>
              </div>
              <div className="flex justify-end text-customGreen text-2xl font-bold">
                <p>$3,000,000</p>
              </div>
            </div>
          </div>
          <div className="mx-10">
            <Divider />
          </div>
          <div className="row-span-1 px-10 pt-4">
            <div className="grid grid-rows-2 justify-end items-end pb-6 items-center">
              <div className="text-dark">
                <p>Your commission (est)</p>
              </div>
              <div className="flex justify-end text-customGreen text-2xl font-bold">
                <p>$500,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
