export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "Share your vision, wedding theme, and preferences with our design experts",
      icon: "💬"
    },
    {
      number: "02", 
      title: "Design Creation",
      description: "We create initial concepts based on your style and cultural preferences",
      icon: "🎨"
    },
    {
      number: "03",
      title: "Review & Refine",
      description: "Review designs and request unlimited revisions until it's perfect",
      icon: "✏️"
    },
    {
      number: "04",
      title: "Sample Approval",
      description: "Approve your final design with a physical sample for quality assurance",
      icon: "✅"
    },
    {
      number: "05",
      title: "Production",
      description: "Your invitations are professionally printed using premium materials",
      icon: "🖨️"
    },
    {
      number: "06",
      title: "Delivery",
      description: "Carefully packaged and delivered to your doorstep ready for distribution",
      icon: "📦"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            How It <span className="text-wedding-rose">Works</span>
          </h2>
          <div className="w-24 h-1 bg-wedding-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our simple 6-step process ensures your wedding invitations are perfect from concept to delivery.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="wedding-card p-6 relative">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-wedding-rose text-white rounded-full flex items-center justify-center font-heading font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-2xl mb-3">{step.icon}</div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Connector line for larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-wedding-rose/30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};