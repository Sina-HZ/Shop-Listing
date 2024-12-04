// import Header from "@Components/Header"

import Header from "@Components/Header";
import CreateItem from "./components/CreateItem";
import ListItem from "./components/ListItem";
import rawData from "@/raw-data";
import IconButton from "@Components/IconButton";
import { TrashIcon } from "@heroicons/react/24/solid";

const ShoppingList = () => {
  return (
    <div>
      <Header
        title="Shopping List"
        right={
          <IconButton>
            <TrashIcon className="size-6 text-gray-900" />
          </IconButton>
        }
      />
      <div className="flex-1">
        <ListItem data={rawData.products} />
      </div>
      <CreateItem />
    </div>
  );
};

export default ShoppingList;
