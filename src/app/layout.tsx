import { Plus_Jakarta_Sans as PlusJakartaSans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = PlusJakartaSans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "auto",
});

export const metadata = {
  title: "Leadster",
  description: "Leadster - A melhor plataforma de geração de leads do Brasil",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${plusJakartaSans.className} flex w-full flex-1 bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}
