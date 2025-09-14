import { Source_Sans_3, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/header";
import Footer from "@/app/footer";
import { getSetting } from "@/app/queries/getSetting";

const fontSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const setting = await getSetting();
  return {
    title: {
      template: `%s | ${setting.siteName}`,
      default: "Untitled",
    },
    description: "webku",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
