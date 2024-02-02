import { createContext, useState } from "react";

const Contextpage = createContext();

export function ItemProvider({ children }) {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchItems = async () => {
    const data = await fetch(`https://dummyjson.com/products`);
    const res = await data.json();
    setItems(res.products);
    setLoader(false);
  };

  return (
    <Contextpage.Provider
      value={{
        fetchItems,
        setItems,
        items,
        loader,
        setLoader,
      }}
    >
      {children}
    </Contextpage.Provider>
  );
}

export default Contextpage;
