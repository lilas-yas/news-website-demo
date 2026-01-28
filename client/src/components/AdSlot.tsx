import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface AdSlotProps {
  className?: string;
}

export default function AdSlot({ className }: AdSlotProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <div
      className={cn(
        "bg-muted/30 border border-border p-4 flex items-center justify-center text-center my-8 overflow-hidden",
        className
      )}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", minHeight: 250 }}
        data-ad-client="pub-5313554185887378"
        data-ad-slot="1234567890"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
