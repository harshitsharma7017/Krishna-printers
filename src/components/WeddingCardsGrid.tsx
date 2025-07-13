import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Star, Eye, Heart, ShoppingCart, Truck, Shield, Palette } from "lucide-react";

interface WeddingCard {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  features: string[];
  description: string;
  inStock: boolean;
  fastDelivery: boolean;
  customizable: boolean;
}

export const WeddingCardsGrid = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const weddingCards: WeddingCard[] = [
    {
      id: 1,
      title: "Royal Hindu Wedding Invitation with Gold Foiling",
      price: 125,
      originalPrice: 180,
      rating: 4.8,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      category: "Hindu Traditional",
      features: ["Gold Foil Stamping", "Premium Paper", "Laser Cut Design", "Custom Text"],
      description: "Elegant Hindu wedding invitation featuring traditional motifs with gold foiling on premium cardstock.",
      inStock: true,
      fastDelivery: true,
      customizable: true
    },
    {
      id: 2,
      title: "Modern Minimalist Wedding Card Set",
      price: 95,
      originalPrice: 130,
      rating: 4.7,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop",
      category: "Modern",
      features: ["Minimalist Design", "Eco Paper", "Multiple Cards", "RSVP Included"],
      description: "Clean and sophisticated modern wedding invitation perfect for contemporary couples.",
      inStock: true,
      fastDelivery: true,
      customizable: true
    },
    {
      id: 3,
      title: "Islamic Calligraphy Wedding Invitation",
      price: 110,
      originalPrice: 155,
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
      category: "Islamic",
      features: ["Arabic Calligraphy", "Geometric Patterns", "Premium Finish", "Cultural Design"],
      description: "Beautiful Islamic wedding invitation with authentic calligraphy and traditional patterns.",
      inStock: true,
      fastDelivery: false,
      customizable: true
    },
    {
      id: 4,
      title: "Luxury Boxed Wedding Invitation Suite",
      price: 250,
      originalPrice: 320,
      rating: 4.9,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
      category: "Luxury",
      features: ["Elegant Box", "Multiple Cards", "Wax Seal", "Ribbon Details"],
      description: "Premium boxed wedding invitation suite with multiple cards and luxury finishing touches.",
      inStock: true,
      fastDelivery: false,
      customizable: true
    },
    {
      id: 5,
      title: "Floral Watercolor Wedding Cards",
      price: 85,
      originalPrice: 115,
      rating: 4.6,
      reviews: 267,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      category: "Floral",
      features: ["Watercolor Art", "Botanical Design", "Soft Colors", "Nature Theme"],
      description: "Romantic floral wedding invitation with beautiful watercolor botanical illustrations.",
      inStock: true,
      fastDelivery: true,
      customizable: true
    },
    {
      id: 6,
      title: "Vintage Scroll Wedding Invitation",
      price: 140,
      originalPrice: 190,
      rating: 4.8,
      reviews: 134,
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop",
      category: "Vintage",
      features: ["Scroll Design", "Vintage Font", "Antique Finish", "Unique Style"],
      description: "Vintage-inspired scroll wedding invitation with antique finishing and classic typography.",
      inStock: false,
      fastDelivery: false,
      customizable: true
    }
  ];

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? 'fill-yellow-400 text-yellow-400' 
            : i < rating 
              ? 'fill-yellow-400/50 text-yellow-400' 
              : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Wedding Invitation Cards</h2>
          <p className="text-muted-foreground">Choose from our collection of beautiful wedding invitations</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {weddingCards.map((card) => (
            <Card key={card.id} className="group hover:shadow-lg transition-all duration-300 border border-border/50">
              <div className="relative overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
                  {card.category}
                </Badge>
                {!card.inStock && (
                  <Badge variant="destructive" className="absolute top-2 right-2">
                    Out of Stock
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                  onClick={() => toggleFavorite(card.id)}
                >
                  <Heart className={`w-4 h-4 ${favorites.includes(card.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                </Button>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 min-h-[3.5rem]">
                  {card.title}
                </h3>

                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    {renderStars(card.rating)}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {card.rating} ({card.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl font-bold text-primary">₹{card.price}</span>
                  {card.originalPrice && (
                    <>
                      <span className="text-sm text-muted-foreground line-through">₹{card.originalPrice}</span>
                      <Badge variant="secondary" className="text-xs">
                        {Math.round(((card.originalPrice - card.price) / card.originalPrice) * 100)}% OFF
                      </Badge>
                    </>
                  )}
                </div>

                <div className="space-y-2 mb-4">
                  {card.features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  {card.fastDelivery && (
                    <div className="flex items-center gap-1">
                      <Truck className="w-3 h-3" />
                      <span>Fast Delivery</span>
                    </div>
                  )}
                  {card.customizable && (
                    <div className="flex items-center gap-1">
                      <Palette className="w-3 h-3" />
                      <span>Customizable</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    <span>Quality Assured</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0 space-y-2">
                <div className="flex gap-2 w-full">
                  <Button 
                    className="flex-1" 
                    disabled={!card.inStock}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {card.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle>{card.title}</DialogTitle>
                      </DialogHeader>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-80 object-cover rounded-lg"
                          />
                          <div className="grid grid-cols-3 gap-2">
                            {[1, 2, 3].map((i) => (
                              <img
                                key={i}
                                src={card.image}
                                alt={`${card.title} view ${i}`}
                                className="w-full h-20 object-cover rounded border cursor-pointer hover:border-primary"
                              />
                            ))}
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                            <div className="flex items-center gap-2 mb-4">
                              <div className="flex items-center">
                                {renderStars(card.rating)}
                              </div>
                              <span className="text-muted-foreground">
                                {card.rating} ({card.reviews} reviews)
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-3xl font-bold text-primary">₹{card.price}</span>
                            {card.originalPrice && (
                              <span className="text-lg text-muted-foreground line-through">₹{card.originalPrice}</span>
                            )}
                          </div>

                          <p className="text-muted-foreground">{card.description}</p>

                          <div>
                            <h4 className="font-semibold mb-2">Features:</h4>
                            <ul className="space-y-1">
                              {card.features.map((feature, index) => (
                                <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-2 pt-4">
                            <Button className="flex-1" disabled={!card.inStock}>
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              {card.inStock ? 'Add to Cart' : 'Out of Stock'}
                            </Button>
                            <Button variant="outline" onClick={() => toggleFavorite(card.id)}>
                              <Heart className={`w-4 h-4 ${favorites.includes(card.id) ? 'fill-red-500 text-red-500' : ''}`} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};