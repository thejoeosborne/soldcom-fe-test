export default function MainTextBlock({
  title,
  content,
  subContent,
}: {
  title: string;
  content: string;
  subContent?: string;
}) {
  return (
    <div className="bg-transparent p-2 lg:p-6 text-white rounded-lg w-auto lg:w-[calc(50vh)]">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-lg">{content}</p>
      <br></br>
      <p className="text-lg">{subContent}</p>
    </div>
  );
}
