import { useState } from "react";
import { ProductDetail } from "@/types/products";

const useProductService = (initialProducts: ProductDetail[]) => {
  const [products, setProducts] = useState<ProductDetail[]>(initialProducts);
  const [selectedItems, setSelectedItems] = useState(new Map());

  const selectProductItem = (id: string) => {
    const newSelectedItemsState = new Map(selectedItems);

    if (newSelectedItemsState.has(id)) {
      newSelectedItemsState.delete(id);
    } else {
      newSelectedItemsState.set(id, true);
    }

    setSelectedItems(newSelectedItemsState);
  };

  const deleteProductBulk = () => {
    if (selectedItems.size !== 0) {
      const remainProducts: ProductDetail[] = [];
      products.forEach((item) => {
        if (!selectedItems.has(item.id)) {
          remainProducts.push(item);
        }
      });
      setProducts(remainProducts);
    }
  };

  const submitNewProduct = (value: ProductDetail) => {
    setProducts([...products, value]);
  };

  return {
    selectProductItem,
    deleteProductBulk,
    submitNewProduct,
    products,
    setProducts,
    selectedItems,
    setSelectedItems,
  };
};

export default useProductService;
