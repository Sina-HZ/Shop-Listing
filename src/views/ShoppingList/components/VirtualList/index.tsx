import { forwardRef } from "react";
import { GridItemProps, GridListProps, VirtuosoGrid } from "react-virtuoso";
import ProductCard from "@Components/ProductCard";
import { ItemWrapperProps, VirtualListProps } from "./types";

const gridComponents = {
  List: forwardRef<HTMLDivElement, GridListProps>(
    ({ children, ...props }, ref) => (
      <div
        ref={ref}
        {...props}
        style={undefined}
        className="m-4 flex flex-col flex-nowrap items-stretch gap-2 pb-28 sm:flex-row sm:flex-wrap sm:items-start"
      >
        {children}
      </div>
    ),
  ),
  Item: ({ children, ...props }: GridItemProps) => (
    <div
      {...props}
      className="flex-1 list-none content-stretch whitespace-nowrap sm:max-w-max"
    >
      {children}
    </div>
  ),
};

const ItemWrapper: React.FC<ItemWrapperProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

const VirtualList: React.FC<VirtualListProps> = ({
  data,
  onClick,
  selectedItems,
}) => {
  return (
    <VirtuosoGrid
      style={{ height: window.innerHeight }}
      data={data}
      components={gridComponents}
      itemContent={(_, item) => (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <ItemWrapper>
          <ProductCard
            id={item.id}
            title={item.title}
            selected={selectedItems.has(item.id)}
            image={item.base64Image}
            titleClassName="text-wrap"
            onClick={() => onClick(item.id)}
          />
        </ItemWrapper>
      )}
    />
  );
};

export default VirtualList;
