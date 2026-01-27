import { Ad } from "@/lib/types";
import { cn } from "@/lib/utils";

interface AdSlotProps {
  ad?: Ad;
  slot: string;
  className?: string;
}

export default function AdSlot({ ad, slot, className }: AdSlotProps) {
  if (!ad) return null;

  return (
    <div className={cn(
      "bg-muted/30 border border-border p-4 flex flex-col items-center justify-center text-center my-8 relative overflow-hidden",
      className
    )}>
      <span className="absolute top-0 right-0 bg-muted text-[10px] px-1 text-muted-foreground uppercase tracking-widest">Advertisement</span>
      
      <a href={ad.landing_url} target="_blank" rel="noopener noreferrer" className="group w-full h-full flex flex-col items-center">
        {ad.creative_url && (
          <img 
            src={ad.creative_url} 
            alt={ad.title || "Advertisement"} 
            className="max-h-[250px] object-contain mb-2 mix-blend-multiply"
          />
        )}
        {ad.title && (
          <h4 className="font-bold text-sm group-hover:underline">{ad.title}</h4>
        )}
        {ad.advertiser && (
          <span className="text-xs text-muted-foreground">Sponsored by {ad.advertiser}</span>
        )}
      </a>
    </div>
  );
}
