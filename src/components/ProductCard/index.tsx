import CheckBox from "@Components/Form/CheckBox";
import { twMerge } from "tailwind-merge";
import { ProductCardProps } from "./types";
import { productPlaceholderImage } from "./constants";

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  id,
  selected = false,
  image,
}) => {
  return (
    <div
      className={twMerge(
        "flex min-w-[200px] items-start rounded border border-gray-400 p-2 sm:w-max",
        selected && "border-neutral-900",
      )}
    >
      <img src={image || productPlaceholderImage} width={64} height={64} />
      <div className="ml-2 flex w-full items-start justify-between gap-2">
        <h3>{title}</h3>
        <CheckBox name={id} checked={selected} />
      </div>
    </div>
  );
};

export default ProductCard;
