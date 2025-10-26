import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black to-[#07090d]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
            New drop live now
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Futuristic gear for the bold
          </h1>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-white/70">
            Explore limited-edition tech accessories inspired by a neon-drenched future. Built with precision, designed to stand out.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition"
            >
              Shop collection
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/15 transition"
            >
              Learn more
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-white/60" id="features">
            <div>
              <span className="text-white">Free shipping</span>
              <span className="mx-2">•</span>
              30-day returns
            </div>
            <div>
              Secure checkout
            </div>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] rounded-2xl border border-white/10 bg-white/5">
          <Spline
            scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent via-transparent to-black/30" />
        </div>
      </div>
    </section>
  );
}
