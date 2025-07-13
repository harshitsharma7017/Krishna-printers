import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Catalog = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Wedding Cards Collection
          </h2>
          <p className="text-lg text-muted-foreground">OUR BEST SELLERS</p>
        </div>

        {/* Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              title: "Personalized Wedding Invite-299",
              price: "Rs. 62.30",
              image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
              category: "Traditional"
            },
            {
              title: "Personalized Holy Communion Invite-007",
              price: "Rs. 62.30",
              image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=250&fit=crop",
              category: "Religious"
            },
            {
              title: "Personalized Wedding Invite-275",
              price: "Rs. 62.30",
              image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=250&fit=crop",
              category: "Modern"
            },
            {
              title: "Personalized Wedding Invite-297",
              price: "Rs. 62.30",
              image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=250&fit=crop",
              category: "Premium"
            }
          ].map((card, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border/50">
              <div className="relative">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                  {card.category}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium text-sm text-foreground mb-2">{card.title}</h3>
                <p className="text-lg font-bold text-primary">{card.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  ADD TO CART
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Hindu Wedding Cards",
              description: "Traditional designs with sacred symbols and vibrant colors",
              image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
              count: "150+ Designs"
            },
            {
              name: "Muslim Wedding Cards", 
              description: "Elegant Islamic calligraphy and geometric patterns",
              image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop",
              count: "120+ Designs"
            },
            {
              name: "Christian Wedding Cards",
              description: "Classic designs featuring crosses and elegant typography",
              image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=400&h=300&fit=crop",
              count: "80+ Designs"
            },
            {
              name: "Modern Contemporary",
              description: "Minimalist designs with clean lines and sophistication",
              image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
              count: "200+ Designs"
            },
            {
              name: "Luxury Boxed Cards",
              description: "Premium boxed sets with elegant packaging",
              image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=400&h=300&fit=crop",
              count: "50+ Designs"
            },
            {
              name: "Digital Invitations",
              description: "Modern digital cards for eco-conscious couples",
              image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
              count: "300+ Designs"
            }
          ].map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur border-border/50">
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.count}</p>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Explore Collection
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};