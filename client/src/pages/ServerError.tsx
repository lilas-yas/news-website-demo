import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ServerCrash } from "lucide-react";

export default function ServerError() {
  return (
    <Layout>
      <div className="container mx-auto py-24 text-center max-w-lg">
        <ServerCrash className="w-24 h-24 mx-auto mb-8 text-destructive" />
        <h1 className="font-serif text-6xl font-bold mb-4">500</h1>
        <h2 className="text-2xl font-bold mb-6">Internal Server Error</h2>
        <p className="text-muted-foreground mb-8">
          Something went wrong on our end. We are working to fix the issue. Please try again later.
        </p>
        <div className="flex justify-center gap-4">
          <Button onClick={() => window.location.reload()} variant="outline" size="lg" className="font-bold uppercase tracking-wider">
            Refresh Page
          </Button>
          <Link href="/">
            <Button size="lg" className="font-bold uppercase tracking-wider">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
