import { useState } from "react";
import { ProductDetail } from "@/types/products";

const useProductService = (initialProducts: ProductDetail[]) => {
  const [products, setProducts] = useState<ProductDetail[]>(initialProducts);
  const [selectedItems, setSelectedItems] = useState<Map<string, boolean>>(
    new Map(),
  );

  // it handles selected product item and determines the given item should be added to or removed from selectedItems collection.
  const selectProductItem = (id: string) => {
    const newSelectedItemsState = new Map(selectedItems);

    if (newSelectedItemsState.has(id)) {
      newSelectedItemsState.delete(id);
    } else {
      newSelectedItemsState.set(id, true);
    }

    setSelectedItems(newSelectedItemsState);
  };

  // it deletes slected product from products arrey then reset selectedItems state.
  const deleteProductBulk = () => {
    if (selectedItems.size !== 0) {
      const remainProducts: ProductDetail[] = [];

      products.forEach((item) => {
        if (!selectedItems.has(item.id)) {
          remainProducts.push(item);
        }
      });

      setSelectedItems(new Map());
      setProducts(remainProducts);
    }
  };

  // it adds given product as value to products array.
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
