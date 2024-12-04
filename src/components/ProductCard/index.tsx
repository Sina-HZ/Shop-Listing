import CheckBox from "@Components/Form/CheckBox";
// import { ProductDetail } from "@views/ShoppingList/components/ListItem";

interface ProductCardProps {
  selected?: boolean;
  id: string;
  base64Image?: string;
  description?: string;
  price?: number;
  strikePrice?: number;
  title: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  id,
  selected = false,
}) => {
  return (
    <div className="flex items-start  border border-gray-400 rounded p-2 min-w-[200px]">
      <img
        src="https://interview-assignment-shopping-list.vercel.app/fallback.png"
        width={64}
        height={64}
      />
      <div className="flex gap-2 items-start justify-between w-full ml-2">
        <h3>{title}</h3>
        <CheckBox name={id} checked={selected} />
      </div>
    </div>
  );
};

export default ProductCard;
