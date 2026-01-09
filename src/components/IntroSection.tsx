export const IntroSection = () => {
  return (
    <section id="intro" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
            <div className="h-20 w-20 bg-primary rounded-full flex items-center justify-center">
              <svg className="h-12 w-12 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            TechnoRetail
            <span className="block text-primary mt-2">Digital Transformation</span>
          </h1>
          
          <div className="border-t border-b border-border py-6 my-8">
            <p className="text-sm text-muted-foreground mb-2">Presented By</p>
            <p className="text-lg font-medium">Sravan Kollapudi</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
            <p className="text-sm text-muted-foreground mb-3">Presenting To</p>
            <div className="flex flex-wrap justify-center gap-4 text-xl font-medium">
              <span>Eric Wood</span>
              <span className="text-muted-foreground">•</span>
              <span>Deepak Narisety</span>
              <span className="text-muted-foreground">•</span>
              <span>Jessica Narisety</span>
              <span className="text-muted-foreground">•</span>
              <span>Alex Glaser</span>
              <span className="text-muted-foreground">•</span>
              <span>Vince Hsieh</span>
            </div>
          </div>

          <div className="pt-12 animate-bounce">
            <svg className="h-6 w-6 mx-auto text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
