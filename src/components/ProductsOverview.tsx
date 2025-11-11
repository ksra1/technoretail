import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ProductsOverview = () => {
  const products = [
    {
      name: "CDP",
      fullName: "Customer Data Platform",
      purpose: "Centralizes and unifies customer/event data. Use for building profiles and segments powering personalization and analytics.",
      connects: "AJO, AEM, Target, Adobe Analytics, CJA, Campaign",
      how: "Uses RESTful and streaming APIs to ingest real-time and batch data from sources, and exposes unified segments/profiles to downstream tools via APIs and data sync.",
      why: "Enables unified customer data foundation ensuring all downstream tools have consistent, updated segments and profiles.",
    },
    {
      name: "AJO",
      fullName: "Adobe Journey Optimizer",
      purpose: "Orchestrates real-time, event-driven, omni-channel personalized journeys. Use for most digital campaigns except large bulk email batches.",
      connects: "CDP, Campaign, Target, Email/SMS/Push, CRM, POS, Service, Marketing Automation",
      how: "Uses APIs to fetch audience segments, trigger transactional/real-time messages, and deliver content to channels via SDKs and endpoints; triggers Campaign via APIs for bulk sends.",
      why: "Provides scalable, fast journey orchestration and personalization; leverages Campaign for large-scale batch/offline sends.",
    },
    {
      name: "AEM",
      fullName: "Adobe Experience Manager",
      purpose: "Manages/delivers digital content and assets for web and mobile. Use for centralized brand asset and content management/delivery.",
      connects: "Website Access, Target, CDP, GenStudio",
      how: "Offers RESTful Content Delivery APIs for websites/apps; integrates with Target for real-time personalized experience delivery; ingest assets from GenStudio via asset APIs.",
      why: "Centralizes content and assets so they can be personalized and delivered consistently across channels and AMP solutions.",
    },
    {
      name: "Target",
      fullName: "Adobe Target",
      purpose: "Personalizes and optimizes web/app experiences via A/B and multivariate tests. Use for digital experience optimization.",
      connects: "Website Access, AEM, CDP, AJO",
      how: "Uses client SDKs and REST APIs to retrieve user segments and personalization context, applies content provided by AEM/GenStudio, and integrates journey triggers from AJO.",
      why: "Enables highly personalized, real-time onsite experiences to improve engagement and conversion.",
    },
    {
      name: "Adobe Analytics",
      fullName: "Adobe Analytics",
      purpose: "Collects and analyzes site/app user behavioral data. Use for user behavior insights and campaign/channel performance.",
      connects: "CJA, CDP, Marketing Exec Dash",
      how: "Collects event data through tags and SDKs; provides feeds and APIs to send data into CJA and enrich CDP profiles.",
      why: "Measures, analyzes digital touchpoints to inform personalization, optimize campaigns, and provide journey attribution.",
    },
    {
      name: "CJA",
      fullName: "Customer Journey Analytics",
      purpose: "Delivers real-time, cross-channel customer journey analytics and reporting. Use for unified journey KPIs.",
      connects: "Adobe Analytics, CDP, Marketing Exec Dash",
      how: "Pulls event, behavioral, and profile data from Analytics and CDP APIs; aggregates them to support dashboards and journey analysis tools.",
      why: "Provides holistic insights by unifying disparate channel and behavioral data for informed executive and operational decisions.",
    },
    {
      name: "Campaign",
      fullName: "Adobe Campaign",
      purpose: "Manages batch, scheduled, multi-channel campaigns including offline. Use for high-volume batch emails, campaigns, and legacy workflows.",
      connects: "AJO, CDP, Email/SMS/Push, CRM, POS, Service",
      how: "Integrates with CDP for batch segments; triggered by AJO for transactional messages; uses messaging APIs to send via channels; syncs with CRM and POS.",
      why: "Handles large batch/legacy campaign requirements and offline channel messaging where AJO may not scale or provide legacy support.",
    },
    {
      name: "GenStudio",
      fullName: "Adobe GenStudio",
      purpose: "AI-powered rapid creation/testing of digital marketing creatives. Use to scale and personalize campaign content and test variants.",
      connects: "AEM, Campaign, AJO, Target",
      how: "Uses APIs to generate and push creative variants into AEM assets, which feed Campaign emails, AJO messaging journeys, and Target personalization/testing experiences.",
      why: "Accelerates creative asset production and experimentation, improving content relevance and speed to market.",
    },
  ];

  return (
    <section id="products" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Adobe Experience Cloud Products</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            High-level overview of products and their integration points
          </p>

          <Tabs defaultValue={products[0].name} className="w-full">
            <TabsList className="grid grid-cols-4 md:grid-cols-8 mb-8">
              {products.map((product) => (
                <TabsTrigger key={product.name} value={product.name} className="text-xs md:text-sm">
                  {product.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {products.map((product) => (
              <TabsContent key={product.name} value={product.name}>
                <Card className="p-8 shadow-lg">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-primary mb-2">{product.name}</h3>
                    <p className="text-xl text-muted-foreground">{product.fullName}</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-secondary">Purpose + When to Use</h4>
                      <p className="text-foreground">{product.purpose}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-secondary">Connects To</h4>
                      <p className="text-foreground">{product.connects}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-secondary">How (Technical Interaction)</h4>
                      <p className="text-foreground">{product.how}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-secondary">Why (Business/Use Case Reason)</h4>
                      <p className="text-foreground">{product.why}</p>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};
