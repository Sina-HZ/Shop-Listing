import Button from "@Components/Button";
import TextInput from "@Components/Form/TextInput";

const CreateItem = () => {
  return (
    <div className="fixed bottom-0  w-full flex gap-2 flex-col px-4 py-2 items-center rounded-lg border border-gray-400 shadow-lg bg-white">
      <TextInput
        name="itemName"
        className="sm:max-w-[50%] w-full rounded h-8 px-2 border border-gray-300"
      />
      <Button
        onClick={() => console.log("clicked")}
        className="sm:max-w-[50%] w-full bg-orange-500"
      >
        Add to list
      </Button>
    </div>
  );
};

export default CreateItem;
