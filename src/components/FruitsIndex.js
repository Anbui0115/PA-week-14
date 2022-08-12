import { Link } from "react-router-dom";

function FruitsIndex({ fruits }) {
  return (
    <div className={'fruits-index'}>
      <h2>Fruits Index</h2>
      {fruits.map((fruit) => (
        <li>
          <Link to={`/fruits/${fruit.id}`}>{fruit.name}</Link>
        </li>
      ))}
    </div>
  );
}

export default FruitsIndex;