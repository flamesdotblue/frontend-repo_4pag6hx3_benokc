import { Star, Shield, Truck } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Quantum Edge Headphones',
    price: 199,
    image:
      'https://images.unsplash.com/photo-1518443952248-5f0f2d1d8d71?q=80&w=1400&auto=format&fit=crop',
    badge: 'New',
  },
  {
    id: 2,
    name: 'Neon Flux Keyboard',
    price: 159,
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1400&auto=format&fit=crop',
    badge: 'Hot',
  },
  {
    id: 3,
    name: 'Iridescent Smartwatch',
    price: 229,
    image:
      'https://images.unsplash.com/photo-1511732351157-1865efcb7b7b?q=80&w=1400&auto=format&fit=crop',
    badge: 'Limited',
  },
  {
    id: 4,
    name: 'Aurora Phone Case',
    price: 39,
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop',
    badge: 'Best seller',
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="relative py-16 sm:py-20 bg-[#07090d]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="mx-auto h-64 max-w-5xl blur-3xl bg-gradient-to-r from-fuchsia-600/20 via-cyan-500/20 to-transparent rounded-full" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Featured products</h2>
            <p className="mt-1 text-white/60">Hand-picked items to match the futuristic aesthetic.</p>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-white/60">
            <div className="inline-flex items-center gap-2"><Truck className="h-4 w-4" /> Free shipping</div>
            <div className="inline-flex items-center gap-2"><Shield className="h-4 w-4" /> 2-year warranty</div>
            <div className="inline-flex items-center gap-2"><Star className="h-4 w-4" /> 4.9/5 rating</div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition hover:translate-y-[-2px] hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.35)]"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {p.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-2.5 py-1 text-xs font-medium text-white">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                    ${p.price}
                  </p>
                  <button className="rounded-md bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/15 transition">
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
