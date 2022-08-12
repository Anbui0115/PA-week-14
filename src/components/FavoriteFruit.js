import { use } from "chai";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FavFruitContext } from "../context/FavFruitContext";

const FavoriteFruit = ({ fruits }) => {
  const { favFruitId, setFavFruitId } = useContext(FavFruitContext);
  const favFruit = fruits[favFruitId];
  return (
    <div className={"fav-fruit"}>
      <h2>Favorite Fruit</h2>
      <NavLink to={`/fruits/${favFruitId}`}>{favFruit.name}</NavLink>
    </div>
  );
};

export default FavoriteFruit;
