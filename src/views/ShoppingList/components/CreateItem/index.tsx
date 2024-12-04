import Button from "@Components/Button";
import TextInput from "@Components/Form/TextInput";

const CreateItem = () => {
  return (
    <div>
      <TextInput name="itemName" />
      <Button onClick={() => console.log("clicked")}>Add to list</Button>
    </div>
  );
};

export default CreateItem;
