import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Work />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}
