import { auth } from "@/auth";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import SessionGuard from "@/components/SessionGuard/SessionGuard";
import { SessionProvider } from "next-auth/react";
import localfont from "next/font/local";
import { ToastContainer } from "react-toastify";
import "./styles.css";

const heronew = localfont({
  src: [
    {
      path: "../../public/fonts/hero-new-regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../public/fonts/hero-new-medium.woff2",
      style: "normal",
      weight: "500",
    },
    {
      path: "../../public/fonts/hero-new-semibold.woff2",
      style: "normal",
      weight: "600",
    },
    {
      path: "../../public/fonts/hero-new-bold.woff2",
      style: "normal",
      weight: "700",
    },
  ],
});

const recoleta = localfont({
  src: [
    {
      path: "../../public/fonts/recoleta-regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../public/fonts/recoleta-medium.woff2",
      style: "normal",
      weight: "500",
    },
    {
      path: "../../public/fonts/recoleta-semibold.woff2",
      style: "normal",
      weight: "600",
    },
    {
      path: "../../public/fonts/recoleta-bold.woff2",
      style: "normal",
      weight: "700",
    },
  ],
  variable: "--font-recoleta",
});

export const metadata = {
  title: "School Wits - Let's Make Studying Less Meh",
  description:
    "School Wits isn't just a typical learning platform - it's a school of wits, where sharp minds grow sharper, and creativity leads the way. Here, learning isn't about cramming facts; it's about discovering ideas, asking the right questions, and building the confidence to explore beyond textbooks.",
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <html
      lang="en"
      className={`${recoleta.variable} ${heronew.className} antialiased`}
    >
      <SessionProvider>
        <SessionGuard>
          <body>
            <ToastContainer
              position="top-center"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss={false}
              theme="light"
            />
            <header>
              <Navbar session={session} />
            </header>
            <main>{children}</main>
            <footer>
              <Footer />
            </footer>
          </body>
        </SessionGuard>
      </SessionProvider>
    </html>
  );
}
