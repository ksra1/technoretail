import { Navigation } from "@/components/Navigation";
import { IntroSection } from "@/components/IntroSection";
import { ExecutiveSummary } from "@/components/ExecutiveSummary";
import { ProductsOverview } from "@/components/ProductsOverview";
import { TimelineSection } from "@/components/TimelineSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { ResourcePlan } from "@/components/ResourcePlan";

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      <main className="pt-16">
        <IntroSection />
        <ExecutiveSummary />
        <ProductsOverview />
        <ArchitectureSection />
        <TimelineSection />
        <ResourcePlan />
      </main>
      <footer className="bg-card border-t border-border py-8 text-center">
        <p className="text-sm text-muted-foreground mb-2">
          TechnoRetail Digital Transformation Proposal • Adobe Experience Cloud Solution Architecture
        </p>
        <p className="text-sm text-muted-foreground">
          Prepared by Sravan Kollapudi
        </p>
      </footer>
    </div>
  );
};

export default Index;
