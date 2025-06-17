import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { Poppins } from "next/font/google";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={poppins.className}>
      <body>
        <Header />
        {children}
        <Footer />
        <Script
          src="https://unpkg.com/@splinetool/viewer@1.10.10/build/spline-viewer.js"
          type="module"
          strategy="afterInteractive"
        />
        <Script id="remove-spline-logo" strategy="afterInteractive">
          {`
            const interval = setInterval(() => {
              const viewer = document.querySelector('spline-viewer');
              if (viewer && viewer.shadowRoot) {
                const logo = viewer.shadowRoot.querySelector('#logo');
                if (logo) {
                  logo.remove();
                  clearInterval(interval);
                }
              }
            }, 500);
          `}
        </Script>
      </body>
    </html>
  );
}
