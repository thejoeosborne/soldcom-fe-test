export default function Card({
  children,
}: {
  children?: React.ReactNode | React.ReactNode[];
}) {
  return <div className="bg-white shadow-md rounded-lg p-6">{children}</div>;
}
