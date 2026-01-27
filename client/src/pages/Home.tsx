import Layout from "@/components/Layout";
import NewsCard from "@/components/NewsCard";
import SidebarWidgets from "@/components/SidebarWidgets";
import AdSlot from "@/components/AdSlot";
import { articles, ads } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  // Data selection
  const heroArticle = articles.find(a => a.category === 'politics') || articles[0];
  const topStories = articles.filter(a => a.article_id !== heroArticle.article_id).slice(0, 4);
  const trending = articles.slice().sort(() => Math.random() - 0.5).slice(0, 5);
  
  // Pagination logic for "Latest"
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const latestArticles = articles
    .filter(a => a.article_id !== heroArticle.article_id && !topStories.includes(a))
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
  
  const paginatedLatest = latestArticles.slice(0, page * itemsPerPage);
  const hasMore = paginatedLatest.length < latestArticles.length;

  const topAd = ads.find(a => a.ad_slot === 'top_article');
  const inFeedAd = ads.find(a => a.ad_slot === 'in_feed');
  const sidebarAd = ads.find(a => a.ad_slot === 'sidebar');

  return (
    <Layout>
      <div className="container mx-auto py-8">
        
        {/* Top Section: Hero + Top Stories */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 border-b border-foreground pb-12">
          {/* Hero (Left, larger) */}
          <div className="lg:col-span-8">
            <div className="mb-2 border-b border-foreground pb-1">
              <h2 className="font-bold uppercase tracking-widest text-sm">Lead Story</h2>
            </div>
            <NewsCard article={heroArticle} variant="hero" />
          </div>

          {/* Top Stories (Right, list) */}
          <div className="lg:col-span-4 flex flex-col gap-6 border-l border-border pl-0 lg:pl-8">
            <div className="mb-2 border-b border-foreground pb-1">
              <h2 className="font-bold uppercase tracking-widest text-sm">Top Stories</h2>
            </div>
            {topStories.map(article => (
              <NewsCard key={article.article_id} article={article} variant="compact" />
            ))}
          </div>
        </section>

        {/* Ad Banner */}
        {topAd && <AdSlot ad={topAd} slot="top_article" className="mb-12" />}

        {/* Main Content Area: Latest + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Latest News Feed */}
          <div className="lg:col-span-8">
            <div className="mb-6 border-b-4 border-foreground pb-2 flex justify-between items-end">
              <h2 className="font-serif text-3xl font-bold">Latest News</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {paginatedLatest.map((article, index) => (
                <div key={article.article_id}>
                  <NewsCard article={article} />
                  {/* Insert Ad after 3rd item */}
                  {index === 2 && inFeedAd && (
                    <AdSlot ad={inFeedAd} slot="in_feed" className="md:col-span-2" />
                  )}
                </div>
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
                  Load More Stories
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
