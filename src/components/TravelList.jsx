import React from "react";
import TravelItem from "./TravelItem";
import "./TravelList.scss";

function TravelList({ dateTravelList, delDateTravel }) {
  return (
    <ul className="travel-list">
      {dateTravelList.map((dateTravel) => (
        <TravelItem
          key={dateTravel.id}
          dateTravel={dateTravel}
          delDateTravel={delDateTravel}
        />
      ))}
    </ul>
  );
}
export default TravelList;
