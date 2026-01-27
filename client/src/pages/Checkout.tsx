import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { useLocation } from "wouter";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function Checkout() {
  const [location, setLocation] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const initialPlan = searchParams.get("plan") || "monthly";

  const [step, setStep] = useState(1);
  const [plan, setPlan] = useState(initialPlan);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleNext = () => {
    setError("");
    if (step === 1) {
      if (!email || !email.includes("@")) {
        setError("Please enter a valid email address.");
        return;
      }
      if (!password || password.length < 6) {
        setError("Password must be at least 6 characters.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      if (!cardNumber || cardNumber.length < 16) {
        setError("Please enter a valid card number.");
        return;
      }
      if (!expiry || !cvc) {
        setError("Please complete all payment fields.");
        return;
      }
      
      // Simulate processing
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep(4);
      }, 2000);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto py-12 max-w-2xl">
        
        {/* Progress Bar */}
        <div className="flex justify-between mb-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-muted -z-10" />
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className={`flex flex-col items-center gap-2 bg-background px-2 ${s <= step ? 'text-primary' : 'text-muted-foreground'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 font-bold text-sm ${s <= step ? 'border-primary bg-primary text-primary-foreground' : 'border-muted-foreground bg-background'}`}>
                {s < step ? <CheckCircle2 className="w-5 h-5" /> : s}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider hidden sm:block">
                {s === 1 ? "Account" : s === 2 ? "Plan" : s === 3 ? "Payment" : "Done"}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border p-8 shadow-sm">
          
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
              <h2 className="font-serif text-2xl font-bold">Create your account</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="you@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Create a password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
              <h2 className="font-serif text-2xl font-bold">Select your plan</h2>
              <RadioGroup value={plan} onValueChange={setPlan} className="space-y-4">
                <div className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer hover:bg-muted/50 ${plan === 'monthly' ? 'border-primary bg-muted/30' : 'border-border'}`}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="monthly" id="monthly" />
                    <Label htmlFor="monthly" className="cursor-pointer">
                      <span className="block font-bold text-lg">Monthly</span>
                      <span className="block text-sm text-muted-foreground">Billed monthly, cancel anytime</span>
                    </Label>
                  </div>
                  <span className="font-serif font-bold text-xl">$9.99</span>
                </div>
                
                <div className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer hover:bg-muted/50 ${plan === 'yearly' ? 'border-primary bg-muted/30' : 'border-border'}`}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yearly" id="yearly" />
                    <Label htmlFor="yearly" className="cursor-pointer">
                      <span className="block font-bold text-lg">Yearly</span>
                      <span className="block text-sm text-muted-foreground">Billed annually, save 17%</span>
                    </Label>
                  </div>
                  <span className="font-serif font-bold text-xl">$99.99</span>
                </div>
              </RadioGroup>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
              <h2 className="font-serif text-2xl font-bold">Payment Details</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="card">Card Number</Label>
                  <Input 
                    id="card" 
                    placeholder="0000 0000 0000 0000" 
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input 
                      id="expiry" 
                      placeholder="MM/YY" 
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input 
                      id="cvc" 
                      placeholder="123" 
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center space-y-6 py-8 animate-in fade-in zoom-in-95">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold mb-2">Welcome Aboard!</h2>
                <p className="text-muted-foreground">
                  Your subscription has been confirmed. You now have unlimited access.
                </p>
              </div>
              <Button onClick={() => setLocation("/")} size="lg" className="w-full font-bold uppercase tracking-wider">
                Start Reading
              </Button>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mt-6 p-3 bg-destructive/10 text-destructive flex items-center gap-2 text-sm font-medium rounded-md">
              <AlertCircle className="w-4 h-4" />
              {error}
            </div>
          )}

          {/* Navigation Buttons */}
          {step < 4 && (
            <div className="mt-8 flex justify-between pt-6 border-t border-border">
              {step > 1 ? (
                <Button variant="ghost" onClick={() => setStep(step - 1)}>Back</Button>
              ) : (
                <Button variant="ghost" onClick={() => setLocation("/subscribe")}>Cancel</Button>
              )}
              
              <Button onClick={handleNext} disabled={isLoading} className="min-w-[120px]">
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : step === 3 ? "Pay Now" : "Next"}
              </Button>
            </div>
          )}

        </div>
      </div>
    </Layout>
  );
}
