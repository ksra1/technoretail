import { Card } from "@/components/ui/card";

export const TimelineSection = () => {
  const phases = [
    {
      name: "Foundation & Discovery",
      color: "bg-slate-700",
      tasks: [
        { name: "Workshops", start: "Jan 13, 2026", end: "Jan 25, 2026", days: 9 },
        { name: "Change Management and Governance Setup", start: "Jan 26, 2026", end: "Feb 8, 2026", days: 10 },
      ],
    },
    {
      name: "Solution Design",
      color: "bg-orange-600",
      tasks: [
        { name: "Solution Design: Blueprint & Integration Requirements", start: "Jan 26, 2026", end: "Feb 8, 2026", days: 10 },
        { name: "Architecture Review", start: "Feb 9, 2026", end: "Feb 18, 2026", days: 8 },
      ],
    },
    {
      name: "Core Platform Build & Pilot",
      color: "bg-emerald-600",
      tasks: [
        { name: "SDK Instrumentation & Deployment: Web SDK", start: "Feb 19, 2026", end: "Mar 4, 2026", days: 10 },
        { name: "SDK Instrumentation & Deployment: Mobile SDK", start: "Mar 5, 2026", end: "Mar 19, 2026", days: 11 },
        { name: "Early Analytics Dashboards (Quick Win)", start: "Feb 19, 2026", end: "Mar 19, 2026", days: 21 },
        { name: "Content Move to Adobe Experience Manager", start: "Mar 20, 2026", end: "Jun 3, 2026", days: 40 },
        { name: "Real-Time CDP Integration: Data Ingestion Setup", start: "Mar 20, 2026", end: "May 1, 2026", days: 30 },
        { name: "Real-Time CDP Integration: Profile Unification", start: "May 2, 2026", end: "Jun 10, 2026", days: 28 },
        { name: "Deploy Adobe Journey Optimizer", start: "Jun 11, 2026", end: "Jun 30, 2026", days: 14 },
        { name: "Adobe Target Implementation", start: "Jun 11, 2026", end: "Jun 24, 2026", days: 10 },
        { name: "Adobe Analytics Implementation", start: "Jun 25, 2026", end: "Jun 30, 2026", days: 5 },
        { name: "Pilot Campaign Launch", start: "Jul 1, 2026", end: "Jul 14, 2026", days: 10 },
        { name: "Training & Enablement", start: "Jul 15, 2026", end: "Jul 24, 2026", days: 8 },
      ],
    },
    {
      name: "Scale & Optimize",
      color: "bg-slate-600",
      tasks: [
        { name: "Expand Personalization and Predictive Analytics", start: "Jul 27, 2026", end: "Aug 11, 2026", days: 10 },
        { name: "Enhance Data Integrations and API Framework", start: "Aug 12, 2026", end: "Aug 27, 2026", days: 10 },
        { name: "Establish Center of Excellence (CoE)", start: "Aug 28, 2026", end: "Sep 10, 2026", days: 10 },
        { name: "Change Management Execution and Reviews", start: "Sep 11, 2026", end: "Sep 24, 2026", days: 10 },
      ],
    },
  ];

  return (
    <section id="timeline" className="min-h-screen py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Implementation Timeline</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            9-month rollout across 4 major phases
          </p>

          <div className="space-y-8">
            {phases.map((phase, phaseIndex) => (
              <Card key={phaseIndex} className="p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`h-4 w-4 rounded-full ${phase.color}`} />
                  <h3 className="text-2xl font-bold">{phase.name}</h3>
                </div>
                
                <div className="space-y-3">
                  {phase.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="border-l-4 border-border pl-4 py-2 hover:border-primary transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{task.name}</h4>
                        </div>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span>{task.start}</span>
                          <span>→</span>
                          <span>{task.end}</span>
                          <span className="font-medium text-primary">({task.days} days)</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
