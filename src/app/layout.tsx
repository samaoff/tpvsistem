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
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
     <body className="flex flex-col text-base xs:text-sm md:text-lg lg:text-xl 3xl:text-2xl ">
   
     <ConfigProvider>
          {children}
        </ConfigProvider>
    
      </body>
    </html>
  );
}
