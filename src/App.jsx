import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HomePage from "./Pages/HomePage";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
