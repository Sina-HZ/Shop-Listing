import { ProductDetail } from "@/types/products";

export interface ListItemProps {
  data: ProductDetail[];
  onClick: (id: string) => void;
  selectedItems: Map<string, boolean>;
}
