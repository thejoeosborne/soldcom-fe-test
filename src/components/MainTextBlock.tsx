export default function MainTextBlock({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="bg-transparent p-6 text-white rounded-lg shadow-md w-1/6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm">{content}</p>
    </div>
  );
}
