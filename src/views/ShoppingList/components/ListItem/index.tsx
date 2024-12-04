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
}

const ListItem: React.FC<ListItemProps> = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <ProductCard id={item.id} title={item.title} />
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
