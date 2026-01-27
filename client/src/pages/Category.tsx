import Layout from "@/components/Layout";
import NewsCard from "@/components/NewsCard";
import SidebarWidgets from "@/components/SidebarWidgets";
import AdSlot from "@/components/AdSlot";
import { articles, ads } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRoute } from "wouter";
import NotFound from "./NotFound";

export default function Category() {
  const [match, params] = useRoute("/category/:name");
  const categoryName = params?.name?.toLowerCase();
  
  // Filter articles by category
  const categoryArticles = articles.filter(
    a => a.category.toLowerCase() === categoryName
  ).sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());

  const trending = articles.slice().sort(() => Math.random() - 0.5).slice(0, 5);
  const sidebarAd = ads.find(a => a.ad_slot === 'sidebar');

  // Pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const paginatedArticles = categoryArticles.slice(0, page * itemsPerPage);
  const hasMore = paginatedArticles.length < categoryArticles.length;

  if (!match || categoryArticles.length === 0) {
    return <NotFound />;
  }

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <Layout>
      <div className="bg-muted/30 border-b border-border py-12 mb-8">
        <div className="container mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Section</span>
          <h1 className="font-serif text-5xl md:text-6xl font-black tracking-tight mb-4">
            {capitalize(categoryName!)}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The latest news, analysis, and reporting on {categoryName}.
          </p>
        </div>
      </div>

      <div className="container mx-auto pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Featured Article (First one) */}
            {paginatedArticles.length > 0 && (
              <div className="mb-12">
                <NewsCard article={paginatedArticles[0]} variant="featured" />
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {paginatedArticles.slice(1).map((article) => (
                <NewsCard key={article.article_id} article={article} />
              ))}
            </div>

            {hasMore && (
              <div className="mt-12 text-center">
                <Button 
                  onClick={() => setPage(p => p + 1)}
                  variant="outline" 
                  size="lg"
                  className="w-full md:w-auto min-w-[200px] font-bold uppercase tracking-wider"
                >
                  Load More
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12 border-l border-border pl-0 lg:pl-8">
            <SidebarWidgets trendingArticles={trending} />
            {sidebarAd && <AdSlot ad={sidebarAd} slot="sidebar" />}
          </aside>

        </div>
      </div>
    </Layout>
  );
}
