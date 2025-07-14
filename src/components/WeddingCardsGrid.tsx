"use client";

import { useEffect, useState } from "react";
import { fetchWeddingCards} from "../api/productApi.ts"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Star, Eye, Heart, ShoppingCart, Truck, Shield, Palette } from "lucide-react";

interface WeddingCard {
  _id: string;
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
  const [weddingCards, setWeddingCards] = useState<WeddingCard[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const loadCards = async () => {
      try {
        const data = await fetchWeddingCards();
        setWeddingCards(data);
      } catch (err) {
        console.error("Failed to load wedding cards", err);
      }
    };

    loadCards();
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : i < rating
            ? "fill-yellow-400/50 text-yellow-400"
            : "text-gray-300"
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

        {weddingCards.length === 0 ? (
          <p className="text-center py-10 text-muted-foreground">Loading cards...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingCards.map((card) => (
              <Card key={card._id} className="group hover:shadow-lg transition-all duration-300 border border-border/50">
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
                    onClick={() => toggleFavorite(card._id)}
                  >
                    <Heart className={`w-4 h-4 ${favorites.includes(card._id) ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
                  </Button>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 min-h-[3.5rem]">{card.title}</h3>

                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">{renderStars(card.rating)}</div>
                    <span className="text-sm text-muted-foreground">{card.rating} ({card.reviews} reviews)</span>
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
                    <Button className="flex-1" disabled={!card.inStock}>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {card.inStock ? "Add to Cart" : "Out of Stock"}
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
                          </div>

                          <div className="space-y-4">
                            <div>
                              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                              <div className="flex items-center gap-2 mb-4">
                                <div className="flex items-center">{renderStars(card.rating)}</div>
                                <span className="text-muted-foreground">{card.rating} ({card.reviews} reviews)</span>
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
                                {card.inStock ? "Add to Cart" : "Out of Stock"}
                              </Button>
                              <Button variant="outline" onClick={() => toggleFavorite(card._id)}>
                                <Heart className={`w-4 h-4 ${favorites.includes(card._id) ? "fill-red-500 text-red-500" : ""}`} />
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
        )}
      </div>
    </section>
  );
};
