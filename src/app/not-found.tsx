import Link from "next/link";

export default function NotFound() {
  return (
    <section className=" h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-[#12c2e9]">
          404
        </h1>
        <p className="mb-4 text-3xl tracking-tight font-bold  md:text-4xl dark:text-white">
          Algo está faltando.
        </p>
        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
          Desculpe, não encontramos essa página. Volte para a página inicial e
          explore mais conteúdos.
        </p>
        <Link
          href="/"
          className="inline-flex text-white bg-[#12c2e9] rounded-2xl font-medium text-sm px-5 py-2.5 text-center  my-4"
        >
          Voltar para a Home
        </Link>
      </div>
    </section>
  );
}
