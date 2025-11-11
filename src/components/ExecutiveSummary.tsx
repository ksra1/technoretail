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
      color: "bg-gradient-to-br from-red-50 via-white to-red-100 border-l-4 border-red-400",
      textColor: "text-gray-900",
      iconColor: "text-red-600",
      bgIcon: "",
      points: [
        "Generic website experiences for all visitors",
        "No cross-channel recognition (online customers unknown in-store)",
        "Duplicate communications across channels",
      ],
      impact: "Impact: $6-9M conversion loss, 15-20% higher churn",
      icon: "🔗",
    },
    {
      title: "Slow Marketing/Speed-to-Market",
      color: "bg-gradient-to-br from-red-100 via-white to-red-150 border-l-4 border-red-500",
      textColor: "text-gray-900",
      iconColor: "text-red-700",
      bgIcon: "",
      points: [
        "3 to 5 month campaign cycles",
        "IT bottlenecks for content changes",
        "Minimal content reuse across channels",
      ],
      impact: "Impact: $15-25M annual revenue loss, $8M wasted creative budget",
      icon: "⏱️",
    },
    {
      title: "Lack of Customer Intelligence",
      color: "bg-gradient-to-br from-red-150 via-white to-red-200 border-l-4 border-red-500",
      textColor: "text-gray-900",
      iconColor: "text-red-700",
      bgIcon: "",
      points: [
        "No consolidated customer view across systems",
        "Decisions based on incomplete data",
        "Inconsistent ROI measurement",
      ],
      impact: "Impact: $12M wasted marketing spend, 25% preventable churn",
      icon: "📊",
    },
    {
      title: "Organizational Silos",
      color: "bg-gradient-to-br from-red-200 via-white to-red-250 border-l-4 border-red-600",
      textColor: "text-gray-900",
      iconColor: "text-red-800",
      bgIcon: "",
      points: [
        "Disconnected teams and systems",
        "Data locked in separate platforms",
        "Reactive IT support model",
      ],
      impact: "Impact: 35% longer project timelines, innovation stagnation",
      icon: "🏢",
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {challenges.map((challenge, index) => (
              <Card key={index} className={`${challenge.color} ${challenge.textColor} p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl flex-shrink-0">
                    {challenge.icon}
                  </div>
                  <h3 className="text-xl font-bold leading-tight">{challenge.title}</h3>
                </div>
                <ul className="space-y-2 mb-6">
                  {challenge.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`${challenge.iconColor} mt-1 font-bold`}>→</span>
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-sm font-bold mt-6 pt-4 border-t border-gray-300">
                  <span className={challenge.iconColor}>{challenge.impact}</span>
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
