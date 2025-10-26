import { Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} NeoCommerce. All rights reserved.</p>
          <div className="flex items-center gap-4 text-white/70">
            <a href="#" aria-label="Twitter" className="hover:text-white transition"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-white transition"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
