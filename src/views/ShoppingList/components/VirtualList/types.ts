import { ProductDetail } from "@/types/products";

export interface VirtualListProps {
  data: ProductDetail[];
  onClick: (id: string) => void;
  selectedItems: Map<string, boolean>;
}

export interface ItemWrapperProps extends ProductDetail {
  children: React.ReactNode;
}
