import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <div className="container mx-auto py-24 text-center max-w-lg">
        <FileQuestion className="w-24 h-24 mx-auto mb-8 text-muted-foreground" />
        <h1 className="font-serif text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/">
          <Button size="lg" className="font-bold uppercase tracking-wider">
            Return Home
          </Button>
        </Link>
      </div>
    </Layout>
  );
}
