export const About = () => {
  return (
    <section className="py-20 px-6 wedding-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            About <span className="text-wedding-rose">Our Story</span>
          </h2>
          <div className="w-24 h-1 bg-wedding-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With over 15 years of experience in crafting wedding invitations, we understand that 
            your special day deserves nothing less than perfection.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="wedding-card p-8 text-center group">
            <div className="w-16 h-16 bg-wedding-rose/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl text-wedding-rose">❤️</span>
            </div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">
              Passion for Excellence
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Every invitation is crafted with love and attention to detail, 
              ensuring your wedding cards reflect the beauty of your unique love story.
            </p>
          </div>
          
          <div className="wedding-card p-8 text-center group">
            <div className="w-16 h-16 bg-wedding-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl text-wedding-gold">✨</span>
            </div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">
              Premium Quality
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We use only the finest papers, elegant foiling, and premium printing techniques 
              to create invitations that feel as special as they look.
            </p>
          </div>
          
          <div className="wedding-card p-8 text-center group">
            <div className="w-16 h-16 bg-wedding-sage/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl text-wedding-sage">🌿</span>
            </div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">
              Personalized Service
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              From concept to creation, we work closely with you to bring your vision to life, 
              offering personalized consultations and unlimited revisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};