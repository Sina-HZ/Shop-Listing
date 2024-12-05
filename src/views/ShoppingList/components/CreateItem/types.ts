import { ProductDetail } from "@/types/products";

export interface CreateItemProps {
  onSubmit: (value: ProductDetail) => void;
}
