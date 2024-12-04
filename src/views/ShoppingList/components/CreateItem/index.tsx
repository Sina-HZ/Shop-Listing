import Button from "@Components/Button";
import TextInput from "@Components/Form/TextInput";
import { useState } from "react";
import { ProductDetail } from "../ListItem";

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
      id: window.crypto.randomUUID(), // I assumed the component exec only on client so window object is valid dureing the app.
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
      className="fixed bottom-0 w-full flex gap-2 flex-col px-4 py-2 items-center rounded-lg border border-gray-400 shadow-lg bg-white"
    >
      <TextInput
        name="itemName"
        className="sm:max-w-[50%] w-full rounded h-8 px-2 border border-gray-300"
        onChange={productNameHandler}
        value={productName}
      />
      <Button type="submit" className="sm:max-w-[50%] w-full bg-orange-500">
        Add to list
      </Button>
    </form>
  );
};

export default CreateItem;
