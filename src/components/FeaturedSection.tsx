import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Award, Users, Clock } from "lucide-react";

export const FeaturedSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/10">
      <div className="container mx-auto px-4">
        {/* Decorative Stickers Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border border-primary/20">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20"></div>
                  <div className="absolute inset-2 bg-gradient-to-br from-primary/60 to-accent/60 rounded-full flex items-center justify-center">
                    <div className="text-white font-bold text-2xl">♕</div>
                  </div>
                  <div className="absolute -inset-4 border-4 border-primary/30 rounded-full"></div>
                  <div className="absolute -inset-8 border-2 border-accent/20 rounded-full"></div>
                </div>
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Premium Stickers
                </h3>
                <p className="text-muted-foreground mb-6">
                  Understanding that each couple's story is beautifully unique, we offer a wide array of 
                  interchangeable stickers, designed to honor different occasions, cultures, and religious practices.
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  LEARN MORE
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Why Choose Us
              </h2>
              <p className="text-xl text-muted-foreground">
                15+ years of creating beautiful memories
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Star,
                  title: "5-Star Quality",
                  description: "Premium materials and craftsmanship"
                },
                {
                  icon: Award,
                  title: "Award Winning",
                  description: "Recognized for excellence in design"
                },
                {
                  icon: Users,
                  title: "10,000+ Couples",
                  description: "Trusted by thousands of families"
                },
                {
                  icon: Clock,
                  title: "Fast Delivery",
                  description: "Quick turnaround without compromise"
                }
              ].map((feature, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur border-border/50">
                  <CardContent className="p-0">
                    <feature.icon className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "15+", label: "Years Experience" },
            { number: "10k+", label: "Happy Couples" },
            { number: "500+", label: "Unique Designs" },
            { number: "99%", label: "Customer Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};