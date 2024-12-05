export interface ProductCardProps {
  selected?: boolean;
  id: string;
  base64Image?: string;
  description?: string;
  price?: number;
  strikePrice?: number;
  title: string;
  image?: string;
}
