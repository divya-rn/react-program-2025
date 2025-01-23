import { useState } from "react";
import { FruitItem } from "./FruitItem";
export function FruitList() {
  let [allFruits, setAllFruits] = useState([
    {
      fruitId: 101,
      fruitName: "Apple",
      fruitColor: "Red",
    },
    {
      fruitId: 102,
      fruitName: "Orange",
      fruitColor: "Orange",
    },
    {
      fruitId: 103,
      fruitName: "Guava",
      fruitColor: "Pink",
    },
  ]);

  let mappedAllFruits = allFruits.map((eachFruit) => (
    <FruitItem
      key={eachFruit.fruitId}
      item={eachFruit}
      removeFn={(fruitId) => deleteFruit(fruitId)}
    ></FruitItem>
  ));

  function deleteFruit(fid) {
    setAllFruits(allFruits.filter((eachFruit) => eachFruit.fruitId != fid));
  }
  return (
    <>
      <div className="container m-5">
        <h2>LIST OF FRUITS</h2>
        {allFruits.length == 0 ? (
          <div className="text-danger">Fruit Basket is empty!</div>
        ) : (
          <ul className="list-group">{mappedAllFruits}</ul>
        )}
        {/* <ul className="list-group">{mappedAllFruits}</ul> */}
      </div>
    </>
  );
}
