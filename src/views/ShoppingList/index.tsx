// import Header from "@Components/Header"

import Header from "@Components/Header"
import CreateItem from "./components/CreateItem"
import ListItem from "./components/ListItem"
import rawData from "@/raw-data"



const ShoppingList = () => {
  return (
    <>
        <Header title="Shopping List" />
        <ListItem data={rawData.products} />
        <CreateItem />
    </>
  )
}

export default ShoppingList