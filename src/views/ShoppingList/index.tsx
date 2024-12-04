// import Header from "@Components/Header"

import Header from "@Components/Header";
import CreateItem from "./components/CreateItem";
import ListItem, { ProductDetail } from "./components/ListItem";
import rawData from "@/raw-data";
import IconButton from "@Components/IconButton";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const ShoppingList = () => {
  const [products, setProducts] = useState(rawData.products);
  const [selectedItems, setSelectedItems] = useState(new Map());

  const selectItemHandler = (id: string) => {
    const newSelectedItemsState = new Map(selectedItems);

    if (newSelectedItemsState.has(id)) {
      newSelectedItemsState.delete(id);
    } else {
      newSelectedItemsState.set(id, true);
    }

    setSelectedItems(newSelectedItemsState);
  };

  const deleteItemsHandler = () => {
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

  const submitNewProductHandler = (value: ProductDetail) => {
    setProducts([...products, value]);
  };

  return (
    <div>
      <Header
        title="Shopping List"
        right={
          <IconButton onClick={deleteItemsHandler}>
            <TrashIcon className="size-6 text-gray-900" />
          </IconButton>
        }
      />
      <div className="flex-1">
        <ListItem
          data={products}
          onClick={selectItemHandler}
          selectedItems={selectedItems}
        />
      </div>
      <CreateItem onSubmit={submitNewProductHandler} />
    </div>
  );
};

export default ShoppingList;
