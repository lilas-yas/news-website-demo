import Layout from "@/components/Layout";

export default function Privacy() {
  return (
    <Layout>
      <div className="container mx-auto py-12 max-w-3xl">
        <h1 className="font-serif text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: January 1, 2024</p>
        
        <div className="prose prose-sm max-w-none">
          <p>
            At The Daily Chronicle, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
          </p>

          <h3>1. Information We Collect</h3>
          <p>
            We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, payment information, and any other information you choose to provide.
          </p>

          <h3>2. How We Use Your Information</h3>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide, maintain, and improve our services.</li>
            <li>Process transactions and send you related information.</li>
            <li>Send you technical notices, updates, security alerts, and support messages.</li>
            <li>Respond to your comments, questions, and requests.</li>
          </ul>

          <h3>3. Data Security</h3>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
          </p>

          <h3>4. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@dailychronicle.com.
          </p>
        </div>
      </div>
    </Layout>
  );
}
