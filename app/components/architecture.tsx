interface Props {
  items: string[];
}

export default function Architecture({ items }: Props) {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Architecture</h2>

      <ul className="space-y-3 text-zinc-400">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </section>
  );
}
