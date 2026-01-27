import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  return (
    <Layout>
      <div className="container mx-auto py-12 max-w-2xl">
        <h1 className="font-serif text-4xl font-bold mb-8">Contact Us</h1>
        <p className="text-muted-foreground mb-8">
          Have a tip, a question, or feedback? We'd love to hear from you. Fill out the form below and our team will get back to you as soon as possible.
        </p>
        
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="What is this regarding?" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your message..." className="min-h-[150px]" />
          </div>

          <Button type="submit" size="lg" className="w-full md:w-auto font-bold uppercase tracking-wider">
            Send Message
          </Button>
        </form>

        <div className="mt-12 pt-12 border-t border-border">
          <h3 className="font-bold uppercase tracking-widest text-sm mb-4">Other ways to reach us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div>
              <p className="font-bold mb-1">General Inquiries</p>
              <p className="text-muted-foreground">info@dailychronicle.com</p>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
            <div>
              <p className="font-bold mb-1">Press Office</p>
              <p className="text-muted-foreground">press@dailychronicle.com</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
