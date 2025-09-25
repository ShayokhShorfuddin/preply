import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import TextAndImage from "./_components/TextAndImage";

export default function Page() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TextAndImage />
        <Footer />
      </main>
    </>
  );
}
