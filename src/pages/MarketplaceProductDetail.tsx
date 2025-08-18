import React from "react";
import { useParams, Link } from "react-router-dom";
import { useMarketplaceItem, useMarketplaceItems } from "@/lib/useMarketplace";
import { ArrowLeft, Star, Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from "react-i18next";

const MarketplaceProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const { data: item, isLoading, error } = useMarketplaceItem(id!);
  const { data: allItems } = useMarketplaceItems();

  if (isLoading) {
    return <div className="container mx-auto py-8">Loading...</div>;
  }

  if (error || !item) {
    return (
      <div className="container mx-auto py-8">
        <p className="text-red-500 font-semibold">{t("Item not found.")}</p>
        <Link to="/marketplace" className="text-blue-600 underline flex items-center gap-2 mt-3">
          <ArrowLeft size={16}/> {t("Back to Marketplace")}
        </Link>
      </div>
    );
  }

  // Enhanced placeholders
  const features = item.features || [
    t("High quality and certified"),
    t("Competitive pricing"),
    t("Fast delivery"),
    t("Expert support")
  ];

  const sellerInfo = {
    name: t("Agri Suppliers Inc."),
    location: t("Rural Farms, India"),
    contact: "+91-1234567890",
    email: "info@agrisuppliers.com"
  }; // TODO: Fetch from API

  const reviews = [
    { user: t("Farmer John"), rating: 5, comment: t("Excellent product, highly recommend!") },
    { user: t("Agri Expert"), rating: 4, comment: t("Good quality, but delivery could be faster.") }
  ]; // TODO: Fetch from API

  const relatedItems = allItems?.filter(i => i.type === item.type && i.id !== item.id).slice(0, 3) || [];

  return (
    <div className="container mx-auto py-8 max-w-5xl">
      <Link to="/marketplace" className="text-primary hover:underline flex items-center gap-2 mb-8">
        <ArrowLeft size={20} /> {t("Back to Marketplace")}
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Card className="overflow-hidden">
            <CardHeader className="bg-muted/50">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-3xl mb-2">{t(item.title)}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{t(item.type)}</Badge>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" className={i < 4.5 ? "text-yellow-400" : "text-gray-300"} />
                      ))}
                      <span className="ml-2 text-sm text-muted-foreground">(24 {t("reviews")})</span>
                    </div>
                  </div>
                </div>
                <span className="text-2xl font-bold">{item.priceRange}</span>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-6">
                {item.image ? (
                  <img src={item.image} alt={t(item.title)} className="w-full h-64 object-cover rounded-lg mb-4" />
                ) : (
                  item.icon && <item.icon className={`w-24 h-24 mx-auto mb-4 ${item.color || 'text-gray-500'}`} />
                )}
              </div>

              <p className="text-muted-foreground mb-6">{t(item.description)}</p>

              <Separator className="my-6" />

              <h3 className="text-xl font-semibold mb-4">{t("Key Features")}</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Tabs defaultValue="details" className="mb-8">
                <TabsList>
                  <TabsTrigger value="details">{t("Details")}</TabsTrigger>
                  <TabsTrigger value="reviews">{t("Reviews")}</TabsTrigger>
                </TabsList>
                <TabsContent value="details">
                  <p className="text-muted-foreground">{t("Detailed information about the product/service, including specifications, usage instructions, and benefits.")}</p>
                </TabsContent>
                <TabsContent value="reviews">
                  {reviews.map((review, index) => (
                    <div key={index} className="border-b py-4 last:border-b-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">{review.user}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill="currentColor" className={i < review.rating ? "text-yellow-400" : "text-gray-300"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>

              <Button size="lg" className="w-full">
                {item.type === 'product' ? t("Add to Cart") : t("Contact Provider")}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>{t("Seller Information")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-muted-foreground" />
                  <span>{sellerInfo.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-muted-foreground" />
                  <span>{sellerInfo.contact}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-muted-foreground" />
                  <span>{sellerInfo.email}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2 className="text-2xl font-bold my-8">{t("Related Items")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedItems.map((relItem) => (
          <Link key={relItem.id} to={`/marketplace/${relItem.id}`}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center">
                  {relItem.image ? (
                    <img src={relItem.image} alt={t(relItem.title)} className="w-24 h-24 object-cover rounded mb-3" />
                  ) : (
                    relItem.icon && <relItem.icon className={`w-12 h-12 mb-3 ${relItem.color}`} />
                  )}
                  <h3 className="font-semibold mb-1">{t(relItem.title)}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{t(relItem.description).substring(0, 60)}...</p>
                  <span className="font-bold">{relItem.priceRange}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceProductDetail;
