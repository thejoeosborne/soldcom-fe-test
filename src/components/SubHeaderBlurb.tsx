export default function SubHeaderBlurb() {
  return (
    <div className="flex flex-row p-2 mt-6 mx-8 gap-3">
      <div className="col-span-1 w-4 h-8 flex bg-customRed rounded-md "></div>
      <div className="col-span-10 flex w-full">
        <p className="font-bold text-lg">
          Since you joined our network, here{"'"}s what we{"'"}ve been up to in
          your zip codes:
        </p>
      </div>
    </div>
  );
}
