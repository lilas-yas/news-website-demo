export interface Article {
  article_id: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string; // HTML or Markdown string
  category: 'politics' | 'economy' | 'technology' | 'sports' | 'climate';
  tags: string[];
  author: string;
  published_at: string; // ISO date string
  updated_at?: string;
  hero_image_url: string;
  reading_time_minutes: number;
  is_premium: boolean;
}

export interface Ad {
  ad_id: string;
  ad_slot: 'top_article' | 'mid_article' | 'sidebar' | 'in_feed' | 'footer';
  targeting_context?: string[];
  creative_url?: string; // Image URL or mock content
  landing_url: string;
  title?: string; // For text ads
  advertiser?: string;
}

export interface User {
  user_id: string;
  email: string;
  name: string;
  subscription_status: 'active' | 'inactive' | 'past_due';
  subscription_plan?: 'monthly' | 'yearly';
  joined_at: string;
}
