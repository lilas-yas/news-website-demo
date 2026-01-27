import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { User, CreditCard, Settings, LogOut } from "lucide-react";
import { Link } from "wouter";

export default function Account() {
  // Mock user data
  const user = {
    name: "Demo User",
    email: "demo@example.com",
    plan: "Monthly",
    status: "Active",
    nextBilling: "November 21, 2024"
  };

  return (
    <Layout>
      <div className="container mx-auto py-12 max-w-4xl">
        <h1 className="font-serif text-4xl font-bold mb-8">My Account</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Sidebar Nav */}
          <div className="md:col-span-1 space-y-2">
            <Button variant="secondary" className="w-full justify-start gap-2 font-bold">
              <User className="w-4 h-4" /> Profile
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <CreditCard className="w-4 h-4" /> Subscription
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Settings className="w-4 h-4" /> Settings
            </Button>
            <div className="pt-4 border-t border-border mt-4">
              <Button variant="ghost" className="w-full justify-start gap-2 text-destructive hover:text-destructive hover:bg-destructive/10">
                <LogOut className="w-4 h-4" /> Sign Out
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            
            {/* Profile Section */}
            <div className="bg-card border border-border p-6">
              <h2 className="font-bold uppercase tracking-widest text-sm text-muted-foreground mb-6">Profile Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-muted-foreground block mb-1">Full Name</label>
                  <p className="font-medium text-lg">{user.name}</p>
                </div>
                <div>
                  <label className="text-xs font-bold text-muted-foreground block mb-1">Email Address</label>
                  <p className="font-medium text-lg">{user.email}</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="mt-6">Edit Profile</Button>
            </div>

            {/* Subscription Section */}
            <div className="bg-card border border-border p-6">
              <h2 className="font-bold uppercase tracking-widest text-sm text-muted-foreground mb-6">Subscription Status</h2>
              
              <div className="flex items-center justify-between mb-6 p-4 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-bold text-xl mb-1">{user.plan} Plan</p>
                  <p className="text-sm text-muted-foreground">Next billing date: {user.nextBilling}</p>
                </div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {user.status}
                </span>
              </div>

              <div className="flex gap-4">
                <Link href="/subscribe">
                  <Button>Upgrade Plan</Button>
                </Link>
                <Button variant="outline">Manage Payment Method</Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
