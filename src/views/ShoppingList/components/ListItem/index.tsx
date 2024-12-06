import { ListItemProps } from "./types";
import VirtualList from "../VirtualList";

const ListItem: React.FC<ListItemProps> = ({
  data,
  onClick,
  selectedItems,
}) => {
  return (
    // <ul className="m-4 flex flex-col flex-nowrap items-stretch gap-2 pb-28 sm:flex-row sm:flex-wrap sm:items-start">
    // {/* {data.map((item) => (
    //   <li
    //     key={item.id}
    //     className="flex-1 list-none sm:max-w-max"
    //     onClick={() => onClick(item.id)}
    //   >
    //     <ProductCard
    //       id={item.id}
    //       title={item.title}
    //       selected={selectedItems.has(item.id)}
    //       image={item.base64Image}
    //     />
    //   </li>
    // ))} */}
    // </ul>
    <div>
      <VirtualList
        data={data}
        onClick={onClick}
        selectedItems={selectedItems}
      />
    </div>
  );
};

export default ListItem;
