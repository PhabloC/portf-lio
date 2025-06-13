import Image from "next/image";

export default function PrimarySection() {
  return (
    <>
      <div className="flex  items-center align-center  w-full h-full justify-around ">
        <div>
          <h3>Ooopa</h3>
          <h1>Eu sou o Phablo Carvalho</h1>
          <p>Desenvolvedor Front-End</p>
          <button className="flex space-x-4 rounded-2xl bg-amber-300 p-2 mr-4 cursor-pointer">
            Contato
          </button>
        </div>
        <div>
          <Image src="/profile.png" alt="Logo" width={300} height={300} />
        </div>
      </div>
    </>
  );
}
