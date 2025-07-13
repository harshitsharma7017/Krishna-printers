import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Get In <span className="text-wedding-rose">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-wedding-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to create your perfect wedding invitations? Contact us for a free consultation 
            and let's bring your vision to life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="wedding-card p-6">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-foreground">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-wedding-rose/10 rounded-full flex items-center justify-center">
                    <span className="text-wedding-rose text-xl">📞</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-wedding-gold/10 rounded-full flex items-center justify-center">
                    <span className="text-wedding-gold text-xl">💬</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">WhatsApp</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-wedding-sage/20 rounded-full flex items-center justify-center">
                    <span className="text-wedding-sage text-xl">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">123 Wedding Street, Connaught Place, New Delhi - 110001</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="wedding-button w-full">
                  Chat on WhatsApp
                </Button>
              </div>
            </Card>
            
            {/* Pricing Information */}
            <Card className="wedding-card p-6">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-foreground">
                Starting Packages
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-wedding-rose/20 pb-2">
                  <span className="text-muted-foreground">Basic Package (100 cards)</span>
                  <span className="font-semibold text-foreground">₹15,000</span>
                </div>
                <div className="flex justify-between items-center border-b border-wedding-rose/20 pb-2">
                  <span className="text-muted-foreground">Premium Package (200 cards)</span>
                  <span className="font-semibold text-foreground">₹25,000</span>
                </div>
                <div className="flex justify-between items-center border-b border-wedding-rose/20 pb-2">
                  <span className="text-muted-foreground">Luxury Package (300 cards)</span>
                  <span className="font-semibold text-foreground">₹40,000</span>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                *Bulk discounts available for orders above 500 cards
              </p>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="wedding-card p-8">
            <h3 className="text-2xl font-heading font-semibold mb-6 text-foreground">
              Send us a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Partner's Name
                  </label>
                  <Input placeholder="Enter partner's name" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <Input placeholder="+91 98765 43210" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Wedding Date
                </label>
                <Input type="date" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your wedding theme, preferred style, quantity needed, and any special requirements..."
                  rows={4}
                />
              </div>
              
              <Button type="submit" className="wedding-button w-full">
                Send Inquiry
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};