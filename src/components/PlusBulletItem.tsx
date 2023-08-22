export default function PlusBulletItem({ content }: { content: string }) {
  return (
    <div className="flex flex-row gap-5 text-dark text-base">
      <p className="text-red-500">+</p>
      <p>{content}</p>
    </div>
  );
}
