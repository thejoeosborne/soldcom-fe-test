export default function PartialBackground({ color }: { color: string }) {
  return (
    <div className={`bg-${color} h-1/3 w-full absolute top-0 z-[-1]`}></div>
  );
}
