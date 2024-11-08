import type { Metadata } from "next";
import "./globals.css";
import { ConfigProvider } from "./context/ConfigContext";



export const metadata: Metadata = {
  title: "Giupos",
  description: "Punto de venta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  
  return (
    <html lang="es">
     <body>
     <ConfigProvider>
          {children}
        </ConfigProvider>
        
      </body>
    </html>
  );
}
