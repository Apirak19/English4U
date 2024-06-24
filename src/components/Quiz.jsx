import React, { useState } from "react";
import { Reorder } from "framer-motion";

const Quiz = () => {
  const [items, setItems] = useState([
    { id: 1, text: "This" },
    { id: 2, text: "is" },
    { id: 3, text: "a" },
    { id: 4, text: "correct" },
    { id: 5, text: "sentence." },
  ]);
  const correctOrder = ["This", "is", "a", "correct", "sentence."];
  const checkAnswer = () => {
    const currentOrder = items.map((item) => item.text);
    if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
      alert("Correct!");
    } else {
      alert("Incorrect, try again.");
    }
  };
  return (
    <main>
      <Reorder.Group values={items} onReorder={setItems}>
        {items.map((item, index) => (
          <Reorder.Item value={item} key={item}>
            <h1>This is item {index}</h1>
            <p>value: {item}</p>
          </Reorder.Item>
        ))}
      </Reorder.Group>
      <button>Check answer</button>
    </main>
  );
};

export default Quiz;
