import { useParams } from "react-router-dom";


function FruitShow({ fruits }) {
  const { fruitId } = useParams(); //fruitId should be a string,matches the fruit.id (string)
  //useParams return an obj, we key into obj to get id"1"
  // console.log("fruidId---", fruitId); //"1"
  // console.log("useParams", useParams()); //{fruitId: '1'}

  const fruit = fruits.find((fruit) => fruit.id === fruitId);
  return (
    <div className={"fruit-show"}>
      <h2>{fruit.name}</h2>
      <div>{fruit.color}</div>
      <div>{fruit.sweetness}</div>
      <div>{fruit.seeds}</div>
    </div>
  );
}

export default FruitShow;
