import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <div className="lg:flex lg:justify-start lg:items-center lg:gap-4 lg:mb-4 mb-2">
      <div className="lg:flex lg:items-start lg:gap-4">
        <div className="relative w-80 h-52 bg-black rounded-2xl overflow-hidden shadow-lg border border-gray-700">
          <Link href="visualizar/">
            <Image
              src="/images/3.jpg"
              alt="Grafana Dashboard"
              width={500}
              height={500}
              className="opacity-70 hover:opacity-90 object-cover w-full h-full"
            />
          </Link>
        </div>

        <div className="lg:pt-0 pt-2 flex flex-col justify-between">
          <div className="mb-4 ">
            <Link href="visualizar/">
              <h2
                className="font-semibold
              "
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                id eligendi molestiae ...
              </h2>
            </Link>
            <p className="text-sm font-light hidden lg:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              id eligendi molestiae quibusdam consectetur beatae facilis itaque,
              vitae, soluta unde ...
            </p>
          </div>

          <div className="text-sm text-start flex lg:items-center gap-3 ">
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
      </div>
    </div>
  );
}
