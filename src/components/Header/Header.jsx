import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-gray-800 text-white p-4  ">
      <div className="ml-4">
        <Image src="/logo.png" alt="Logo" width={30} height={30} />
      </div>
      <div className="flex space-x-10 ">
        <div>
          <a href="/">Home</a>
        </div>
        <div>
          <a href="/sobre">Sobre</a>
        </div>
        <div>Serviços</div>
        <div>Portfólio</div>
      </div>
      <div className="flex space-x-4 rounded-2xl bg-amber-300 p-2 mr-4">
        Contato
      </div>
    </div>
  );
}
