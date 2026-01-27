import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background mt-auto pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-serif text-2xl font-bold mb-6">The Daily Chronicle.</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Delivering the truth with clarity and precision. Independent journalism for the modern world.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold uppercase tracking-widest text-xs mb-6 text-muted-foreground">Sections</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/category/politics" className="hover:text-primary-foreground transition-colors">Politics</Link></li>
              <li><Link href="/category/economy" className="hover:text-primary-foreground transition-colors">Economy</Link></li>
              <li><Link href="/category/technology" className="hover:text-primary-foreground transition-colors">Technology</Link></li>
              <li><Link href="/category/sports" className="hover:text-primary-foreground transition-colors">Sports</Link></li>
              <li><Link href="/category/climate" className="hover:text-primary-foreground transition-colors">Climate</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-widest text-xs mb-6 text-muted-foreground">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/subscribe" className="hover:text-primary-foreground transition-colors">Subscribe</Link></li>
              <li><Link href="/account" className="hover:text-primary-foreground transition-colors">My Account</Link></li>
              <li><Link href="/contact" className="hover:text-primary-foreground transition-colors">Contact Us</Link></li>
              <li><Link href="/help" className="hover:text-primary-foreground transition-colors">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-widest text-xs mb-6 text-muted-foreground">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-primary-foreground transition-colors">Cookie Policy</Link></li>
              <li><Link href="/accessibility" className="hover:text-primary-foreground transition-colors">Accessibility</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {currentYear} The Daily Chronicle. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">Twitter</a>
            <a href="#" className="hover:text-background transition-colors">Facebook</a>
            <a href="#" className="hover:text-background transition-colors">Instagram</a>
            <a href="#" className="hover:text-background transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
