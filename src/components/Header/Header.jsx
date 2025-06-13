import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex fixed w-full justify-around items-center bg-black/60 text-white p-4 backdrop-blur-md z-99999">
      <div>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </Link>
      </div>
      <nav className="flex space-x-10">
        <Link href="/" className="hover:text-[#5454D4] transition-colors">
          Home
        </Link>
        <Link href="/sobre" className="hover:text-[#5454D4] transition-colors">
          Sobre
        </Link>
        <Link
          href="/servicos"
          className="hover:text-[#5454D4] transition-colors"
        >
          Serviços
        </Link>
        <Link
          href="/projetos"
          className="hover:text-[#5454D4] transition-colors"
        >
          Projetos
        </Link>
      </nav>
      <Link href="/contato">
        <button className="rounded-[8px] border border-[#5454D4] p-2 px-8 cursor-pointer hover:bg-[#5454D4] transition-colors">
          Contato
        </button>
      </Link>
    </header>
  );
}
