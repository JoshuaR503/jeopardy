import React from "react";
import "./styles.css";
import Card from "./Card";

export default function Column() {
  return (
    <div className="App">
      <div class="container">
        <div class="row mt-4 pt-4">
          <div class="col">
            <h5> Countries </h5>
            <Card
              value="100"
              response="It doesn't have an exit to the Atlantic Ocean"
              question={"The smallest country in Cental America"}
            />

            <Card 
              value="200"
              response="Cold War?"
              question={"The biggest country in the world"} 
            />

            <Card
              value="300"
              response="Trump Trump Trump"
              question={"This is the most populated country in the world."}
            />
          </div>

          <div class="col">
            <h5> Companies </h5>
            <Card
              value="100"
              response="Microsoft"
              question={"Owns Github"}
            />

            <Card 
              value="200" 
              response="Owns Instagram, WhatsApp"
              question={"Biggest social network in the world?"} 
            />

            <Card
              value="300"
              response="Google, duh"
              question={"Owns Youtube!"}
            />
          </div>

          <div class="col">
            <h5> Stonks </h5>
            <Card
              value="100"
              response="Microsoft"
              question={"Largest Market Cap company"}
            />

            <Card 
              value="200" 
              response="Berkshire Hathaway"
              question={"It is being run by the most successful investor."} 
            />

            <Card
              value="300"
              response="AIG"
              question={"It was responsable for the 2008 crisis."}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
