import { Button } from "@/components/ui/button";
import heroImage from "@/assets/wedding-hero.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center wedding-hero-gradient overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Elegant wedding invitations"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-wedding-blush/60 via-wedding-ivory/40 to-wedding-gold/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-foreground animate-fade-in">
          <span className="text-wedding-rose">Eternal</span> 
          <span className="text-wedding-gold mx-3">Elegance</span>
          <br />
          <span className="text-2xl md:text-4xl font-medium text-muted-foreground">Wedding Invitations</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-200">
          Crafting beautiful moments through exquisite wedding invitations. 
          From traditional to contemporary designs, we bring your love story to life.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-400">
          <Button 
            size="lg" 
            className="wedding-button px-8 py-4 text-lg rounded-full"
          >
            Browse Our Collection
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-4 text-lg rounded-full border-wedding-rose text-wedding-rose hover:bg-wedding-blush"
          >
            Get a Free Quote
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-wedding-gold/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-wedding-rose/10 rounded-full blur-2xl animate-float delay-1000"></div>
    </section>
  );
};