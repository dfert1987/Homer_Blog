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
              text="Don't look now, but Zach Lavine officially fucks."
              label="Bulls"
              path="/bulls"
            />
            <CardItem
              src="https://i.imgur.com/EmVgHk2.jpg"
              text="The curious case of Mitch Trubisky apologists."
              label="Bears"
              path="/bears"
            />
          </ul>
          <ul className="cards-items">
            <CardItem
              src="https://i.imgur.com/ZZ5dLJU.jpg"
              text="How Did We Get Here? The Suddenly Bleak State of the Cubs."
              label="Cubs"
              path="/cubs"
            />
            <CardItem
              src="https://i.imgur.com/MwgKmUM.jpg"
              text="Pace and Nagy: So, how much can we blame these guys?"
              label="Bears"
              path="/bears"
            />
            <CardItem
              src="https://i.imgur.com/Y2Eorvu.jpg"
              text="Thad Young: An Ode to the NBA Journeyman."
              label="Bulls"
              path="/bulls"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
