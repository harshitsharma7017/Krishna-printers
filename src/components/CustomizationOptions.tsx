export const CustomizationOptions = () => {
  const options = [
    {
      title: "Premium Papers",
      items: ["Handmade Paper", "Silk Texture", "Pearl Finish", "Linen Weave", "Metallic Sheets"],
      icon: "📄"
    },
    {
      title: "Foiling Options",
      items: ["Gold Foil", "Silver Foil", "Rose Gold", "Copper", "Holographic"],
      icon: "✨"
    },
    {
      title: "Special Effects",
      items: ["Embossing", "Debossing", "Laser Cutting", "Die Cutting", "Letterpress"],
      icon: "🎨"
    },
    {
      title: "Color Schemes",
      items: ["Custom Pantone", "Gradient Effects", "Metallic Accents", "Watercolor", "Monochrome"],
      icon: "🌈"
    }
  ];

  return (
    <section className="py-20 px-6 wedding-elegant-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            <span className="text-wedding-rose">Customization</span> Options
          </h2>
          <div className="w-24 h-1 bg-wedding-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Make your invitation truly unique with our extensive customization options. 
            Every detail can be tailored to match your wedding theme perfectly.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {options.map((option, index) => (
            <div key={index} className="wedding-card p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-wedding-rose/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{option.icon}</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  {option.title}
                </h3>
              </div>
              
              <ul className="space-y-2">
                {option.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-wedding-gold rounded-full mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};