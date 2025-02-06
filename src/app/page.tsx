import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen  flex flex-col items-center">
      <header className="w-full  shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold ">Kuenda</h1>
        <nav className="space-x-4">
          <Link href="/home">Cursos</Link>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl font-extrabold mb-4">
          Aprenda com os melhores cursos online
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl">
          Kuenda oferece cursos de alta qualidade para você desenvolver suas
          habilidades e avançar na sua carreira.
        </p>
        <Link
          href="/home"
          className="bg-[#12c2e9] rounded-2xl text-white px-4 py-2   font-semibold  transition"
        >
          Explorar Cursos
        </Link>
      </main>

      <footer className="w-full  py-4 text-center shadow-md">
        <p className="text-[#12c2e9]">
          &copy; 2025 Kuenda. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
