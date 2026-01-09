import { Card } from "@/components/ui/card";

export const ConclusionSection = () => {
  const initiatives = [
    {
      number: "1",
      title: "Redesign and Relaunch Website",
      description: "Create modern, personalized digital experiences that recognize individual customers and adapt to their preferences",
      icon: "🌐",
      iconSvg: 0,
      color: "from-red-400 to-red-300",
      addressed: "Fragmented Customer Experience & Speed-to-Market"
    },
    {
      number: "2",
      title: "Integrate CRM & Marketing Automation",
      description: "Connect CRM with marketing automation and ecommerce systems to enable seamless customer journey orchestration",
      icon: "🔗",
      iconSvg: 1,
      color: "from-red-400 to-red-300",
      addressed: "Organizational Silos & Lack of Customer Intelligence"
    },
    {
      number: "3",
      title: "Centralized Content Hub",
      description: "Build a unified asset repository to enable content reuse across all channels and reduce time-to-market",
      icon: "📁",
      iconSvg: 2,
      color: "from-red-400 to-red-300",
      addressed: "Slow Marketing & Speed-to-Market"
    },
    {
      number: "4",
      title: "Analytics & Dashboards",
      description: "Establish real-time dashboards to understand customer journeys, measure campaign ROI, and accelerate decision-making",
      icon: "📈",
      iconSvg: 3,
      color: "from-red-400 to-red-300",
      addressed: "Lack of Customer Intelligence"
    },
    {
      number: "5",
      title: "Reduce Costs & Accelerate Speed",
      description: "Implement automation and streamlined processes to lower campaign operational costs while improving speed-to-market",
      icon: "⚡",
      iconSvg: 4,
      color: "from-red-400 to-red-300",
      addressed: "Slow Marketing & Cost Efficiency"
    },
  ];

  const outcomes = [
    { metric: "$45-60M", label: "Revenue Uplift Opportunity", sublabel: "Through unified platform and operational efficiency" },
    { metric: "4 weeks", label: "Campaign Cycle Reduction", sublabel: "From 3-5 months to weeks" },
    { metric: "25-30%", label: "Marketing Cost Reduction", sublabel: "Through automation and optimization" },
    { metric: "5x ROI", label: "Expected Return on Investment", sublabel: "Within 18-24 months" },
  ];

  return (
    <section id="conclusion" className="min-h-screen py-20 bg-gradient-to-b from-white via-red-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gray-900">Conclusion</h2>
            <p className="text-xl text-red-600 font-semibold">Addressing Key Concerns with Strategic Initiatives</p>
          </div>

          {/* Expected Outcomes */}
          <div className="bg-gradient-to-r from-red-50 via-white to-red-50 rounded-lg border-2 border-red-200 p-12 mb-16 shadow-lg">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Expected Business Outcomes</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {outcomes.map((outcome, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">{outcome.metric}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{outcome.label}</div>
                  <div className="text-sm text-gray-600">{outcome.sublabel}</div>
                </div>
              ))}
            </div>
          </div>

          {/* New Initiatives */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">New Initiatives Being Considered</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {initiatives.map((initiative, index) => (
                <Card
                  key={index}
                  className="relative bg-white border-2 border-red-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 h-full flex flex-col"
                >
                  {/* Number Badge */}
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${initiative.color} rounded-bl-3xl flex items-center justify-center text-white font-bold text-2xl`}>
                    {initiative.number}
                  </div>

                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-6 pt-4 pr-8">
                    <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-red-50">
                      <span className="text-3xl">{initiative.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{initiative.title}</h4>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 mb-6 flex-grow">{initiative.description}</p>

                  {/* Addressed Footer */}
                  <div className="pt-4 border-t border-red-150 mt-auto">
                    <p className="text-xs font-semibold text-red-700">
                      Addresses: <span className="block text-red-600 mt-1">{initiative.addressed}</span>
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Key Success Factors */}
          <div className="bg-white border-2 border-red-200 rounded-lg p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Critical Success Factors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-300 rounded-lg flex items-center justify-center text-white font-bold text-lg">✓</div>
                <h4 className="text-lg font-bold text-gray-900">Executive Sponsorship</h4>
                <p className="text-sm text-gray-700">Active C-level engagement and commitment to organizational transformation and change management</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-300 rounded-lg flex items-center justify-center text-white font-bold text-lg">✓</div>
                <h4 className="text-lg font-bold text-gray-900">Cross-Functional Teams</h4>
                <p className="text-sm text-gray-700">Marketing, IT, data, and business teams working collaboratively with clear communication channels</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-300 rounded-lg flex items-center justify-center text-white font-bold text-lg">✓</div>
                <h4 className="text-lg font-bold text-gray-900">Agile Execution</h4>
                <p className="text-sm text-gray-700">Iterative delivery approach with regular checkpoints, feedback loops, and flexibility to adapt</p>
              </div>
            </div>
          </div>

          {/* connectors table moved to end of page */}

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-block bg-gradient-to-r from-red-400 to-red-300 rounded-lg p-8 shadow-lg max-w-2xl">
              <p className="text-white/90 mb-4">
                This strategic initiative positions TechnoRetail to achieve $45-60M+ in incremental revenue while improving operational efficiency and customer satisfaction.
              </p>
              <p className="text-sm font-semibold text-white/80">
                Next Steps: Finalize scope, secure stakeholder alignment, and begin Phase 1 activities
              </p>
            </div>
          </div>

          {/* AEP Integration Reference: Connectors Table moved to page end */}
          <div className="mt-12 bg-white border rounded-lg p-6 shadow-sm">
            <h4 className="text-2xl font-semibold mb-4 text-gray-900">AEP Integration Reference</h4>
            <p className="text-sm text-gray-600 mb-4">Reference: which products send/receive data to/from Adobe Experience Platform.</p>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left">
                <thead>
                  <tr className="bg-red-600">
                    <th className="px-6 py-3 font-bold text-white whitespace-nowrap">Product</th>
                    <th className="px-6 py-3 font-bold text-white">Purpose</th>
                    <th className="px-6 py-3 font-bold text-white whitespace-nowrap">Sends to AEP</th>
                    <th className="px-6 py-3 font-bold text-white whitespace-nowrap">Receives from AEP</th>
                    <th className="px-6 py-3 font-bold text-white">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-6 py-3 font-semibold whitespace-nowrap bg-white">Adobe Analytics</td>
                    <td className="px-6 py-3 text-gray-600 bg-slate-50">Web and digital analytics tool to measure, analyze, and gain insights from customer interactions across channels.</td>
                    <td className="px-6 py-3 whitespace-nowrap bg-white">Yes</td>
                    <td className="px-6 py-3 whitespace-nowrap bg-slate-50">Limited (indirect)</td>
                    <td className="px-6 py-3 text-gray-600 bg-white">Report suite data streamed via Analytics source connector.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 font-semibold whitespace-nowrap bg-white">Adobe Campaign</td>
                    <td className="px-6 py-3 text-gray-600 bg-slate-50">Cross-channel campaign management and orchestration for personalized marketing communications (email, SMS, etc.).</td>
                    <td className="px-6 py-3 whitespace-nowrap bg-white">Yes</td>
                    <td className="px-6 py-3 whitespace-nowrap bg-slate-50">Yes</td>
                    <td className="px-6 py-3 text-gray-600 bg-white">Exports logs via connector/workflows; imports audiences for activation.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 font-semibold whitespace-nowrap bg-white">Adobe Audience Manager (AAM)</td>
                    <td className="px-6 py-3 text-gray-600 bg-slate-50">Data management platform (DMP) to collect, unify, and activate audience data for targeting.</td>
                    <td className="px-6 py-3 whitespace-nowrap bg-white">Yes</td>
                    <td className="px-6 py-3 whitespace-nowrap bg-slate-50">Yes</td>
                    <td className="px-6 py-3 text-gray-600 bg-white">Traits/segments via source; audiences via Experience Cloud Audiences destination.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 font-semibold whitespace-nowrap bg-white">Adobe Target</td>
                    <td className="px-6 py-3 text-gray-600 bg-slate-50">Personalization and A/B testing tool to optimize and deliver tailored digital experiences.</td>
                    <td className="px-6 py-3 whitespace-nowrap bg-white">No (indirect via Analytics)</td>
                    <td className="px-6 py-3 whitespace-nowrap bg-slate-50">Yes</td>
                    <td className="px-6 py-3 text-gray-600 bg-white">Receives audiences/attributes for personalization.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 font-semibold whitespace-nowrap bg-white">Adobe Advertising</td>
                    <td className="px-6 py-3 text-gray-600 bg-slate-50">Demand-side platform (DSP) and ad management for planning, buying, and optimizing cross-channel advertising campaigns.</td>
                    <td className="px-6 py-3 whitespace-nowrap bg-white">No</td>
                    <td className="px-6 py-3 whitespace-nowrap bg-slate-50">Yes</td>
                    <td className="px-6 py-3 text-gray-600 bg-white">Activates audiences for targeting.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 font-semibold whitespace-nowrap bg-white">Adobe Data Collection Tags</td>
                    <td className="px-6 py-3 text-gray-600 bg-slate-50">Tag management system to deploy and manage data collection scripts across web/mobile properties.</td>
                    <td className="px-6 py-3 whitespace-nowrap bg-white">Yes (primary)</td>
                    <td className="px-6 py-3 whitespace-nowrap bg-slate-50">No</td>
                    <td className="px-6 py-3 text-gray-600 bg-white">Streams behavioral data via Web/Mobile SDK to Edge Network.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 font-semibold whitespace-nowrap bg-white">Adobe Experience Manager (AEM)</td>
                    <td className="px-6 py-3 text-gray-600 bg-slate-50">Content management system (CMS) and digital asset management (DAM) for creating, managing, and delivering personalized content experiences.</td>
                    <td className="px-6 py-3 whitespace-nowrap bg-white">Limited/indirect</td>
                    <td className="px-6 py-3 whitespace-nowrap bg-slate-50">Limited</td>
                    <td className="px-6 py-3 text-gray-600 bg-white">Via Tags for collection; consumes personalization via SDK.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 font-semibold whitespace-nowrap bg-white">Adobe Journey Optimizer (AJO)</td>
                    <td className="px-6 py-3 text-gray-600 bg-slate-50">Journey orchestration tool to design, execute, and personalize real-time customer journeys across channels.</td>
                    <td className="px-6 py-3 whitespace-nowrap bg-white">Limited/indirect</td>
                    <td className="px-6 py-3 whitespace-nowrap bg-slate-50">Yes (primary)</td>
                    <td className="px-6 py-3 text-gray-600 bg-white">Built on AEP; uses profiles/audiences natively. Journey events can feed back indirectly. No dedicated source connector.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 font-semibold whitespace-nowrap bg-white">Customer Journey Analytics (CJA)</td>
                    <td className="px-6 py-3 text-gray-600 bg-slate-50">Advanced cross-channel analytics tool to visualize and analyze full customer journeys using AEP data.</td>
                    <td className="px-6 py-3 whitespace-nowrap bg-white">No</td>
                    <td className="px-6 py-3 whitespace-nowrap bg-slate-50">Yes (primary)</td>
                    <td className="px-6 py-3 text-gray-600 bg-white">Built on AEP; analyzes data via direct connections to AEP datasets/Data Lake.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 font-semibold whitespace-nowrap bg-white">Adobe Workfront</td>
                    <td className="px-6 py-3 text-gray-600 bg-slate-50">Work and project management platform to plan, orchestrate, and track marketing/workflow operations.</td>
                    <td className="px-6 py-3 whitespace-nowrap bg-white">Limited/indirect</td>
                    <td className="px-6 py-3 whitespace-nowrap bg-slate-50">No</td>
                    <td className="px-6 py-3 text-gray-600 bg-white">No native source/destination; possible via Workfront Fusion or APIs for custom sync.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 font-semibold whitespace-nowrap bg-white">Adobe GenStudio for Performance Marketing</td>
                    <td className="px-6 py-3 text-gray-600 bg-slate-50">Generative AI tool to rapidly create, customize, and optimize on-brand marketing content/assets for campaigns.</td>
                    <td className="px-6 py-3 whitespace-nowrap bg-white">Limited/indirect</td>
                    <td className="px-6 py-3 whitespace-nowrap bg-slate-50">Yes</td>
                    <td className="px-6 py-3 text-gray-600 bg-white">Built on AEP; uses AEP data for content generation/insights. Performance metrics stored in AEP datasets.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 font-semibold whitespace-nowrap bg-white">Adobe Workfront Fusion</td>
                    <td className="px-6 py-3 text-gray-600 bg-slate-50">Integration and automation platform to connect apps, automate workflows, and sync data across systems.</td>
                    <td className="px-6 py-3 whitespace-nowrap bg-white">Yes (custom/indirect)</td>
                    <td className="px-6 py-3 whitespace-nowrap bg-slate-50">Yes (custom/indirect)</td>
                    <td className="px-6 py-3 text-gray-600 bg-white">No native source/destination connectors. Enables bidirectional data flows via scenarios, APIs, or HTTP modules.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

