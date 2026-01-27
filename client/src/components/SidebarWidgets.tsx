import { Article } from "@/lib/types";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

interface SidebarWidgetsProps {
  trendingArticles: Article[];
}

export default function SidebarWidgets({ trendingArticles }: SidebarWidgetsProps) {
  return (
    <div className="space-y-12">
      {/* Newsletter Signup */}
      <div className="bg-muted p-6 border-t-4 border-primary">
        <h3 className="font-serif text-xl font-bold mb-2">The Daily Briefing</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Essential news, expert analysis, and exclusive content delivered straight to your inbox every morning.
        </p>
        <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
          <Input placeholder="Your email address" className="bg-background" />
          <Button className="w-full font-bold uppercase tracking-wider text-xs">
            Sign Up
          </Button>
        </form>
        <p className="text-[10px] text-muted-foreground mt-2 text-center">
          By signing up, you agree to our Terms and Privacy Policy.
        </p>
      </div>

      {/* Trending / Most Read */}
      <div>
        <div className="flex items-center justify-between mb-4 border-b border-foreground pb-2">
          <h3 className="font-bold uppercase tracking-widest text-sm">Trending Now</h3>
        </div>
        <ol className="list-decimal list-inside space-y-4">
          {trendingArticles.slice(0, 5).map((article) => (
            <li key={article.article_id} className="pl-2">
              <Link href={`/article/${article.article_id}`} className="hover:text-primary group">
                <span className="font-serif font-bold text-lg leading-tight group-hover:underline decoration-2 underline-offset-4 block pl-2 -mt-6 ml-4">
                  {article.title}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>

      {/* Premium Promo */}
      <div className="bg-foreground text-background p-6 text-center">
        <h3 className="font-serif text-xl font-bold mb-2">Support Independent Journalism</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Unlock unlimited access to our award-winning reporting and analysis.
        </p>
        <Link href="/subscribe">
          <Button variant="secondary" className="w-full font-bold uppercase tracking-wider text-xs">
            Subscribe Now <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
