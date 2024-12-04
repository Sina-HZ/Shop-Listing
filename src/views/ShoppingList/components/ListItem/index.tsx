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
    <ul className="gap-2 flex items-stretch flex-nowrap  flex-col sm:flex-wrap sm:flex-row sm:items-start m-4 pb-28">
      {data.map((item) => (
        <li
          key={item.id}
          className="list-none flex-1 sm:max-w-max"
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
