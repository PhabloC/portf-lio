import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Escolha os pesos desejados
  variable: "--font-poppins", // Opcional: cria uma variável CSS
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={poppins.className}>
      <body className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
