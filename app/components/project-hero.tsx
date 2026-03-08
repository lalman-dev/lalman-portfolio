import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
}

export default function ProjectHero({ title, description, image }: Props) {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          {title}
        </h1>

        <p className="text-lg text-zinc-400 max-w-2xl">{description}</p>
      </div>

      <div className="border border-zinc-800 rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={700}
          className="w-full"
        />
      </div>
    </section>
  );
}
