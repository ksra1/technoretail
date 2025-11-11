import { Card } from "@/components/ui/card";

export const ResourcePlan = () => {
  const resources = [
    {
      role: "Solution Architect",
      count: 1,
      responsibilities: "Overall architecture design, integration strategy, technical leadership",
      reportingTo: "Program Manager",
      commitment: "Full-time (9 months)",
    },
    {
      role: "Technical Consultants",
      count: 3,
      responsibilities: "CDP/AJO/AEM implementation, SDK deployment, platform configuration",
      reportingTo: "Solution Architect",
      commitment: "Full-time (Phases 2-4)",
    },
    {
      role: "Data Engineers",
      count: 2,
      responsibilities: "Data ingestion, profile unification, API integrations, data governance",
      reportingTo: "Solution Architect",
      commitment: "Full-time (Phases 2-4)",
    },
    {
      role: "Frontend Developers",
      count: 2,
      responsibilities: "AEM template development, Target personalization, SDK integration",
      reportingTo: "Technical Lead",
      commitment: "Full-time (Phases 3-4)",
    },
    {
      role: "Change Management Lead",
      count: 1,
      responsibilities: "Governance setup, training programs, stakeholder communication",
      reportingTo: "Program Manager",
      commitment: "Part-time (All phases)",
    },
    {
      role: "QA/Testing Engineer",
      count: 1,
      responsibilities: "End-to-end testing, user acceptance testing, quality assurance",
      reportingTo: "Technical Lead",
      commitment: "Full-time (Phases 3-4)",
    },
    {
      role: "Program Manager",
      count: 1,
      responsibilities: "Project oversight, timeline management, executive reporting, risk management",
      reportingTo: "Client Executive Sponsor",
      commitment: "Full-time (All phases)",
    },
  ];

  const reportingStructure = [
    {
      level: "Executive",
      roles: ["Client Executive Sponsor (CMO/CIO)"],
    },
    {
      level: "Leadership",
      roles: ["Program Manager"],
    },
    {
      level: "Technical Leadership",
      roles: ["Solution Architect", "Change Management Lead"],
    },
    {
      level: "Implementation Team",
      roles: ["Technical Consultants (3)", "Data Engineers (2)", "Frontend Developers (2)", "QA/Testing Engineer"],
    },
  ];

  return (
    <section id="resources" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Resource Plan</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Team structure and resource allocation for successful implementation
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Resource Requirements</h3>
              <div className="space-y-4">
                {resources.map((resource, index) => (
                  <Card key={index} className="p-5 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-lg font-bold text-primary">{resource.role}</h4>
                        <p className="text-sm text-muted-foreground">Count: {resource.count}</p>
                      </div>
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {resource.commitment}
                      </span>
                    </div>
                    <p className="text-sm text-foreground mb-2">{resource.responsibilities}</p>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold">Reports to:</span> {resource.reportingTo}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Reporting Structure</h3>
              <Card className="p-6 shadow-lg">
                <div className="space-y-6">
                  {reportingStructure.map((level, index) => (
                    <div key={index} className="relative">
                      {index > 0 && (
                        <div className="absolute -top-3 left-1/2 w-0.5 h-3 bg-border -translate-x-1/2" />
                      )}
                      <div className="text-center">
                        <div className="inline-block bg-primary/10 px-4 py-1 rounded-full mb-3">
                          <span className="text-sm font-semibold text-primary">{level.level}</span>
                        </div>
                        <div className="space-y-2">
                          {level.roles.map((role, roleIndex) => (
                            <div
                              key={roleIndex}
                              className="bg-card border border-border rounded-lg p-3 hover:border-primary transition-colors"
                            >
                              <p className="font-medium text-sm">{role}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      {index < reportingStructure.length - 1 && (
                        <div className="absolute -bottom-3 left-1/2 w-0.5 h-3 bg-border -translate-x-1/2" />
                      )}
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="mt-6 p-6 bg-primary/10 border-2 border-primary">
                <h4 className="font-bold text-xl mb-4 text-primary">Total Team Size</h4>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-primary">13</div>
                    <div className="text-sm text-foreground font-medium">Total Resources</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">9</div>
                    <div className="text-sm text-foreground font-medium">Months Duration</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <Card className="p-6 bg-primary/5 border-primary/20">
            <h3 className="text-xl font-bold mb-4">Key Success Factors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Executive Sponsorship</h4>
                  <p className="text-sm text-muted-foreground">
                    Active engagement from C-level sponsor for strategic decisions and resource allocation
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Cross-Functional Collaboration</h4>
                  <p className="text-sm text-muted-foreground">
                    Marketing, IT, and data teams working together with clear communication channels
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Agile Methodology</h4>
                  <p className="text-sm text-muted-foreground">
                    Iterative approach with regular checkpoints and flexibility to adapt based on learnings
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
