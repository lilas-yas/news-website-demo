import Layout from "@/components/Layout";
import NewsCard from "@/components/NewsCard";
import SidebarWidgets from "@/components/SidebarWidgets";
import AdSlot from "@/components/AdSlot";
import { articles, ads } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { useRoute, Link } from "wouter";
import NotFound from "./NotFound";
import { Clock, Share2, MessageSquare, Lock } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ArticlePage() {
  const [match, params] = useRoute("/article/:id");
  const articleId = params?.id;
  const article = articles.find(a => a.article_id === articleId);
  
  const relatedArticles = articles
    .filter(a => a.category === article?.category && a.article_id !== articleId)
    .slice(0, 3);
    
  const trending = articles.slice().sort(() => Math.random() - 0.5).slice(0, 5);
  
  const topAd = ads.find(a => a.ad_slot === 'top_article');
  const sidebarAd = ads.find(a => a.ad_slot === 'sidebar');

  // Mock comments state
  const [comments, setComments] = useState([
    { id: 1, user: "John Doe", text: "This is a very insightful article. Thanks for sharing!", date: "2 hours ago" },
    { id: 2, user: "Jane Smith", text: "I disagree with the second point, but overall good analysis.", date: "5 hours ago" }
  ]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { 
        id: comments.length + 1, 
        user: "Guest User", 
        text: newComment, 
        date: "Just now" 
      }]);
      setNewComment("");
    }
  };

  if (!match || !article) {
    return <NotFound />;
  }

  return (
    <Layout>
      <article className="pb-12">
        {/* Article Header */}
        <header className="container mx-auto max-w-4xl pt-8 pb-8 text-center">
          <Link href={`/category/${article.category}`}>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-4 hover:underline cursor-pointer">
              {article.category}
            </span>
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {article.title}
          </h1>
          {article.subtitle && (
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6 font-serif">
              {article.subtitle}
            </p>
          )}
          
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground border-y border-border py-4">
            <span className="font-bold text-foreground uppercase tracking-wider">By {article.author}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {new Date(article.published_at).toLocaleDateString()}</span>
            <span>•</span>
            <span>{article.reading_time_minutes} min read</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="container mx-auto max-w-5xl mb-12">
          <div className="aspect-[2/1] w-full overflow-hidden bg-muted">
            <img src={article.hero_image_url} alt={article.title} className="w-full h-full object-cover" />
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-right">Image source: Unsplash</p>
        </div>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 lg:col-start-1">
            
            {/* Share Buttons (Mobile/Desktop inline) */}
            <div className="flex gap-2 mb-8">
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="w-4 h-4" /> Share
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <MessageSquare className="w-4 h-4" /> {comments.length} Comments
              </Button>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none font-serif prose-headings:font-sans prose-headings:font-bold prose-a:text-primary">
              {/* Premium Gate Check */}
              {article.is_premium ? (
                <>
                  <div dangerouslySetInnerHTML={{ __html: article.content.split('</p>')[0] + '</p>' }} />
                  <div className="relative mt-8 p-8 border border-primary/20 bg-muted/30 text-center rounded-none overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 pointer-events-none" />
                    <div className="relative z-10">
                      <Lock className="w-12 h-12 mx-auto mb-4 text-primary" />
                      <h3 className="font-sans text-2xl font-bold mb-2">Keep Reading with a Subscription</h3>
                      <p className="text-muted-foreground mb-6">
                        This article is exclusively for subscribers. Support independent journalism and get unlimited access.
                      </p>
                      <Link href="/subscribe">
                        <Button size="lg" className="font-bold uppercase tracking-wider">
                          Subscribe Now
                        </Button>
                      </Link>
                      <p className="mt-4 text-sm">
                        Already a subscriber? <Link href="/account" className="underline font-bold">Log in</Link>
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div dangerouslySetInnerHTML={{ __html: article.content }} />
                  {topAd && <AdSlot ad={topAd} slot="mid_article" />}
                </>
              )}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-6 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <span key={tag} className="bg-muted px-3 py-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Comments Section */}
            <div className="mt-16 pt-8 border-t-4 border-foreground">
              <h3 className="font-sans text-2xl font-bold mb-8">Comments ({comments.length})</h3>
              
              <form onSubmit={handleCommentSubmit} className="mb-12 bg-muted/30 p-6">
                <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Join the conversation</h4>
                <Textarea 
                  placeholder="What are your thoughts?" 
                  className="bg-background mb-4"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <Button type="submit" disabled={!newComment.trim()}>Post Comment</Button>
              </form>

              <div className="space-y-8">
                {comments.map(comment => (
                  <div key={comment.id} className="border-b border-border pb-6">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-bold">{comment.user}</span>
                      <span className="text-xs text-muted-foreground">{comment.date}</span>
                    </div>
                    <p className="text-sm leading-relaxed">{comment.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12 border-l border-border pl-0 lg:pl-8">
            {sidebarAd && <AdSlot ad={sidebarAd} slot="sidebar" />}
            <SidebarWidgets trendingArticles={trending} />
          </aside>

        </div>

        {/* Related Articles */}
        <div className="container mx-auto mt-24 pt-12 border-t-4 border-foreground">
          <h3 className="font-sans text-2xl font-bold mb-8 uppercase tracking-widest">Related Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map(article => (
              <NewsCard key={article.article_id} article={article} />
            ))}
          </div>
        </div>

      </article>
    </Layout>
  );
}
