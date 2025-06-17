import Link from "next/link";

export default function Header() {
  return (
    <div className="flex w-full align-center justify-center relative">
      <header
        className="flex absolute top-0 w-[400px] mt-4 rounded-3xl justify-around items-center
       bg-[#5454D4]/30 shadow-lg text-white p-4 backdrop-blur-md z-999999"
      >
        <nav className="flex space-x-10">
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            Home
          </Link>
          <Link href="/sobre" className="hover:text-cyan-400 transition-colors">
            Sobre
          </Link>
          <Link
            href="/servicos"
            className="hover:text-cyan-400 transition-colors"
          >
            Serviços
          </Link>
          <Link
            href="/projetos"
            className="hover:text-cyan-400 transition-colors"
          >
            Projetos
          </Link>
        </nav>
      </header>
    </div>
  );
}
