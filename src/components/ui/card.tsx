import Image from "next/image";

export default function Card() {
  return (
    <div>
      <div className="relative w-full h-52 bg-black rounded-2xl overflow-hidden shadow-lg border border-gray-700">
        <Image
          src="/images/1.png"
          alt="Grafana Dashboard"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <div className="pt-2 flex justify-between items-center">
        <div>
          <Image
            src="/images/1.png"
            alt="Grafana Dashboard"
            width={500}
            height={500}
            className="h-10 w-10 rounded-full"
          />
        </div>
        <div className="text-sm text-start">
          <h2 className="font-semibold">Lorem ipsum dolor sit amet...</h2>
          <h3>Canal X</h3>
          <h4>34 mil sub - 30 minutos</h4>
        </div>
        <div>...</div>
      </div>
    </div>
  );
}
