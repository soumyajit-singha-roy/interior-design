import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-stone-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="text-3xl font-serif font-bold tracking-wider text-stone-900 inline-block mb-6">
              S.N<span className="text-gold-500">.</span>
            </Link>
            <p className="text-stone-500 leading-relaxed mb-6">
              Designing spaces that reflect your lifestyle. Luxury interior design services in Kolkata.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:text-gold-500 hover:border-gold-500 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:text-gold-500 hover:border-gold-500 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2A5.8 5.8 0 0 1 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2M7.6 4A3.6 3.6 0 0 0 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4A3.6 3.6 0 0 0 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6M12 6.8A5.2 5.2 0 1 1 12 17.2A5.2 5.2 0 0 1 12 6.8M12 8.8A3.2 3.2 0 1 0 12 15.2A3.2 3.2 0 0 0 12 8.8M17.5 5.5A1 1 0 1 1 17.5 7.5A1 1 0 0 1 17.5 5.5Z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:text-gold-500 hover:border-gold-500 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16.01 6.01 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16.01 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:text-gold-500 hover:border-gold-500 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-stone-900">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#home" className="text-stone-500 hover:text-gold-500 transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-stone-500 hover:text-gold-500 transition-colors">About Us</Link></li>
              <li><Link href="#services" className="text-stone-500 hover:text-gold-500 transition-colors">Services</Link></li>
              <li><Link href="#projects" className="text-stone-500 hover:text-gold-500 transition-colors">Projects</Link></li>
              <li><Link href="#contact" className="text-stone-500 hover:text-gold-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-stone-900">Services</h4>
            <ul className="space-y-4">
              <li className="text-stone-500">Residential Interiors</li>
              <li className="text-stone-500">Commercial Spaces</li>
              <li className="text-stone-500">Modular Kitchens</li>
              <li className="text-stone-500">Office Design</li>
              <li className="text-stone-500">Turnkey Projects</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-stone-900">Contact Us</h4>
            <ul className="space-y-4">
              <li className="text-stone-500">65/8, East Topsia, Topsia<br/>Kolkata, West Bengal 700046</li>
              <li className="text-stone-500">091233 66730</li>
              <li className="text-stone-500">sninte.blogspot.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-stone-400">
            &copy; {new Date().getFullYear()} S.N Interior Design. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-stone-400">
            <Link href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
