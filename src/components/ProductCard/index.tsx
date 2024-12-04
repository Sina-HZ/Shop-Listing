import CheckBox from "@Components/Form/CheckBox";
// import { ProductDetail } from "@views/ShoppingList/components/ListItem";

interface ProductCardProps {
  selected?: boolean;
  id: string,
  base64Image?: string;
  description?: string;
  price?: number;
  strikePrice?: number;
  title: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  id,
  selected = false
}) => {
  return (
    <div>
      <img />
      <h3>{title}</h3>
      <CheckBox name={id} checked={selected} />
    </div>
  );
};

export default ProductCard;
