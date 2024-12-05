import { ProductDetail } from "@/types/products";
import Button from "@Components/Button";
import TextInput from "@Components/Form/TextInput";
import { useState } from "react";

interface CreateItemProps {
  onSubmit: (value: ProductDetail) => void;
}

const CreateItem: React.FC<CreateItemProps> = ({ onSubmit }) => {
  const [productName, setProductName] = useState("");

  const productNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // NOTE: if you want to add aditional logics or validations add here.
    setProductName(e.target.value);
  };

  const submitNewProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!productName) return;
    const newProduct: ProductDetail = {
      id: window.crypto.randomUUID(), // I assumed the component executes only on the client side therefor window object is valid all the time.
      title: productName,
      price: Math.random() * 100,
      strikePrice: Math.random() * 50,
      description: "",
      base64Image: "",
    };

    setProductName("");
    onSubmit(newProduct);
  };

  return (
    <form
      onSubmit={submitNewProduct}
      className="fixed bottom-0 flex w-full flex-col items-center gap-2 rounded-lg border border-gray-400 bg-white px-4 py-2 shadow-lg"
    >
      <TextInput
        name="itemName"
        className="h-8 w-full rounded border border-gray-300 px-2 sm:max-w-[50%]"
        onChange={productNameHandler}
        value={productName}
        placeholder="Enter new product name"
      />
      <Button type="submit" className="w-full bg-orange-500 sm:max-w-[50%]">
        Add to list
      </Button>
    </form>
  );
};

export default CreateItem;
