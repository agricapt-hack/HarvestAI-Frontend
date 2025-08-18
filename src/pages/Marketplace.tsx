import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMarketplaceItems } from "@/lib/useMarketplace";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Box, Search, Star, ArrowUpDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useTranslation } from "react-i18next";
import { Skeleton } from "@/components/ui/skeleton";

const Marketplace: React.FC = () => {
  const { data: allItems = [], isLoading, error } = useMarketplaceItems();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "product" | "service">("all");
  const [sortBy, setSortBy] = useState<"name" | "price" | "rating">("name");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const { t } = useTranslation();

  if (error) {
    return <div className="container mx-auto py-8 text-destructive">Error: {error.message}</div>;
  }

  const filteredItems = allItems.filter(item => {
    const matchesSearch = t(item.title).toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t(item.description).toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = activeTab === "all" || item.type === activeTab;
    return matchesSearch && matchesType;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === "name") {
      return t(a.title).localeCompare(t(b.title));
    } else if (sortBy === "price") {
      const getMinPrice = (range: string) => {
        const numbers = range.match(/\d+(?:\.\d+)?/g);
        return numbers ? parseFloat(numbers[0]) : 0;
      };
      return getMinPrice(a.priceRange) - getMinPrice(b.priceRange);
    } else if (sortBy === "rating") {
      return (b.rating || 0) - (a.rating || 0); // Descending
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);
  const paginatedItems = sortedItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
        <Box className="inline-block w-8 h-8" /> {t("Marketplace")}
      </h1>
      <p className="mb-6 text-muted-foreground">{t("Find seeds, fertilizers, agri services, and more!")}</p>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <Input
            type="text"
            placeholder={t("Search items...")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full"
          />
        </div>
        <Select value={sortBy} onValueChange={(value: "name" | "price" | "rating") => setSortBy(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={t("Sort by")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">{t("Name")}</SelectItem>
            <SelectItem value="price">{t("Price")}</SelectItem>
            <SelectItem value="rating">{t("Rating")}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "all" | "product" | "service")} className="mb-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">{t("All")}</TabsTrigger>
          <TabsTrigger value="product">{t("Products")}</TabsTrigger>
          <TabsTrigger value="service">{t("Services")}</TabsTrigger>
        </TabsList>
      </Tabs>
      
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <Card key={index} className="p-5 h-[300px] flex flex-col items-center justify-between">
              <Skeleton className="w-32 h-32 rounded-lg" />
              <Skeleton className="h-6 w-3/4 mt-3" />
              <Skeleton className="h-4 w-full mt-2" />
              <Skeleton className="h-4 w-1/2 mt-2" />
              <Skeleton className="h-4 w-1/3 mt-2" />
            </Card>
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {paginatedItems.map((item) => (
              <Link
                key={item.id}
                to={`/marketplace/${item.id}`}
                className="focus:outline-none focus:ring-2 focus:ring-primary block"
              >
                <Card className="flex flex-col items-center p-5 hover:shadow-lg transition cursor-pointer h-full">
                  {/* Image or Icon */}
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={t(item.title)}
                      className="w-32 h-32 object-cover mb-3 rounded-lg shadow-md"
                    />
                  ) : (
                    item.icon && <item.icon className={`w-8 h-8 mb-3 ${item.color || 'text-gray-500'}`} />
                  )}
                  <h2 className="font-semibold text-lg mb-1 text-center">{t(item.title)}</h2>
                  <p className="text-sm text-muted-foreground mb-2 text-center line-clamp-2">{t(item.description)}</p>
                  <p className="font-bold text-primary mb-2">{item.priceRange}</p>
                  <div className="flex items-center text-yellow-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(item.rating || 4.5) ? "fill-current" : ""}
                      />
                    ))}
                    <span className="text-sm ml-1">({item.reviewsCount || 28} {t("reviews")})</span>
                  </div>
                  <div className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                    {t(item.type.charAt(0).toUpperCase() + item.type.slice(1))}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          {paginatedItems.length === 0 && (
            <p className="text-center text-muted-foreground mt-8">{t("No items found.")}</p>
          )}
          {totalPages > 1 && (
            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      onClick={() => handlePageChange(index + 1)}
                      isActive={currentPage === index + 1}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </>
      )}
    </div>
  );
};

export default Marketplace;
