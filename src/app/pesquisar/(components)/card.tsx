import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <div className="flex justify-start items-center gap-4 mb-4">
      <div className="flex items-start gap-4">
        <div className="relative w-80 h-52 bg-black rounded-2xl overflow-hidden shadow-lg border border-gray-700">
          <Link href="/visualizar" passHref>
            <Image
              src="/images/3.jpg"
              alt="Grafana Dashboard"
              layout="fill"
              className="opacity-70 hover:opacity-90 object-cover"
            />
          </Link>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <Link href="/visualizar" passHref>
              <h2 className="font-semibold">Lorem ipsum dolor sit amet...</h2>
            </Link>
          </div>

          <div className="text-sm text-start flex items-center gap-3">
            <Link href="/visualizar" passHref>
              <Image
                src="/images/2.jpg"
                alt="Grafana Dashboard"
                width={500}
                height={500}
                className="h-10 w-10 rounded-full"
              />
            </Link>
            <div>
              <Link href="/visualizar" passHref>
                <h3>Canal X</h3>
              </Link>
              <h4>34 mil sub - 30 minutos</h4>
            </div>
          </div>
        </div>

        <div>...</div>
      </div>
    </div>
  );
}
