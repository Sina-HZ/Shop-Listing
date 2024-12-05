import CheckBox from "@Components/Form/CheckBox";
import { twMerge } from "tailwind-merge";

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
    <div
      className={twMerge(
        "flex min-w-[200px] items-start rounded border border-gray-400 p-2",
        selected && "border-neutral-900",
      )}
    >
      <img
        src="https://interview-assignment-shopping-list.vercel.app/fallback.png"
        width={64}
        height={64}
      />
      <div className="ml-2 flex w-full items-start justify-between gap-2">
        <h3>{title}</h3>
        <CheckBox name={id} checked={selected} />
      </div>
    </div>
  );
};

export default ProductCard;
