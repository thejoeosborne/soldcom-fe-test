import Image from "next/image";
import DashedDivider from "./DashedDivider";

export default function OpportunityCard() {
  const iconSize = 80;
  return (
    <div className="bg-white border border-grayBorder rounded-lg p-4">
      <div className="grid grid-rows-6 gap-4 p-6">
        <Image
          src="/img/icon-leads.svg"
          width={iconSize}
          height={iconSize}
          alt="leads"
        />
        <p className="text-4xl">Opportunity</p>
        <div>
          <div className="grid grid-cols-2 justify-between pb-6  items-center">
            <div className="text-dark">
              <p>SOLD.com</p>
              <p>Leads</p>
            </div>
            <div className="flex justify-end text-customLightBlue text-3xl font-bold">
              <p>500</p>
            </div>
          </div>
          <DashedDivider />
        </div>
        <div>
          <div className="grid grid-cols-2 justify-between pb-6  items-center">
            <div className="text-dark">
              {/* The mockups provided slightly different text here, I went with the desktop one */}
              <p>Customers we promoted to you</p>
            </div>
            <div className="flex flex-col gap-2 items-end justify-end text-customLightBlue text-2xl font-bold">
              <p>100</p>
              <div className=" items-center flex flex-row gap-2">
                <div className="flex flex-row">
                  <div className="w-6 h-1 bg-customLightBlue"></div>
                  <div className="w-10 h-1 bg-gray-300"></div>
                </div>
                <div className="flex flex-row">
                  <p className="text-customLightBlue text-xs">{"(XX$)"}</p>
                </div>
              </div>
            </div>
          </div>
          <DashedDivider />
        </div>
        <div>
          <div className="grid grid-cols-2 justify-between pb-6  items-center">
            <div className="text-dark">
              <p>Appointments set with you</p>
            </div>
            <div className="flex justify-end text-customLightBlue text-2xl font-bold">
              <p>30</p>
            </div>
          </div>
          <DashedDivider />
        </div>
      </div>
    </div>
  );
}
