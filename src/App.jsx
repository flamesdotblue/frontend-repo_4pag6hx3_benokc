import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero3D />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
