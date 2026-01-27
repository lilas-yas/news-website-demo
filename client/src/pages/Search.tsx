import Layout from "@/components/Layout";
import NewsCard from "@/components/NewsCard";
import { articles } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Search as SearchIcon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Search() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const initialQuery = searchParams.get("q") || "";
  
  const [query, setQuery] = useState(initialQuery);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [results, setResults] = useState(articles);

  useEffect(() => {
    // Mock search logic
    let filtered = articles;

    if (query) {
      const lowerQuery = query.toLowerCase();
      filtered = filtered.filter(a => 
        a.title.toLowerCase().includes(lowerQuery) || 
        a.excerpt.toLowerCase().includes(lowerQuery) ||
        a.content.toLowerCase().includes(lowerQuery)
      );
    }

    if (categoryFilter !== "all") {
      filtered = filtered.filter(a => a.category === categoryFilter);
    }

    if (dateFilter !== "all") {
      const now = new Date();
      const articleDate = (dateStr: string) => new Date(dateStr);
      
      if (dateFilter === "24h") {
        filtered = filtered.filter(a => (now.getTime() - articleDate(a.published_at).getTime()) < 24 * 60 * 60 * 1000);
      } else if (dateFilter === "week") {
        filtered = filtered.filter(a => (now.getTime() - articleDate(a.published_at).getTime()) < 7 * 24 * 60 * 60 * 1000);
      } else if (dateFilter === "month") {
        filtered = filtered.filter(a => (now.getTime() - articleDate(a.published_at).getTime()) < 30 * 24 * 60 * 60 * 1000);
      }
    }

    setResults(filtered);
  }, [query, categoryFilter, dateFilter]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic handled by useEffect
  };

  return (
    <Layout>
      <div className="container mx-auto py-12 max-w-5xl">
        <h1 className="font-serif text-4xl font-bold mb-8">Search</h1>
        
        {/* Search Controls */}
        <div className="bg-muted/30 p-6 mb-12 border border-border">
          <form onSubmit={handleSearch} className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search for news..." 
                className="pl-10 bg-background h-12 text-lg"
              />
            </div>
            <Button type="submit" size="lg" className="h-12 px-8 font-bold uppercase tracking-wider">Search</Button>
          </form>

          <div className="flex flex-wrap gap-4">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px] bg-background">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="politics">Politics</SelectItem>
                <SelectItem value="economy">Economy</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
                <SelectItem value="climate">Climate</SelectItem>
              </SelectContent>
            </Select>

            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger className="w-[180px] bg-background">
                <SelectValue placeholder="Date Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Time</SelectItem>
                <SelectItem value="24h">Last 24 Hours</SelectItem>
                <SelectItem value="week">Past Week</SelectItem>
                <SelectItem value="month">Past Month</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">
            {results.length} Results Found
          </h2>

          {results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.map(article => (
                <NewsCard key={article.article_id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-muted/10 border border-dashed border-border">
              <h3 className="text-xl font-bold mb-2">No results found</h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find any articles matching "{query}".
              </p>
              <div className="text-sm">
                <p className="font-bold mb-2">Did you mean?</p>
                <div className="flex justify-center gap-4 text-primary">
                  <button onClick={() => setQuery("politics")} className="hover:underline">politics</button>
                  <button onClick={() => setQuery("economy")} className="hover:underline">economy</button>
                  <button onClick={() => setQuery("technology")} className="hover:underline">technology</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
