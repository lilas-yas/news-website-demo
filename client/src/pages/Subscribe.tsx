import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "wouter";

export default function Subscribe() {
  return (
    <Layout>
      <div className="bg-foreground text-background py-24">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Support Independent Journalism</h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Get unlimited access to The Daily Chronicle's award-winning reporting, expert analysis, and exclusive content.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-16 -mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Monthly Plan */}
          <div className="bg-background border border-border p-8 shadow-lg flex flex-col relative">
            <h3 className="font-bold uppercase tracking-widest text-sm text-muted-foreground mb-4">Monthly Access</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold font-serif">$9.99</span>
              <span className="text-muted-foreground">/ month</span>
            </div>
            <p className="text-sm text-muted-foreground mb-8">Cancel anytime.</p>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0" />
                <span>Unlimited access to all articles</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0" />
                <span>Exclusive subscriber-only newsletters</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0" />
                <span>Ad-free reading experience</span>
              </li>
            </ul>

            <Link href="/checkout?plan=monthly">
              <Button className="w-full h-12 font-bold uppercase tracking-wider" variant="outline">
                Subscribe Monthly
              </Button>
            </Link>
          </div>

          {/* Yearly Plan */}
          <div className="bg-background border-4 border-primary p-8 shadow-xl flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider">
              Best Value
            </div>
            <h3 className="font-bold uppercase tracking-widest text-sm text-primary mb-4">Yearly Access</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold font-serif">$99.99</span>
              <span className="text-muted-foreground">/ year</span>
            </div>
            <p className="text-sm text-muted-foreground mb-8">Save 17% compared to monthly.</p>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0" />
                <span><strong>Everything in Monthly</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0" />
                <span>Digital archive access (back to 2010)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0" />
                <span>Priority event invitations</span>
              </li>
            </ul>

            <Link href="/checkout?plan=yearly">
              <Button className="w-full h-12 font-bold uppercase tracking-wider">
                Subscribe Yearly
              </Button>
            </Link>
          </div>

        </div>

        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="font-bold text-lg mb-4">Why Subscribe?</h3>
          <p className="text-muted-foreground">
            Your subscription funds our newsroom. We don't answer to corporate interests or political parties. We answer to you.
          </p>
        </div>
      </div>
    </Layout>
  );
}
