import { createContext, useContext, useState } from "react";

export const FavFruitContext = createContext();
// Custom hook
// export const useFavFruitContext = useContext(FavFruitContext);


export default function FavFruitProvider(props) {
  const [favFruitId, setFavFruitId] = useState("1");

  return (
    <FavFruitContext.Provider
      value={{
        favFruitId,
        setFavFruitId,
      }}
    >
      {props.children}
    </FavFruitContext.Provider>
  );
}
