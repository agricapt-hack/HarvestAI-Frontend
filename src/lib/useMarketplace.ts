import { useQuery } from '@tanstack/react-query';
import { allItems } from '../data/marketplaceData';
interface MarketplaceItem {
  id: number;
  title: string;
  description: string;
  priceRange: string;
  image?: string;
  color?: string;
  icon?: React.FC<{ className?: string }>;
  type: 'product' | 'service';
  features?: string[];
  // Add more fields as per API response
}

export const useMarketplaceItems = () => {
  return useQuery({
    queryKey: ['marketplaceItems'],
    queryFn: () => Promise.resolve(allItems),
  });
};
export const useMarketplaceItem = (id: string) => {
  return useQuery({
    queryKey: ['marketplaceItem', id],
    queryFn: () => {
      const item = allItems.find(item => item.id === parseInt(id));
      if (!item) {
        throw new Error('Item not found');
      }
      return item;
    },
  });
};
