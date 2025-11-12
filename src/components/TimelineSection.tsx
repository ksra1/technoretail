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
          description: "Establish governance frameworks and communication plans to manage transformation."
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
          description: "Develop solution blueprints and review integration needs for Adobe Experience Cloud products."
        },
        { 
          name: "Architecture Review", 
          start: "Feb 9, 2026", 
          end: "Feb 18, 2026", 
          days: 8,
          description: "Validate architecture design including data ingestion pipelines and SDK usage."
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
          description: "Deploy Adobe Experience Platform Web SDK on website for real-time event capture."
        },
        { 
          name: "SDK Instrumentation & Deployment: Mobile SDK", 
          start: "Mar 5, 2026", 
          end: "Mar 19, 2026", 
          days: 11,
          description: "Deploy Adobe Experience Platform Mobile SDK on mobile app for real-time event capture."
        },
        { 
          name: "Early Analytics Dashboards (Quick Win)", 
          start: "Feb 19, 2026", 
          end: "Mar 19, 2026", 
          days: 21,
          description: "Deliver initial web/mobile analytics dashboards using Adobe Analytics and push events into CDP."
        },
        { 
          name: "Content Move to Adobe Experience Manager", 
          start: "Mar 20, 2026", 
          end: "Jun 3, 2026", 
          days: 40,
          description: "Migrate assets to AEM; develop reusable templates; manage content delivery."
        },
        { 
          name: "Real-Time CDP Integration: Data Ingestion Setup", 
          start: "Mar 20, 2026", 
          end: "May 1, 2026", 
          days: 30,
          description: "Integrate real-time and batch data sources into the CDP."
        },
        { 
          name: "Real-Time CDP Integration: Profile Unification", 
          start: "May 2, 2026", 
          end: "Jun 10, 2026", 
          days: 28,
          description: "Build unified customer profiles and segmentation for personalization."
        },
        { 
          name: "Deploy Adobe Journey Optimizer", 
          start: "Jun 11, 2026", 
          end: "Jun 30, 2026", 
          days: 14,
          description: "Install and configure AJO for omnichannel journey orchestration and real-time personalization."
        },
        { 
          name: "Adobe Target Implementation", 
          start: "Jun 11, 2026", 
          end: "Jun 24, 2026", 
          days: 10,
          description: "Integrate Adobe Target for website personalization using real-time segments from CDP and content from AEM."
        },
        { 
          name: "Adobe Analytics Implementation", 
          start: "Jun 25, 2026", 
          end: "Jun 30, 2026", 
          days: 5,
          description: "Deploy Adobe Analytics via Adobe Experience Platform Web SDK for behavioral data capture feeding into CDP."
        },
        { 
          name: "Pilot Campaign Launch", 
          start: "Jul 1, 2026", 
          end: "Jul 14, 2026", 
          days: 10,
          description: "Run initial campaigns leveraging integrated platforms; collect data for optimization."
        },
        { 
          name: "Training & Enablement", 
          start: "Jul 15, 2026", 
          end: "Jul 24, 2026", 
          days: 8,
          description: "Provide role-based training on Adobe Experience Cloud tools."
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
          description: "Deploy advanced segmentation and AI-powered personalization leveraging CDP profiles."
        },
        { 
          name: "Enhance Data Integrations and API Framework", 
          start: "Aug 12, 2026", 
          end: "Aug 27, 2026", 
          days: 10,
          description: "Optimize APIs and data flows among Adobe Experience Cloud and enterprise systems."
        },
        { 
          name: "Establish Center of Excellence (CoE)", 
          start: "Aug 28, 2026", 
          end: "Sep 10, 2026", 
          days: 10,
          description: "Form CoE for governance, training, and innovation."
        },
        { 
          name: "Change Management Execution and Reviews", 
          start: "Sep 11, 2026", 
          end: "Sep 24, 2026", 
          days: 10,
          description: "Conduct ongoing governance and executive reporting."
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
          <h2 className="text-4xl font-bold text-center mb-4">Implementation Timeline</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            9-month rollout across 4 major phases
          </p>

          {/* Gantt Chart Section */}
          <div className="mb-16 bg-white dark:bg-slate-900 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-8">Project Gantt Chart</h3>
            
            <div className="overflow-x-auto">
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

            {/* Legend */}
            <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-6">
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Project Duration:</span> Jan 13 - Sep 24, 2026 ({totalDays} days)
              </div>
            </div>
          </div>

          {/* Visual Timeline */}
          <div className="mb-12 relative">
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

          <div className="space-y-8">
            {phases.map((phase, phaseIndex) => (
              <Card key={phaseIndex} className="p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`h-4 w-4 rounded-full ${phase.color}`} />
                  <h3 className="text-2xl font-bold">{phase.name}</h3>
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
        </div>
      </div>
    </section>
  );
};
