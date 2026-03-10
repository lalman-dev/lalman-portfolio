import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

export default function ArchitectureDiagram({ src, alt }: Props) {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">System Architecture</h2>

      <div className="border border-zinc-800 rounded-xl overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={700}
          className="w-full"
        />
      </div>
    </section>
  );
}
