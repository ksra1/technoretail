import { Card } from "@/components/ui/card";

export const ExecutiveSummary = () => {
  const metrics = [
    { value: "$750M", label: "Annual Revenue", sublabel: "Mid-market specialty electronics retailer" },
    { value: "85", label: "Physical Stores", sublabel: "Nationwide US presence" },
    { value: "40%", label: "E-commerce Share", sublabel: "Rapidly growing digital channel" },
    { value: "5mo", label: "Campaign Cycle", sublabel: "Current speed-to-market" },
  ];

  const challenges = [
    {
      title: "Fragmented Customer Experience",
      color: "bg-challenge-blue",
      points: [
        "Generic website experiences for all visitors",
        "No cross-channel recognition (online customers unknown in-store)",
        "Duplicate communications across channels",
      ],
      impact: "Impact: $6-9M conversion loss, 15-20% higher churn",
    },
    {
      title: "Slow Marketing/Speed-to-Market",
      color: "bg-challenge-teal",
      points: [
        "3 to 5 month campaign cycles",
        "IT bottlenecks for content changes",
        "Minimal content reuse across channels",
      ],
      impact: "Impact: $15-25M annual revenue loss, $8M wasted creative budget",
    },
    {
      title: "Lack of Customer Intelligence",
      color: "bg-info-teal",
      points: [
        "No consolidated customer view across systems",
        "Decisions based on incomplete data",
        "Inconsistent ROI measurement",
      ],
      impact: "Impact: $12M wasted marketing spend, 25% preventable churn",
    },
    {
      title: "Organizational Silos",
      color: "bg-info-cyan",
      points: [
        "Disconnected teams and systems",
        "Data locked in separate platforms",
        "Reactive IT support model",
      ],
      impact: "Impact: 35% longer project timelines, innovation stagnation",
    },
  ];

  return (
    <section id="summary" className="min-h-screen py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Executive Summary</h2>
          
          <div className="bg-card border-2 border-primary/20 rounded-lg p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold mb-1">{metric.label}</div>
                  <div className="text-sm text-muted-foreground">{metric.sublabel}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className={`${challenge.color} text-white p-6 shadow-lg hover:shadow-xl transition-shadow`}>
                <h3 className="text-xl font-bold mb-4">{challenge.title}</h3>
                <ul className="space-y-2 mb-4">
                  {challenge.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-white/80 mt-1">•</span>
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-sm font-semibold mt-4 pt-4 border-t border-white/20">
                  {challenge.impact}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center py-8">
            <p className="text-2xl font-bold text-foreground">
              These challenges unlock a $100M+ revenue opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
