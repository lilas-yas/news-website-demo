import Layout from "@/components/Layout";

export default function Terms() {
  return (
    <Layout>
      <div className="container mx-auto py-12 max-w-3xl">
        <h1 className="font-serif text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: January 1, 2024</p>
        
        <div className="prose prose-sm max-w-none">
          <p>
            Please read these Terms of Service ("Terms") carefully before using The Daily Chronicle website operated by us.
          </p>

          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
          </p>

          <h3>2. Subscriptions</h3>
          <p>
            Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis (such as monthly or annually).
          </p>

          <h3>3. Content</h3>
          <p>
            Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.
          </p>

          <h3>4. Changes</h3>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect.
          </p>
        </div>
      </div>
    </Layout>
  );
}
