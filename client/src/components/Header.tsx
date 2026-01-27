import { Link, useLocation } from "wouter";
import { Search, Menu, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

export default function Header() {
  const [location, setLocation] = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setLocation(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
    }
  };

  const categories = [
    { name: "Politics", path: "/category/politics" },
    { name: "Economy", path: "/category/economy" },
    { name: "Technology", path: "/category/technology" },
    { name: "Sports", path: "/category/sports" },
    { name: "Climate", path: "/category/climate" },
  ];

  return (
    <header className="w-full border-b-4 border-foreground bg-background">
      {/* Top Bar */}
      <div className="container mx-auto flex h-10 items-center justify-between text-xs font-medium uppercase tracking-wider text-muted-foreground border-b border-border">
        <div className="flex gap-4">
          <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span className="hidden sm:inline">Today's Paper</span>
        </div>
        <div className="flex gap-4">
          <Link href="/subscribe" className="hover:text-primary transition-colors">Subscribe</Link>
          <Link href="/account" className="hover:text-primary transition-colors">Log In</Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto py-6 flex items-center justify-between relative">
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {categories.map((cat) => (
                  <Link key={cat.path} href={cat.path} className="text-lg font-bold hover:text-primary">
                    {cat.name}
                  </Link>
                ))}
                <div className="h-px bg-border my-4" />
                <Link href="/subscribe" className="text-lg font-bold text-primary">Subscribe</Link>
                <Link href="/account" className="text-lg font-bold">Account</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0">
          <h1 className="font-serif text-3xl md:text-5xl font-black tracking-tighter hover:opacity-80 transition-opacity">
            The Daily Chronicle.
          </h1>
        </Link>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="h-5 w-5" />
          </Button>
          <Link href="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/subscribe">
            <Button variant="default" className="font-bold uppercase tracking-wider text-xs ml-2">
              Subscribe
            </Button>
          </Link>
        </div>
        
        {/* Mobile Search Icon */}
        <div className="md:hidden">
           <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Search Bar Overlay */}
      {isSearchOpen && (
        <div className="border-t border-border bg-muted/30 p-4 animate-in slide-in-from-top-2">
          <div className="container mx-auto max-w-2xl flex gap-2">
            <form onSubmit={handleSearch} className="flex-1 flex gap-2">
              <Input 
                placeholder="Search news, topics, and more..." 
                className="bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <Button type="submit">Search</Button>
            </form>
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:block border-t border-border py-3">
        <div className="container mx-auto flex justify-center gap-8">
          {categories.map((cat) => (
            <Link key={cat.path} href={cat.path} className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
              {cat.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
