import { Button } from "@/components/ui/button";

const catalogItems = [
  {
    title: "Hindu Traditional",
    description: "Sacred designs featuring lotus motifs, Sanskrit verses, and vibrant colors",
    image: "🕉️",
    color: "bg-orange-100 text-orange-600"
  },
  {
    title: "Muslim Elegant",
    description: "Beautiful Islamic calligraphy and geometric patterns in gold and emerald",
    image: "☪️",
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    title: "Sikh Heritage",
    description: "Gurmukhi script and Khanda symbols with traditional Punjab colors",
    image: "🪯",
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Christian Classic",
    description: "Timeless cross designs with elegant typography and soft pastels",
    image: "✝️",
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Modern Minimalist",
    description: "Clean lines, contemporary fonts, and sophisticated color palettes",
    image: "💎",
    color: "bg-gray-100 text-gray-600"
  },
  {
    title: "Eco-Friendly",
    description: "Sustainable papers with botanical prints and earth-friendly inks",
    image: "🌱",
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Royal Scrolls",
    description: "Traditional scroll invitations with wax seals and ribbon ties",
    image: "📜",
    color: "bg-amber-100 text-amber-600"
  },
  {
    title: "Luxury Boxed",
    description: "Premium gift boxes with layered cards and decorative elements",
    image: "🎁",
    color: "bg-rose-100 text-rose-600"
  }
];

export const Catalog = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Our <span className="text-wedding-rose">Wedding Collection</span>
          </h2>
          <div className="w-24 h-1 bg-wedding-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our carefully curated collection of wedding invitations, 
            each design thoughtfully crafted to celebrate different traditions and styles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {catalogItems.map((item, index) => (
            <div 
              key={index} 
              className="wedding-card p-6 text-center group cursor-pointer"
            >
              <div className={`w-20 h-20 ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{item.image}</span>
              </div>
              
              <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                {item.description}
              </p>
              
              <Button 
                variant="outline" 
                size="sm"
                className="border-wedding-rose text-wedding-rose hover:bg-wedding-blush"
              >
                Enquire Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};