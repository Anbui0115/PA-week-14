import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const COLORS = ["red", "orange", "yellow", "green", "blue", "purple"];

function FruitForm({ fruits }) {
  const [name, setName] = useState("");
  const [sweetness, setSweetness] = useState(1);
  const [color, setColor] = useState(COLORS[0]);
  const [seeds, setSeeds] = useState("yes");
  const [validationErrors, setValidationErrors] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const errors = [];

    if (name.length < 3) errors.push("Name must be 3 or more characters");
    if (name.length > 20) errors.push("Name must be 20 characters or less");
    if (sweetness < 1 || sweetness > 10)
      errors.push("Sweetness must be between 1 and 10");
    if (fruits.map((fruit) => fruit.name).includes(name))
      errors.push("Name already exists.");
      
    setValidationErrors(errors);
  }, [name, sweetness]);

  const submitted = (event) => {
    event.preventDefault();
    console.log({
      name,
      sweetness,
      color,
      seeds,
    });
    history.push("/");
  };

  return (
    <form className="fruit-form" onSubmit={submitted}>
      <h2>Enter a Fruit</h2>
      <ul className="errors">
        {validationErrors.map((err) => (
          <li key={err}>{err}</li>
        ))}
      </ul>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Select a Color
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          {COLORS.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </label>
      <label>
        Sweetness
        <input
          type="number"
          name="sweetness"
          value={sweetness}
          onChange={(e) => setSweetness(e.target.value)}
        />
      </label>
      <label>
        <input
          type="radio"
          value="no"
          name="seeds"
          checked={seeds === "no"}
          onChange={(e) => setSeeds(e.target.value)}
        />
        No Seeds
      </label>
      <label>
        <input
          type="radio"
          value="yes"
          name="seeds"
          checked={seeds === "yes"}
          onChange={(e) => setSeeds(e.target.value)}
        />
        Seeds
      </label>
      <button type="submit" disabled={validationErrors.length > 0}>
        Submit Fruit
      </button>
    </form>
  );
}

export default FruitForm;
