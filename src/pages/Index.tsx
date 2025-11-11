import { Navigation } from "@/components/Navigation";
import { IntroSection } from "@/components/IntroSection";
import { ExecutiveSummary } from "@/components/ExecutiveSummary";
import { ProductsOverview } from "@/components/ProductsOverview";
import { TimelineSection } from "@/components/TimelineSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      <main className="pt-16">
        <IntroSection />
        <ExecutiveSummary />
        <ProductsOverview />
        <TimelineSection />
        <ArchitectureSection />
      </main>
      <footer className="bg-card border-t border-border py-8 text-center">
        <p className="text-sm text-muted-foreground">
          TechnoRetail Digital Transformation Proposal • Adobe Experience Cloud Solution Architecture
        </p>
      </footer>
    </div>
  );
};

export default Index;
