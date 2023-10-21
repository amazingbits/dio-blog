import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./global.css";

const roboto = Roboto({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DIO Blog",
  description:
    "Um pequeno blog desenvolvido para o curso de React na plataforma DIO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
