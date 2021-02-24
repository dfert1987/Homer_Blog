import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1 className="cards-title">Hot takes and hometown bias</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src="https://i.imgur.com/8arrSvM.jpg"
              text="Undeniable: Zach Lavine is an All-Star"
              label="Bulls"
              path="/bulls"
            />
            <CardItem
              src="https://i.imgur.com/EmVgHk2.jpg"
              text="Life After Mitch: Why is it so hard for some to let go?"
              label="Bears"
              path="/bears"
            />
            <CardItem
              src="https://i.imgur.com/ZZ5dLJU.jpg"
              text="How Did We Get Here? The Suddenly Bleak State of the Cubs"
              label="Cubs"
              path="/cubs"
            />
          </ul>
          <ul className="cards-items">
            <CardItem
              src="https://i.imgur.com/MwgKmUM.jpg"
              text="Pace and Nagy: An Honest Evaluation"
              label="Bears"
              path="/bears"
            />
            <CardItem
              src="https://i.imgur.com/Y2Eorvu.jpg"
              text="Thad Young: An Ode to the Journeyman"
              label="Bulls"
              path="/bulls"
            />
            <CardItem
              src="https://i.imgur.com/dOYcX5j.jpg?1"
              text="Homer: A Different Brand of Sports Blog"
              label="About"
              path="/about"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
