import ProductCard from "@Components/ProductCard";

export interface ProductDetail {
  id: string;
  base64Image: string;
  description: string;
  price: number;
  strikePrice: number | null;
  title: string;
}

interface ListItemProps {
  data: ProductDetail[];
  onClick: (id: string) => void;
  selectedItems: Map<string, boolean>;
}

const ListItem: React.FC<ListItemProps> = ({
  data,
  onClick,
  selectedItems,
}) => {
  return (
    <ul className="m-4 flex flex-col flex-nowrap items-stretch gap-2 pb-28 sm:flex-row sm:flex-wrap sm:items-start">
      {data.map((item) => (
        <li
          key={item.id}
          className="flex-1 list-none sm:max-w-max"
          onClick={() => onClick(item.id)}
        >
          <ProductCard
            id={item.id}
            title={item.title}
            selected={selectedItems.has(item.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
