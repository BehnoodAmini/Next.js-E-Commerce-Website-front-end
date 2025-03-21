import "../styles/globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
