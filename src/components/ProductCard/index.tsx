import CheckBox from "@Components/Form/CheckBox";
import { twMerge } from "tailwind-merge";
import { ProductCardProps } from "./types";
import { productPlaceholderImage } from "./constants";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  id,
  selected = false,
  image,
  wrapperClassName,
  imageClassName,
  contentWrapperClassName,
  titleClassName,
  checkBoxClassName,
  onClick,
}) => {
  return (
    <div
      className={twMerge(
        "flex min-w-[200px] items-start rounded border border-gray-400 p-2 sm:w-max",
        selected && "border-neutral-900",
        wrapperClassName,
      )}
      onClick={onClick}
    >
      <LazyLoadImage
        src={image || productPlaceholderImage}
        width={64}
        height={64}
        alt={`${title} picture`}
        className={imageClassName}
      />
      <div
        className={twMerge(
          "ml-2 flex w-full items-start justify-between gap-2",
          contentWrapperClassName,
        )}
      >
        <h3 className={titleClassName}>{title}</h3>
        <CheckBox className={checkBoxClassName} name={id} checked={selected} />
      </div>
    </div>
  );
};

export default ProductCard;
