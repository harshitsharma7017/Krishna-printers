export const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya & Arjun",
      location: "Mumbai",
      text: "The Hindu traditional cards were absolutely stunning! Every guest complimented the beautiful lotus design and gold foiling. Truly exceeded our expectations.",
      rating: 5,
      ceremony: "Hindu Wedding"
    },
    {
      name: "Sarah & Michael", 
      location: "Delhi",
      text: "Our Christian wedding invitations were elegant and timeless. The quality was exceptional and the team was so patient with our revisions.",
      rating: 5,
      ceremony: "Christian Wedding"
    },
    {
      name: "Fatima & Hassan",
      location: "Hyderabad", 
      text: "The Islamic calligraphy on our wedding cards was breathtaking. The attention to detail and respect for our traditions was remarkable.",
      rating: 5,
      ceremony: "Muslim Wedding"
    },
    {
      name: "Simran & Rajveer",
      location: "Chandigarh",
      text: "Perfect Sikh wedding invitations with beautiful Gurmukhi script. The royal blue and gold combination was exactly what we envisioned.",
      rating: 5,
      ceremony: "Sikh Wedding"
    }
  ];

  return (
    <section className="py-20 px-6 wedding-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Happy <span className="text-wedding-rose">Couples</span>
          </h2>
          <div className="w-24 h-1 bg-wedding-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Read what our couples say about their experience with Eternal Elegance wedding invitations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="wedding-card p-8">
              <div className="mb-6">
                <div className="flex text-wedding-gold mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-muted-foreground italic leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="border-t border-wedding-rose/20 pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-wedding-rose font-medium bg-wedding-blush px-3 py-1 rounded-full">
                      {testimonial.ceremony}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};