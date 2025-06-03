import { auth } from "@/auth";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";

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
    <>
      <header>
        <Navbar session={session} />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
