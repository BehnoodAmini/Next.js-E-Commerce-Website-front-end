import "../styles/globals.css";

import Header from "@/components/header";

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR">
      <body>
        <Header />
        {children}
        
      </body>
    </html>
  );
}
