export default function CtaSection() {
  return (
    <div className="justify-center items-center flex flex-col">
      <div className="flex justify-center text-center p-8 text-xl font-bold">
        Unsatisfied with these stats? We can help you improve them.
      </div>
      <div className="flex h-6 w-fill justify-center items-center place-items-center  lg:col-span-3 bg-darkRed rounded-lg p-6 hover:cursor-pointer">
        <p className="text-white font-bold">Schedule A Call</p>
      </div>
    </div>
  );
}
