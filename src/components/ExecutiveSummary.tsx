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
          <h2 className="text-4xl font-bold text-center mb-12">Current State</h2>
          
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
              These challenges unlock a $45-60M+ revenue opportunity.
            </p>
          </div>

          {/* Unified Profile Diagram */}
          <div className="mb-16 p-8">
            <h3 className="text-2xl font-bold mb-12 text-center">Key Technical Challenges</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Card 1: Unified Profile */}
              <div className="w-full">
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 border border-slate-200 dark:border-slate-700 h-full">
                  {/* Centered Heading */}
                  <div className="text-center mb-8 pb-6 border-b border-slate-200 dark:border-slate-700">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='redGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ef4444;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23991b1b;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='50' cy='50' r='50' fill='url(%23redGrad)'/%3E%3Ccircle cx='50' cy='32' r='15' fill='%23ffffff'/%3E%3Cpath d='M 30 55 Q 30 70 50 80 Q 70 70 70 55' fill='%23ffffff'/%3E%3C/svg%3E"
                      alt="Unified Profile"
                      className="w-16 h-16 rounded-full mx-auto mb-3 shadow-md"
                    />
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Unified Profile</h4>
                  </div>

                  {/* Profile Section */}
                  <div className="mb-8">
                    <h5 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">John Doe</h5>
                  </div>

                  {/* Two Column Layout */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {/* Email */}
                    <div>
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Email</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 break-words">john.doe@gmail.com</p>
                    </div>
                    {/* Accessed support */}
                    <div>
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Accessed support</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">06/07/24</p>
                    </div>
                  </div>

                  {/* Full width fields */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Phone</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">+1 (555) 987-6543</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Login ID</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">johndoe</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-0.5">ECID</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">(Experience Cloud ID - Adobe)</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-mono break-all">8029969881209...</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-0.5">UUID</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">(Universal Unique ID - Internal)</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-mono break-all">550e8400-e29b-41d4-a716....</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">CRM ID</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">60013ABC</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Card 2: Unorganized Content */}
              <div className="w-full">
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 border border-slate-200 dark:border-slate-700 h-full">
                  {/* Centered Heading */}
                  <div className="text-center mb-8 pb-2 border-b border-slate-200 dark:border-slate-700">
                    <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto mb-1">
                      {/* Red scattered media/images/videos icon */}
                      <defs>
                        <linearGradient id="mediaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: "#ef4444", stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: "#991b1b", stopOpacity: 1}} />
                        </linearGradient>
                      </defs>
                      {/* Back image frame - tilted left */}
                      <g transform="translate(8, 18) rotate(-20)">
                        <rect x="0" y="0" width="48" height="42" fill="url(#mediaGrad)" rx="4" opacity="0.7" />
                        <rect x="3" y="3" width="42" height="36" fill="white" opacity="0.3" rx="2" />
                        <circle cx="24" cy="21" r="6" fill="white" opacity="0.5" />
                      </g>
                      {/* Middle video frame with play button - tilted right */}
                      <g transform="translate(36, 8) rotate(18)">
                        <rect x="0" y="0" width="48" height="42" fill="url(#mediaGrad)" rx="4" opacity="0.85" />
                        <rect x="3" y="3" width="42" height="36" fill="white" opacity="0.3" rx="2" />
                        {/* Play button */}
                        <polygon points="20,14 20,30 36,22" fill="white" opacity="0.6" />
                      </g>
                      {/* Front image frame - slight tilt */}
                      <g transform="translate(20, 38) rotate(-12)">
                        <rect x="0" y="0" width="48" height="42" fill="url(#mediaGrad)" rx="4" opacity="0.95" />
                        <rect x="3" y="3" width="42" height="36" fill="white" opacity="0.4" rx="2" />
                        {/* Mountain/landscape scene indicator */}
                        <polygon points="6,32 16,16 25,24 38,12 42,40 6,40" fill="white" opacity="0.5" />
                      </g>
                    </svg>
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Unorganized Content</h4>
                  </div>

                  {/* Content locations list */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">📧</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Email Templates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🌐</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Web Content</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🎥</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Videos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🖨️</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Print Assets</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">📱</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Social Media</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🎨</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Design Assets</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🖼️</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Images</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">✍️</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Fonts</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Distributed Data */}
              <div className="w-full">
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 border border-slate-200 dark:border-slate-700 h-full">
                  {/* Centered Heading */}
                  <div className="text-center mb-8 pb-2 border-b border-slate-200 dark:border-slate-700">
                    <svg viewBox="0 0 100 100" className="w-24 h-24 mx-auto mb-1">
                      {/* Red distributed databases icon - stacked cylinders */}
                      <defs>
                        <linearGradient id="dataGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: "#ef4444", stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: "#991b1b", stopOpacity: 1}} />
                        </linearGradient>
                      </defs>
                      {/* Top database cylinder */}
                      <g transform="translate(20, 15)">
                        <ellipse cx="15" cy="0" rx="15" ry="5" fill="url(#dataGrad)" opacity="0.9" />
                        <rect x="0" y="0" width="30" height="12" fill="url(#dataGrad)" />
                        <ellipse cx="15" cy="12" rx="15" ry="5" fill="url(#dataGrad)" opacity="0.7" />
                      </g>
                      
                      {/* Middle database cylinder - offset right */}
                      <g transform="translate(45, 40)">
                        <ellipse cx="15" cy="0" rx="15" ry="5" fill="url(#dataGrad)" opacity="0.85" />
                        <rect x="0" y="0" width="30" height="12" fill="url(#dataGrad)" />
                        <ellipse cx="15" cy="12" rx="15" ry="5" fill="url(#dataGrad)" opacity="0.65" />
                      </g>
                      
                      {/* Bottom database cylinder - offset left */}
                      <g transform="translate(15, 65)">
                        <ellipse cx="15" cy="0" rx="15" ry="5" fill="url(#dataGrad)" opacity="0.8" />
                        <rect x="0" y="0" width="30" height="12" fill="url(#dataGrad)" />
                        <ellipse cx="15" cy="12" rx="15" ry="5" fill="url(#dataGrad)" opacity="0.6" />
                      </g>
                      
                      {/* Connection arrows showing data flow */}
                      <path d="M 38 28 L 48 35" stroke="url(#dataGrad)" strokeWidth="1.5" fill="none" opacity="0.7" markerEnd="url(#arrowhead)" />
                      <path d="M 62 52 L 42 60" stroke="url(#dataGrad)" strokeWidth="1.5" fill="none" opacity="0.7" markerEnd="url(#arrowhead)" />
                    </svg>
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Distributed Data</h4>
                  </div>

                  {/* Data system locations list */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🏢</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Legacy Database</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">📊</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Data Warehouse</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">👥</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">CRM System</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">📧</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Marketing Cloud</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">📱</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Analytics Data</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">💳</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Transaction Data</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">📁</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">SharePoint</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🔗</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">FTP Server</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-slate-600 dark:text-slate-400 text-sm mt-8">
              These challenges require an integrated solution to unlock customer intelligence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
