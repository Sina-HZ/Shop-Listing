import rawData from "@/raw-data";
import { TrashIcon } from "@heroicons/react/24/solid";
import Header from "@Components/Header";
import IconButton from "@Components/IconButton";
import ListItem from "./components/ListItem";
import CreateItem from "./components/CreateItem";
import useProductService from "@/hooks/useProductService";

const ShoppingList = () => {
  const {
    deleteProductBulk,
    selectProductItem,
    submitNewProduct,
    products,
    selectedItems,
  } = useProductService(rawData.products);

  return (
    <div>
      <Header
        title="Shopping List"
        right={
          <IconButton onClick={deleteProductBulk}>
            <TrashIcon className="size-6 text-gray-900" />
          </IconButton>
        }
      />
      <div className="flex-1">
        <ListItem
          data={products}
          onClick={selectProductItem}
          selectedItems={selectedItems}
        />
      </div>
      <CreateItem onSubmit={submitNewProduct} />
    </div>
  );
};

export default ShoppingList;
