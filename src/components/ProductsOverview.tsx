import { Card } from "@/components/ui/card";
import unifiedProfileImage from "@/assets/unified-profile.png";

export const ProductsOverview = () => {
  const productCategories = [
    {
      category: "Content",
      color: "bg-[#2680EB]",
      products: [
        {
          name: "AEM",
          fullName: "Adobe Experience Manager",
          purpose: "Manages/delivers digital content and assets for web and mobile. Use for centralized brand asset and content management/delivery.",
          connects: "Website Access, Target, CDP",
          how: "Offers RESTful Content Delivery APIs for websites/apps; integrates with Target for real-time personalized experience delivery.",
          why: "Centralizes content and assets so they can be personalized and delivered consistently across channels and AMP solutions.",
        },
      ],
    },
    {
      category: "Data Insights & Audiences",
      color: "bg-[#268E6C]",
      products: [
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
          name: "CDP",
          fullName: "Customer Data Platform",
          purpose: "Centralizes and unifies customer/event data. Use for building profiles and segments powering personalization and analytics.",
          connects: "AJO, AEM, Target, Adobe Analytics, CJA, Campaign",
          how: "Uses RESTful and streaming APIs to ingest real-time and batch data from sources, and exposes unified segments/profiles to downstream tools via APIs and data sync.",
          why: "Enables unified customer data foundation ensuring all downstream tools have consistent, updated segments and profiles.",
          showImage: true,
        },
      ],
    },
    {
      category: "Customer Journeys",
      color: "bg-[#B5641A]",
      products: [
        {
          name: "Target",
          fullName: "Adobe Target",
          purpose: "Personalizes and optimizes web/app experiences via A/B and multivariate tests. Use for digital experience optimization.",
          connects: "Website Access, AEM, CDP, AJO",
          how: "Uses client SDKs and REST APIs to retrieve user segments and personalization context, applies content provided by AEM, and integrates journey triggers from AJO.",
          why: "Enables highly personalized, real-time onsite experiences to improve engagement and conversion.",
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
          name: "AJO",
          fullName: "Adobe Journey Optimizer",
          purpose: "Orchestrates real-time, event-driven, omni-channel personalized journeys. Use for most digital campaigns except large bulk email batches.",
          connects: "CDP, Campaign, Target, Email/SMS/Push, CRM, POS, Service, Marketing Automation",
          how: "Uses APIs to fetch audience segments, trigger transactional/real-time messages, and deliver content to channels via SDKs and endpoints; triggers Campaign via APIs for bulk sends.",
          why: "Provides scalable, fast journey orchestration and personalization; leverages Campaign for large-scale batch/offline sends.",
        },
      ],
    },
  ];

  return (
    <section id="products" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Adobe Experience Cloud Products</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Integrated solutions for content, data insights, and customer journeys
          </p>

          <div className="space-y-8">
            {productCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className={`${category.color} text-white py-3 px-6 rounded-t-lg`}>
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                  {category.products.map((product, productIndex) => (
                    <Card key={productIndex} className="p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="mb-4">
                        <h4 className={`text-xl font-bold mb-1`} style={{ color: category.color.replace('bg-', '').replace('[', '').replace(']', '') }}>
                          {product.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">{product.fullName}</p>
                      </div>

                      {product.showImage && (
                        <div className="mb-4 bg-muted/30 rounded-lg p-4">
                          <img 
                            src={unifiedProfileImage} 
                            alt="Unified Profile Example" 
                            className="w-full h-auto rounded"
                          />
                        </div>
                      )}

                      <div className="space-y-3 text-sm">
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">Purpose + When to Use</h5>
                          <p className="text-muted-foreground">{product.purpose}</p>
                        </div>

                        <div>
                          <h5 className="font-semibold text-foreground mb-1">Connects To</h5>
                          <p className="text-muted-foreground">{product.connects}</p>
                        </div>

                        <div>
                          <h5 className="font-semibold text-foreground mb-1">How (Technical Interaction)</h5>
                          <p className="text-muted-foreground">{product.how}</p>
                        </div>

                        <div>
                          <h5 className="font-semibold text-foreground mb-1">Why (Business/Use Case Reason)</h5>
                          <p className="text-muted-foreground">{product.why}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
