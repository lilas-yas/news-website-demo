import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto py-12 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">About The Daily Chronicle</h1>
        
        <div className="prose prose-lg max-w-none font-serif">
          <p className="lead text-xl text-muted-foreground mb-8">
            Founded in 1924, The Daily Chronicle has been dedicated to delivering fearless, independent journalism for over a century.
          </p>
          
          <p>
            Our mission is simple: to seek the truth and report it. In an era of misinformation and polarized debate, we strive to be a beacon of clarity and objectivity. We believe that a well-informed public is the cornerstone of a healthy democracy.
          </p>

          <h3>Our Values</h3>
          <ul>
            <li><strong>Integrity:</strong> We adhere to the highest standards of journalistic ethics.</li>
            <li><strong>Independence:</strong> We are reader-supported and beholden to no corporate or political interests.</li>
            <li><strong>Excellence:</strong> We are committed to accuracy, depth, and nuance in our reporting.</li>
          </ul>

          <h3>Our Team</h3>
          <p>
            Our newsroom is home to over 200 journalists, editors, and photographers working across five continents. They have won numerous awards, including 12 Pulitzer Prizes, for their coverage of global conflict, economic shifts, and environmental crises.
          </p>
        </div>
      </div>
    </Layout>
  );
}
