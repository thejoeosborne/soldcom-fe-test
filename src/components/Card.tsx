export default function Card({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}
