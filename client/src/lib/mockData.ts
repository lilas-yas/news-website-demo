import { Article, Ad } from "./types";

// Helper to generate dates
const daysAgo = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString();
};

export const articles: Article[] = [
  // POLITICS (12 articles)
  {
    article_id: "pol-001",
    title: "Global Summit Reaches Historic Agreement on Trade Tariffs",
    subtitle: "Leaders from 20 nations sign accord to reduce barriers and foster economic cooperation.",
    excerpt: "After days of intense negotiations, world leaders have announced a breakthrough in trade relations that promises to reshape the global economy for the next decade.",
    content: `
      <p>GENEVA — In a landmark decision that defies recent trends toward protectionism, leaders from the world's twenty largest economies signed a comprehensive trade agreement on Friday, aiming to slash tariffs and harmonize regulatory standards across borders.</p>
      
      <p>The "Geneva Accord," as it is being called, comes after a week of grueling negotiations that often stretched late into the night. "This is a victory for global prosperity," said the summit's host, clearly exhausted but triumphant during the closing press conference.</p>
      
      <h2>A New Era of Cooperation?</h2>
      
      <p>Analysts suggest this move could add up to 1.5% to global GDP over the next five years. However, domestic opposition in several key signatory nations remains fierce. Labor unions have already announced protests, fearing that the harmonization of standards could lead to a "race to the bottom" in worker protections.</p>
      
      <p>"We are not just signing a paper; we are signing a pledge to our future generations," the US representative stated. The agreement covers sectors ranging from automotive manufacturing to digital services, the latter being a major sticking point in previous rounds of talks.</p>
      
      <blockquote>"History will look back on this moment as the turning point where we chose unity over division."</blockquote>
      
      <p>Implementation is set to begin in phases starting next January, giving industries time to adapt to the new regulations. Markets reacted positively to the news, with major indices in New York, London, and Tokyo all closing higher.</p>
    `,
    category: "politics",
    tags: ["trade", "summit", "global economy", "diplomacy"],
    author: "Sarah Jenkins",
    published_at: daysAgo(0),
    hero_image_url: "/images/politics-hero.jpg",
    reading_time_minutes: 6,
    is_premium: false
  },
  {
    article_id: "pol-002",
    title: "Senate Passes Controversial Infrastructure Bill Amidst Filibuster Threats",
    excerpt: "The 60-40 vote clears the way for major renovations to the nation's crumbling bridges and roads.",
    content: "<p>WASHINGTON — The Senate passed the long-awaited infrastructure package late Thursday...</p>",
    category: "politics",
    tags: ["senate", "infrastructure", "legislation"],
    author: "Michael Ross",
    published_at: daysAgo(1),
    hero_image_url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 4,
    is_premium: true
  },
  {
    article_id: "pol-003",
    title: "Local Elections Show Shift in Voter Sentiment",
    excerpt: "Early results from municipal elections suggest a move away from incumbent parties.",
    content: "<p>Voters across the country headed to the polls yesterday in what many are calling a bellwether for the upcoming national elections...</p>",
    category: "politics",
    tags: ["elections", "local politics", "voting"],
    author: "Elena Rodriguez",
    published_at: daysAgo(2),
    hero_image_url: "https://images.unsplash.com/photo-1575320181282-9afab399332c?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 5,
    is_premium: false
  },
  {
    article_id: "pol-004",
    title: "New Policy on Education Funding Sparks Debate",
    excerpt: "Teachers' unions and parent groups clash over the proposed allocation of state funds.",
    content: "<p>The Department of Education's latest proposal to tie funding to standardized test scores has ignited a firestorm of controversy...</p>",
    category: "politics",
    tags: ["education", "policy", "funding"],
    author: "David Chen",
    published_at: daysAgo(3),
    hero_image_url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 7,
    is_premium: true
  },
  {
    article_id: "pol-005",
    title: "Diplomatic Tensions Rise in the South Sea",
    excerpt: "Naval exercises by neighboring countries have led to a sharp exchange of words.",
    content: "<p>Tensions in the South Sea escalated this week as two naval destroyers came within 500 yards of each other...</p>",
    category: "politics",
    tags: ["diplomacy", "military", "international relations"],
    author: "Robert Stone",
    published_at: daysAgo(0),
    hero_image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 5,
    is_premium: false
  },
  {
    article_id: "pol-006",
    title: "Mayor Announces Resignation Following Scandal",
    excerpt: "City Hall is in turmoil as the mayor steps down effective immediately.",
    content: "<p>In a stunning press conference this morning, Mayor Johnson announced he would be vacating his office...</p>",
    category: "politics",
    tags: ["local politics", "scandal", "resignation"],
    author: "Jennifer Wu",
    published_at: daysAgo(4),
    hero_image_url: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 3,
    is_premium: false
  },
  {
    article_id: "pol-007",
    title: "Healthcare Reform Bill Stalls in Committee",
    excerpt: "Partisan gridlock continues to plague the latest effort to overhaul the healthcare system.",
    content: "<p>Hopes for a bipartisan healthcare deal faded today as the Senate Health Committee failed to advance the bill...</p>",
    category: "politics",
    tags: ["healthcare", "congress", "legislation"],
    author: "Sarah Jenkins",
    published_at: daysAgo(5),
    hero_image_url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 8,
    is_premium: true
  },
  {
    article_id: "pol-008",
    title: "Interview: The Opposition Leader Speaks Out",
    excerpt: "An exclusive conversation with the person aiming to become the next Prime Minister.",
    content: "<p>We sat down with Opposition Leader Margaret Hale to discuss her vision for the country's future...</p>",
    category: "politics",
    tags: ["interview", "politics", "election"],
    author: "Michael Ross",
    published_at: daysAgo(6),
    hero_image_url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 10,
    is_premium: true
  },
  {
    article_id: "pol-009",
    title: "City Council Votes to Ban Single-Use Plastics",
    excerpt: "The new ordinance will take effect next year, affecting thousands of businesses.",
    content: "<p>Environmental advocates cheered as the City Council voted 7-2 to ban single-use plastic bags and straws...</p>",
    category: "politics",
    tags: ["environment", "local politics", "policy"],
    author: "Elena Rodriguez",
    published_at: daysAgo(1),
    hero_image_url: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 4,
    is_premium: false
  },
  {
    article_id: "pol-010",
    title: "Supreme Court to Hear Landmark Privacy Case",
    excerpt: "The case could redefine digital privacy rights for the 21st century.",
    content: "<p>The Supreme Court announced today that it will hear arguments in <i>Doe v. United States</i>...</p>",
    category: "politics",
    tags: ["supreme court", "privacy", "law"],
    author: "David Chen",
    published_at: daysAgo(2),
    hero_image_url: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 6,
    is_premium: false
  },

  // ECONOMY (10 articles)
  {
    article_id: "eco-001",
    title: "Markets Rally as Inflation Data Shows Cooling Trend",
    subtitle: "Consumer Price Index rose less than expected in October, signaling relief for the central bank.",
    excerpt: "Wall Street surged on Wednesday after the latest government report showed inflation slowing faster than economists had predicted.",
    content: `
      <p>NEW YORK — Stocks rallied sharply today, with the Dow Jones Industrial Average gaining over 500 points, as investors cheered the latest sign that the Federal Reserve's aggressive interest rate hikes are finally taming inflation.</p>
      
      <p>The Consumer Price Index (CPI) rose 3.2% year-over-year, down from 3.7% the previous month. Core inflation, which excludes volatile food and energy prices, also came in below expectations.</p>
      
      <h2>What This Means for Rates</h2>
      
      <p>"This is the Goldilocks scenario everyone was hoping for," said Maria Gonzalez, Chief Economist at Horizon Bank. "The economy is cooling enough to bring prices down, but not so fast that we're crashing into a recession."</p>
      
      <p>Traders are now pricing in a 90% chance that the Fed will hold rates steady at their next meeting. The yield on the 10-year Treasury note dropped significantly, easing pressure on mortgage rates.</p>
    `,
    category: "economy",
    tags: ["markets", "inflation", "federal reserve", "stocks"],
    author: "James Sterling",
    published_at: daysAgo(0),
    hero_image_url: "/images/economy-hero.jpg",
    reading_time_minutes: 5,
    is_premium: true
  },
  {
    article_id: "eco-002",
    title: "Tech Giant Announces Major Layoffs",
    excerpt: "Over 10,000 employees to be affected as the company restructures for AI focus.",
    content: "<p>In a move that has sent shockwaves through Silicon Valley, TechCorp announced today...</p>",
    category: "economy",
    tags: ["tech", "layoffs", "business"],
    author: "Amanda Liu",
    published_at: daysAgo(1),
    hero_image_url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 4,
    is_premium: false
  },
  {
    article_id: "eco-003",
    title: "Oil Prices Surge Amidst Geopolitical Uncertainty",
    excerpt: "Brent crude tops $90 a barrel as supply concerns mount.",
    content: "<p>Global energy markets are on edge again as tensions in the Middle East threaten supply lines...</p>",
    category: "economy",
    tags: ["oil", "energy", "markets"],
    author: "James Sterling",
    published_at: daysAgo(2),
    hero_image_url: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 3,
    is_premium: true
  },
  {
    article_id: "eco-004",
    title: "Housing Market Cools as Mortgage Rates Remain High",
    excerpt: "Home sales have dropped to their lowest level in a decade.",
    content: "<p>The dream of homeownership is becoming increasingly out of reach for many Americans...</p>",
    category: "economy",
    tags: ["real estate", "housing", "economy"],
    author: "Sarah Jenkins",
    published_at: daysAgo(3),
    hero_image_url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 6,
    is_premium: false
  },
  {
    article_id: "eco-005",
    title: "Crypto Regulation: What Investors Need to Know",
    excerpt: "New SEC rules could change the landscape for digital assets.",
    content: "<p>The Securities and Exchange Commission unveiled a new framework for regulating cryptocurrencies...</p>",
    category: "economy",
    tags: ["crypto", "regulation", "finance"],
    author: "Amanda Liu",
    published_at: daysAgo(4),
    hero_image_url: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 7,
    is_premium: true
  },
  {
    article_id: "eco-006",
    title: "Small Business Optimism Index Hits Record Low",
    excerpt: "Inflation and labor shortages continue to plague Main Street.",
    content: "<p>Small business owners are more pessimistic about the future than at any time in the last 40 years...</p>",
    category: "economy",
    tags: ["small business", "economy", "survey"],
    author: "James Sterling",
    published_at: daysAgo(5),
    hero_image_url: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 4,
    is_premium: false
  },
  {
    article_id: "eco-007",
    title: "The Rise of the Gig Economy: A Double-Edged Sword",
    excerpt: "Flexibility comes at the cost of stability for millions of workers.",
    content: "<p>For 28-year-old graphic designer Mark Thompson, the gig economy offers freedom...</p>",
    category: "economy",
    tags: ["labor", "gig economy", "work"],
    author: "Elena Rodriguez",
    published_at: daysAgo(6),
    hero_image_url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 8,
    is_premium: false
  },
  {
    article_id: "eco-008",
    title: "Automaker Strikes Deal with Union, Averting Shutdown",
    excerpt: "The last-minute agreement includes a 25% wage increase over four years.",
    content: "<p>Negotiators for AutoGiant and the United Auto Workers shook hands on a tentative deal at 3 AM...</p>",
    category: "economy",
    tags: ["labor", "auto industry", "union"],
    author: "Michael Ross",
    published_at: daysAgo(1),
    hero_image_url: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 5,
    is_premium: false
  },

  // TECHNOLOGY (10 articles)
  {
    article_id: "tech-001",
    title: "Quantum Computing Breakthrough: Scientists Achieve Stable Qubits",
    subtitle: "The new method could pave the way for commercially viable quantum computers within the decade.",
    excerpt: "Researchers at MIT have demonstrated a new technique for maintaining quantum coherence for record-breaking durations.",
    content: `
      <p>CAMBRIDGE, MA — In a paper published today in <i>Nature</i>, a team of physicists announced they have solved one of the most persistent problems in quantum computing: error correction.</p>
      
      <p>Quantum computers rely on qubits, which can exist in multiple states simultaneously. However, they are notoriously unstable and prone to "decoherence" from the slightest environmental noise. The new method uses a hexagonal lattice structure to shield the qubits.</p>
      
      <h2>Why It Matters</h2>
      
      <p>"This is the 'Hello World' moment for fault-tolerant quantum computing," said Dr. Aris Thorne, lead author of the study. "We are no longer just theorizing; we are building."</p>
      
      <p>The implications are staggering. A stable quantum computer could revolutionize drug discovery, materials science, and cryptography. Major tech companies are already racing to license the technology.</p>
    `,
    category: "technology",
    tags: ["quantum computing", "science", "innovation", "research"],
    author: "Dr. Aris Thorne",
    published_at: daysAgo(0),
    hero_image_url: "/images/tech-hero.jpg",
    reading_time_minutes: 8,
    is_premium: true
  },
  {
    article_id: "tech-002",
    title: "AI Regulation: EU Passes Landmark Act",
    excerpt: "The world's first comprehensive AI law sets strict rules for high-risk applications.",
    content: "<p>The European Parliament voted overwhelmingly today to adopt the AI Act...</p>",
    category: "technology",
    tags: ["AI", "regulation", "EU"],
    author: "Amanda Liu",
    published_at: daysAgo(1),
    hero_image_url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 6,
    is_premium: false
  },
  {
    article_id: "tech-003",
    title: "Review: The New Phone X Pro",
    excerpt: "Is the titanium frame and periscope lens worth the $1,200 price tag?",
    content: "<p>Every year we ask the same question: do you really need to upgrade? This year...</p>",
    category: "technology",
    tags: ["review", "smartphones", "gadgets"],
    author: "David Chen",
    published_at: daysAgo(2),
    hero_image_url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 10,
    is_premium: false
  },
  {
    article_id: "tech-004",
    title: "Cyberattack Hits Major Hospital System",
    excerpt: "Ransomware gang demands $50 million as surgeries are cancelled.",
    content: "<p>A massive cyberattack has paralyzed the computer networks of HealthPlus...</p>",
    category: "technology",
    tags: ["cybersecurity", "hacking", "crime"],
    author: "Robert Stone",
    published_at: daysAgo(3),
    hero_image_url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 4,
    is_premium: false
  },
  {
    article_id: "tech-005",
    title: "Social Media CEO Testifies Before Congress",
    excerpt: "Lawmakers grilled the tech executive on child safety and data privacy.",
    content: "<p>In a tense hearing that lasted over five hours, senators accused the platform of...</p>",
    category: "technology",
    tags: ["social media", "congress", "privacy"],
    author: "Sarah Jenkins",
    published_at: daysAgo(4),
    hero_image_url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 7,
    is_premium: true
  },
  {
    article_id: "tech-006",
    title: "The Future of EV Batteries: Solid State is Here",
    excerpt: "Toyota claims new battery tech will offer 700-mile range and 10-minute charging.",
    content: "<p>The holy grail of electric vehicles—the solid-state battery—may finally be ready for mass production...</p>",
    category: "technology",
    tags: ["EV", "automotive", "green tech"],
    author: "James Sterling",
    published_at: daysAgo(5),
    hero_image_url: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 5,
    is_premium: false
  },
  {
    article_id: "tech-007",
    title: "SpaceX Launches Next-Gen Starship",
    excerpt: "The massive rocket achieved orbit for the first time in a successful test flight.",
    content: "<p>Thunder roared across the Texas coast this morning as the largest rocket ever built...</p>",
    category: "technology",
    tags: ["space", "SpaceX", "science"],
    author: "Amanda Liu",
    published_at: daysAgo(1),
    hero_image_url: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 4,
    is_premium: false
  },

  // SPORTS (8 articles)
  {
    article_id: "spt-001",
    title: "United Wins Championship in Thrilling Penalty Shootout",
    subtitle: "After a 2-2 draw in extra time, the underdogs clinch the title.",
    excerpt: "In a match that will be remembered for decades, United defeated City to lift the cup for the first time in 20 years.",
    content: `
      <p>WEMBLEY — It came down to the final kick. When the ball hit the back of the net, the stadium erupted in a noise that could be heard for miles.</p>
      
      <p>United, the perennial underdogs, had done the impossible. They held the league champions to a draw over 120 grueling minutes before keeping their cool from the spot.</p>
      
      <h2>The Turning Point</h2>
      
      <p>The match seemed lost when City went up 2-0 in the first half. But a tactical shift at halftime changed everything. "We knew we had to be brave," said United's manager. "We stopped respecting them too much and started playing our game."</p>
    `,
    category: "sports",
    tags: ["soccer", "championship", "united"],
    author: "Tom Brady",
    published_at: daysAgo(0),
    hero_image_url: "/images/sports-hero.jpg",
    reading_time_minutes: 5,
    is_premium: false
  },
  {
    article_id: "spt-002",
    title: "Star Quarterback Traded in Blockbuster Deal",
    excerpt: "The three-team trade shakes up the league landscape just weeks before the season.",
    content: "<p>NFL sources confirmed today that...</p>",
    category: "sports",
    tags: ["NFL", "football", "trade"],
    author: "Tom Brady",
    published_at: daysAgo(1),
    hero_image_url: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 3,
    is_premium: false
  },
  {
    article_id: "spt-003",
    title: "Tennis Legend Announces Retirement",
    excerpt: "After 20 Grand Slams, the icon says this season will be the last.",
    content: "<p>In an emotional letter to fans, ...</p>",
    category: "sports",
    tags: ["tennis", "retirement", "legend"],
    author: "Elena Rodriguez",
    published_at: daysAgo(2),
    hero_image_url: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 4,
    is_premium: false
  },
  {
    article_id: "spt-004",
    title: "Olympics: Host City Struggles with Preparations",
    excerpt: "Construction delays and budget overruns plague the upcoming games.",
    content: "<p>With just six months to go...</p>",
    category: "sports",
    tags: ["olympics", "business of sport"],
    author: "Robert Stone",
    published_at: daysAgo(3),
    hero_image_url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 6,
    is_premium: true
  },
  {
    article_id: "spt-005",
    title: "NBA Finals Preview: East vs West",
    excerpt: "A breakdown of the matchups, key players, and predictions.",
    content: "<p>The stage is set for...</p>",
    category: "sports",
    tags: ["NBA", "basketball", "finals"],
    author: "Tom Brady",
    published_at: daysAgo(4),
    hero_image_url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 8,
    is_premium: true
  },

  // CLIMATE (10 articles)
  {
    article_id: "cli-001",
    title: "Antarctic Ice Shelf Collapse Accelerates",
    subtitle: "Satellite data reveals the Thwaites Glacier is melting faster than previously thought.",
    excerpt: "Scientists warn that the 'Doomsday Glacier' could raise sea levels by several feet if it collapses entirely.",
    content: `
      <p>ANTARCTICA — New satellite imagery analyzed by NASA suggests that the Thwaites Glacier is retreating at an unprecedented rate. The glacier, which is roughly the size of Florida, holds enough ice to raise global sea levels by over two feet.</p>
      
      <p>"The structural integrity of the ice shelf is compromised," said Dr. Jane Goodall (no relation). "We are seeing cracks propagating much faster than our models predicted."</p>
      
      <h2>Global Impact</h2>
      
      <p>Coastal cities from Miami to Mumbai are watching closely. Even a small rise in sea levels can exponentially increase the damage from storm surges.</p>
    `,
    category: "climate",
    tags: ["climate change", "environment", "science", "antarctica"],
    author: "Dr. Jane Goodall",
    published_at: daysAgo(0),
    hero_image_url: "/images/climate-hero.jpg",
    reading_time_minutes: 5,
    is_premium: false
  },
  {
    article_id: "cli-002",
    title: "Renewable Energy Surpasses Coal in US Power Generation",
    excerpt: "For the first time in history, wind and solar generated more power than coal plants last year.",
    content: "<p>The energy transition reached a major milestone...</p>",
    category: "climate",
    tags: ["energy", "renewables", "coal"],
    author: "James Sterling",
    published_at: daysAgo(1),
    hero_image_url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 4,
    is_premium: false
  },
  {
    article_id: "cli-003",
    title: "Heatwave Grips Europe: Temperatures Soar to 45°C",
    excerpt: "Wildfires rage across the Mediterranean as the continent faces its hottest summer on record.",
    content: "<p>Authorities in Greece and Italy have declared states of emergency...</p>",
    category: "climate",
    tags: ["weather", "heatwave", "europe"],
    author: "Elena Rodriguez",
    published_at: daysAgo(2),
    hero_image_url: "https://images.unsplash.com/photo-1504370805625-d32c54b16100?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 3,
    is_premium: false
  },
  {
    article_id: "cli-004",
    title: "Ocean Plastic Cleanup Project Hits Milestone",
    excerpt: "The Ocean Cleanup nonprofit has removed 100,000kg of plastic from the Great Pacific Garbage Patch.",
    content: "<p>Using a massive floating barrier system...</p>",
    category: "climate",
    tags: ["ocean", "pollution", "good news"],
    author: "David Chen",
    published_at: daysAgo(3),
    hero_image_url: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 5,
    is_premium: false
  },
  {
    article_id: "cli-005",
    title: "The Economic Cost of Climate Change",
    excerpt: "A new report estimates that climate disasters cost the global economy $300 billion last year.",
    content: "<p>Insurance companies are raising alarms...</p>",
    category: "climate",
    tags: ["economy", "climate change", "insurance"],
    author: "James Sterling",
    published_at: daysAgo(4),
    hero_image_url: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 7,
    is_premium: true
  },
  {
    article_id: "cli-006",
    title: "New Species Discovered in the Amazon Rainforest",
    excerpt: "Biologists have identified a new species of tree frog in a remote part of the jungle.",
    content: "<p>The discovery highlights the incredible biodiversity...</p>",
    category: "climate",
    tags: ["nature", "biodiversity", "science"],
    author: "Dr. Jane Goodall",
    published_at: daysAgo(5),
    hero_image_url: "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 3,
    is_premium: false
  },
  {
    article_id: "cli-007",
    title: "Electric Planes: Are They the Future of Travel?",
    excerpt: "Startups are racing to build battery-powered aircraft for short-haul flights.",
    content: "<p>Imagine flying from New York to Boston with zero emissions...</p>",
    category: "climate",
    tags: ["tech", "travel", "aviation"],
    author: "Amanda Liu",
    published_at: daysAgo(6),
    hero_image_url: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1200&q=80",
    reading_time_minutes: 6,
    is_premium: true
  }
];

export const ads: Ad[] = [
  {
    ad_id: "ad-001",
    ad_slot: "top_article",
    title: "Luxury Watches",
    advertiser: "Rolex",
    landing_url: "https://example.com/watches",
    creative_url: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=600&q=80"
  },
  {
    ad_id: "ad-002",
    ad_slot: "sidebar",
    title: "Cloud Computing Solutions",
    advertiser: "TechCloud",
    landing_url: "https://example.com/cloud",
    creative_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80"
  },
  {
    ad_id: "ad-003",
    ad_slot: "in_feed",
    title: "Best Credit Cards of 2024",
    advertiser: "BankRate",
    landing_url: "https://example.com/cards",
    creative_url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80"
  },
  {
    ad_id: "ad-004",
    ad_slot: "footer",
    title: "Subscribe to Our Newsletter",
    advertiser: "The Daily Chronicle",
    landing_url: "/subscribe",
    creative_url: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?auto=format&fit=crop&w=600&q=80"
  }
];
