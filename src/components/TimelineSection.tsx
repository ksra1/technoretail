import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const TimelineSection = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const phases = [
    {
      name: "Foundation & Discovery",
      color: "bg-red-700",
      gradientFrom: "#DC2626",
      gradientTo: "#7F1D1D",
      tasks: [
        { 
          name: "Workshops", 
          start: "Jan 13, 2026", 
          end: "Jan 25, 2026", 
          days: 9,
          description: "Collaborative sessions to align teams on objectives, map customer journeys, and define KPIs.",
          details: {
            workshops: [
              {
                name: "Executive Vision",
                duration: "3 hours",
                participants: "CMO, CIO, COO, CFO",
                questions: [
                  "What does success look like in 18 months? How do we measure it?",
                  "What are your top 3 competitive threats and how do they leverage technology?",
                  "Where are you willing to take calculated risks versus needing certainty?",
                  "What past technology initiatives succeeded or failed, and why?"
                ],
                deliverable: "Aligned business objectives, success metrics, and investment thesis"
              },
              {
                name: "Marketing & Customer Experience",
                duration: "4 hours",
                participants: "Marketing leaders, merchandising, customer service",
                questions: [
                  "Current campaign creation process - where do delays occur?",
                  "Describe ideal customer in each segment - what do they need at each lifecycle stage?",
                  "What content performs best? What do you wish you could create but can't today?",
                  "How do online and in-store teams currently collaborate? What breaks down?"
                ],
                deliverable: "Persona definitions, journey maps, content reqs, use case prioritization"
              },
              {
                name: "IT & Architecture",
                duration: "4 hours",
                participants: "IT leadership, architects, developers, infrastructure",
                questions: [
                  "Map your current systems landscape - what integrations exist today?",
                  "What are your biggest support burdens? Where do most incidents originate?",
                  "What technical debt concerns you most? What modernization is already planned?",
                  "What governance, security, and compliance requirements must we address?"
                ],
                deliverable: "Technical landscape diagram, integration requirements, risk assessment"
              },
              {
                name: "Data Analytics & Deep-Dive",
                duration: "3 hours",
                participants: "Data analysts, BI team, marketing ops",
                questions: [
                  "What data sources exist today? What's the quality and accessibility?",
                  "Who are your power users of data? What tools do they prefer?",
                  "What's your data governance maturity? Who owns data quality?"
                ],
                deliverable: "Data inventory, analytics requirements, governance framework needs"
              }
            ]
          }
        },
        { 
          name: "Change Management and Governance Setup", 
          start: "Jan 26, 2026", 
          end: "Feb 8, 2026", 
          days: 10,
          description: "Establish governance frameworks, communication plans, and change management processes. Define data stewardship roles, security policies, compliance requirements, and organizational structures to support the transformation. Create stakeholder communication cadences and success metrics tracking mechanisms."
        },
      ],
    },
    {
      name: "Solution Design",
      color: "bg-red-600",
      gradientFrom: "#EF4444",
      gradientTo: "#991B1B",
      tasks: [
        { 
          name: "Solution Design: Blueprint & Integration Requirements", 
          start: "Jan 26, 2026", 
          end: "Feb 8, 2026", 
          days: 10,
          description: "Design comprehensive solution blueprints for Adobe Experience Cloud implementation. Map integration points with existing systems (ERP, CRM, marketing automation). Define data schemas, event taxonomy for Web/Mobile SDKs, CDP audience definitions, personalization rules, and omnichannel journey orchestration workflows."
        },
        { 
          name: "Architecture Review", 
          start: "Feb 9, 2026", 
          end: "Feb 18, 2026", 
          days: 8,
          description: "Conduct comprehensive architecture review including data ingestion pipelines, security controls, API design patterns, SDK implementation guidelines, and scalability requirements. Validate compliance with organizational standards and identify risk mitigation strategies. Obtain sign-off from IT, security, and compliance teams."
        },
      ],
    },
    {
      name: "Core Platform Build & Pilot",
      color: "bg-red-500",
      gradientFrom: "#FCA5A5",
      gradientTo: "#DC2626",
      tasks: [
        { 
          name: "SDK Instrumentation & Deployment: Web SDK", 
          start: "Feb 19, 2026", 
          end: "Mar 4, 2026", 
          days: 10,
          description: "Deploy Adobe Experience Platform Web SDK across website properties. Implement XDM event schema for behavioral tracking (page views, clicks, form interactions, conversions). Configure data collection rules, establish real-time event streaming to CDP. Test data quality and implement validation rules for critical events."
        },
        { 
          name: "SDK Instrumentation & Deployment: Mobile SDK", 
          start: "Mar 5, 2026", 
          end: "Mar 19, 2026", 
          days: 11,
          description: "Deploy Adobe Experience Platform Mobile SDK on iOS and Android applications. Implement XDM event schema for mobile-specific interactions (app launches, screen views, purchases, push notifications). Configure offline data collection and queuing. Validate cross-device tracking capability for unified customer profiles."
        },
        { 
          name: "Early Analytics Dashboards (Quick Win)", 
          start: "Feb 19, 2026", 
          end: "Mar 19, 2026", 
          days: 21,
          description: "Build initial Adobe Analytics and Customer Journey Analytics dashboards to showcase value. Create real-time dashboards for web/mobile traffic, conversion funnel analysis, and customer behavior patterns. Feed event data into CDP for audience creation. Enable stakeholders to see immediate ROI."
        },
        { 
          name: "Content Move to Adobe Experience Manager", 
          start: "Mar 20, 2026", 
          end: "Jun 3, 2026", 
          days: 40,
          description: "Migrate digital assets and content to Adobe Experience Manager. Build reusable component templates and content fragments for consistency across channels. Implement content delivery network (CDN) optimization, multi-language support, and version control. Enable marketers to manage content independently."
        },
        { 
          name: "Real-Time CDP Integration: Data Ingestion Setup", 
          start: "Mar 20, 2026", 
          end: "May 1, 2026", 
          days: 30,
          description: "Configure Adobe Real-time Customer Data Platform to ingest real-time event streams from Web/Mobile SDKs and batch data from enterprise sources (DMS, transactional systems, offline purchases). Set up data connectors, transformation rules, and quality validation. Enable identity resolution across channels."
        },
        { 
          name: "Real-Time CDP Integration: Profile Unification", 
          start: "May 2, 2026", 
          end: "Jun 10, 2026", 
          days: 28,
          description: "Build unified customer profiles in CDP by stitching together data from multiple sources and touchpoints. Create segment definitions for persona-based targeting (VIP customers, price-sensitive, high-intent). Set up audience activation rules and segment refresh frequencies for downstream activation."
        },
        { 
          name: "Deploy Adobe Journey Optimizer", 
          start: "Jun 11, 2026", 
          end: "Jun 30, 2026", 
          days: 14,
          description: "Configure Adobe Journey Optimizer for omnichannel campaign orchestration. Design customer journey workflows triggered by behavioral events (browsing, cart abandonment, purchase). Set up multi-channel messaging (email, SMS, push notifications, in-app). Implement frequency capping, A/B testing, and dynamic content personalization."
        },
        { 
          name: "Adobe Target Implementation", 
          start: "Jun 11, 2026", 
          end: "Jun 24, 2026", 
          days: 10,
          description: "Integrate Adobe Target for website and mobile personalization. Create audiences based on CDP segments and real-time behavioral data. Build A/B and multivariate tests for product recommendations, content variations, and offer optimization. Set up targeting rules for different customer segments."
        },
        { 
          name: "Adobe Analytics Implementation", 
          start: "Jun 25, 2026", 
          end: "Jun 30, 2026", 
          days: 5,
          description: "Deploy comprehensive Adobe Analytics tracking via Adobe Experience Platform Web SDK. Configure conversion funnels, customer journey attribution models, and custom metrics. Build reporting dashboards for marketing, sales, and finance teams. Enable real-time reporting on campaign performance and ROI."
        },
        { 
          name: "Pilot Campaign Launch", 
          start: "Jul 1, 2026", 
          end: "Jul 14, 2026", 
          days: 10,
          description: "Execute initial pilot campaigns using integrated platform capabilities. Run personalized email campaigns to CDP segments, test A/B variations with Adobe Target, measure impact with Adobe Analytics. Collect performance data to optimize messaging, timing, and targeting strategies for full-scale rollout."
        },
        { 
          name: "Training & Enablement", 
          start: "Jul 15, 2026", 
          end: "Jul 24, 2026", 
          days: 8,
          description: "Provide comprehensive role-based training on Adobe Experience Cloud platform. Conduct workshops for marketers (audience building, campaign management), content teams (AEM authoring), analysts (CJA dashboards), and IT (API management, security). Establish support channels and documentation for ongoing enablement."
        },
      ],
    },
    {
      name: "Scale & Optimize",
      color: "bg-red-800",
      gradientFrom: "#7F1D1D",
      gradientTo: "#450A0A",
      tasks: [
        { 
          name: "Expand Personalization and Predictive Analytics", 
          start: "Jul 27, 2026", 
          end: "Aug 11, 2026", 
          days: 10,
          description: "Deploy advanced segmentation using CDP profiles and AI-driven insights. Implement predictive scoring models to identify high-value customers, churn risk, and propensity to convert. Create dynamic audience rules that auto-update based on behavioral triggers. Scale personalization across all digital channels."
        },
        { 
          name: "Enhance Data Integrations and API Framework", 
          start: "Aug 12, 2026", 
          end: "Aug 27, 2026", 
          days: 10,
          description: "Optimize API design and data flow between Adobe Experience Cloud and enterprise systems. Build automated data syncs with CRM, ERP, and marketing automation platforms. Implement monitoring and alerting for data quality and pipeline health. Enable real-time bidirectional data exchange for seamless operations."
        },
        { 
          name: "Establish Center of Excellence (CoE)", 
          start: "Aug 28, 2026", 
          end: "Sep 10, 2026", 
          days: 10,
          description: "Form a cross-functional Center of Excellence team including marketing, technology, analytics, and data specialists. Define CoE governance structure, decision-making processes, and innovation roadmap. Establish best practices library, playbooks for common use cases, and internal certification programs for users."
        },
        { 
          name: "Change Management Execution and Reviews", 
          start: "Sep 11, 2026", 
          end: "Sep 24, 2026", 
          days: 10,
          description: "Execute ongoing change management and governance reviews. Conduct stakeholder feedback sessions and user adoption assessments. Track transformation KPIs against baseline metrics (conversion rate, customer lifetime value, operational efficiency). Present executive dashboards and recommendations for continuous improvement."
        },
      ],
    },
  ];

  // Calculate Gantt chart metrics
  const startDate = new Date("2026-01-13");
  const endDate = new Date("2026-09-24");
  const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

  const calculateGanttPosition = (taskStart: string, taskEnd: string) => {
    const task = new Date(taskStart);
    const end = new Date(taskEnd);
    const start = new Date(startDate);
    
    const daysFromStart = Math.ceil((task.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    const taskDuration = Math.ceil((end.getTime() - task.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    
    const leftPercent = (daysFromStart / totalDays) * 100;
    const widthPercent = (taskDuration / totalDays) * 100;
    
    return { leftPercent, widthPercent };
  };

  return (
    <section id="timeline" className="min-h-screen py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Execution Plan</h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 text-lg">
            <span className="font-semibold">Core Implementation:</span> 6 months (Jan 13 - Jul 14, 2026) | 
            <span className="font-semibold ml-2">Scale & Optimize:</span> 3 months (Jul 27 - Sep 24, 2026)
          </p>

          {/* Visual Timeline */}
          <div className="mb-16 relative">
            <div className="flex justify-between items-center relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-slate-700 via-orange-600 via-emerald-600 to-slate-600 -translate-y-1/2 z-0" />
              {phases.map((phase, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center flex-1">
                  <div className={`${phase.color} w-4 h-4 rounded-full mb-2 border-4 border-background`} />
                  <div className="text-center px-2">
                    <div className="font-semibold text-sm">{phase.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phase Details Cards */}
          <div className="mb-16 space-y-8">
            {phases.map((phase, phaseIndex) => (
              <Card key={phaseIndex} className="p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`h-4 w-4 rounded-full ${phase.color}`} />
                  <h3 className="text-2xl font-bold">{phase.name}</h3>
                  <span className={`ml-auto px-3 py-1 rounded-full text-xs font-semibold ${
                    phaseIndex < 3 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' 
                      : 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100'
                  }`}>
                    {phaseIndex < 3 ? 'Core Implementation' : 'Scale & Optimize'}
                  </span>
                </div>
                
                <div className="space-y-2">
                  {phase.tasks.map((task, taskIndex) => {
                    const itemId = `${phaseIndex}-${taskIndex}`;
                    const isOpen = openItems.includes(itemId);
                    
                    return (
                      <Collapsible key={taskIndex} open={isOpen} onOpenChange={() => toggleItem(itemId)}>
                        <CollapsibleTrigger className="w-full">
                          <div className="border-l-4 border-border hover:border-primary transition-colors pl-4 py-2 text-left">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                              <div className="flex-1 flex items-center gap-2">
                                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                                <h4 className="font-semibold text-foreground">{task.name}</h4>
                              </div>
                              <div className="flex gap-4 text-sm text-muted-foreground ml-6 md:ml-0">
                                <span>{task.start}</span>
                                <span>→</span>
                                <span>{task.end}</span>
                                <span className="font-medium text-primary">({task.days} days)</span>
                              </div>
                            </div>
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="ml-10 mt-2 p-4 bg-muted/50 rounded-lg">
                            <p className="text-sm text-muted-foreground mb-3">{task.description}</p>
                            
                            {task.details?.workshops && (
                              <div className="space-y-4">
                                {task.details.workshops.map((workshop, wIndex) => (
                                  <Card key={wIndex} className="p-4 bg-background">
                                    <h5 className="font-bold text-lg mb-2 text-primary">{workshop.name}</h5>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3 text-sm">
                                      <p><span className="font-semibold">Duration:</span> {workshop.duration}</p>
                                      <p><span className="font-semibold">Participants:</span> {workshop.participants}</p>
                                    </div>
                                    
                                    <div className="mb-3">
                                      <h6 className="font-semibold text-sm mb-2">Key Questions:</h6>
                                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                        {workshop.questions.map((q, qIndex) => (
                                          <li key={qIndex}>{q}</li>
                                        ))}
                                      </ul>
                                    </div>
                                    
                                    <div className="pt-2 border-t border-border">
                                      <p className="text-sm"><span className="font-semibold">Deliverable:</span> {workshop.deliverable}</p>
                                    </div>
                                  </Card>
                                ))}
                              </div>
                            )}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    );
                  })}
                </div>
              </Card>
            ))}
          </div>

          {/* Gantt Chart Section */}
          <div id="gantt-timeline" className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">Timeline</h2>
            
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-8">
              <div className="min-w-max">
                {/* Timeline Headers */}
                <div className="flex mb-8">
                  <div className="w-64 flex-shrink-0 pr-4">
                    <div className="text-sm font-semibold text-muted-foreground">Tasks</div>
                  </div>
                  <div className="flex-1 relative">
                    <div className="flex justify-between text-xs text-muted-foreground mb-2">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                      <span>Jul</span>
                      <span>Aug</span>
                      <span>Sep</span>
                    </div>
                    <div className="flex bg-muted/20 rounded h-1">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="flex-1 border-r border-muted/30 last:border-r-0" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Gantt Bars */}
                {phases.map((phase, phaseIndex) => (
                  <div key={phaseIndex} className="mb-6">
                    {/* Phase Header */}
                    <div className="flex items-center mb-3">
                      <div className="w-64 flex-shrink-0 pr-4">
                        <div className="flex items-center gap-2">
                          <div className={`h-3 w-3 rounded-full ${phase.color}`} />
                          <span className="text-sm font-bold text-foreground">{phase.name}</span>
                        </div>
                      </div>
                      <div className="flex-1 h-1 bg-gradient-to-r from-transparent to-transparent" />
                    </div>

                    {/* Tasks */}
                    {phase.tasks.map((task, taskIndex) => {
                      const { leftPercent, widthPercent } = calculateGanttPosition(task.start, task.end);
                      return (
                        <div key={taskIndex} className="flex items-center mb-2 group">
                          <div className="w-64 flex-shrink-0 pr-4">
                            <div className="text-xs text-muted-foreground truncate group-hover:text-foreground transition-colors">
                              {task.name}
                            </div>
                          </div>
                          <div className="flex-1 relative h-6 bg-muted/10 rounded">
                            <div
                              className="absolute h-full rounded opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center group"
                              style={{
                                left: `${leftPercent}%`,
                                width: `${widthPercent}%`,
                                minWidth: widthPercent > 3 ? 'auto' : '48px',
                                background: `linear-gradient(135deg, ${phase.gradientFrom} 0%, ${phase.gradientTo} 100%)`,
                              }}
                              title={`${task.name}: ${task.days} days`}
                            >
                              <span className="text-xs font-bold text-white whitespace-nowrap px-1">
                                {task.days}d
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
