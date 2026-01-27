import { Article } from "@/lib/types";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Clock, Lock } from "lucide-react";

interface NewsCardProps {
  article: Article;
  variant?: "default" | "compact" | "featured" | "hero";
  className?: string;
}

export default function NewsCard({ article, variant = "default", className }: NewsCardProps) {
  const isHero = variant === "hero";
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";

  return (
    <Link href={`/article/${article.article_id}`}>
      <article 
        className={cn(
          "group cursor-pointer flex flex-col h-full border-b border-border pb-4 mb-4",
          isHero && "border-none pb-0 mb-0",
          className
        )}
      >
        {/* Image */}
        <div className={cn(
          "relative overflow-hidden bg-muted mb-3",
          isHero ? "aspect-[2/1] w-full mb-4" : 
          isFeatured ? "aspect-[3/2] w-full" :
          isCompact ? "hidden" : "aspect-[3/2] w-full"
        )}>
          <img 
            src={article.hero_image_url} 
            alt={article.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          {article.is_premium && (
            <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
              <Lock className="w-3 h-3" /> Premium
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              {article.category}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {new Date(article.published_at).toLocaleDateString()}
            </span>
          </div>

          <h3 className={cn(
            "font-serif font-bold leading-tight group-hover:underline decoration-2 underline-offset-4",
            isHero ? "text-3xl md:text-4xl mb-3" : 
            isFeatured ? "text-xl md:text-2xl mb-2" : 
            "text-lg mb-2"
          )}>
            {article.title}
          </h3>

          {!isCompact && (
            <p className={cn(
              "text-muted-foreground leading-relaxed line-clamp-3",
              isHero ? "text-lg mb-4" : "text-sm"
            )}>
              {article.excerpt}
            </p>
          )}
          
          {isHero && (
            <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-medium">
              By <span className="uppercase tracking-wider">{article.author}</span>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
