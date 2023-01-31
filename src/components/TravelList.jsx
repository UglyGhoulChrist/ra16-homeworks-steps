import React from "react";
import TravelItem from "./TravelItem";
import "./TravelList.scss";

function TravelList({ dateTravelList, delDateTravel, changeDateTravel }) {
  return (
    <ul className="travel-list">
      {dateTravelList.map((dateTravel) => (
        <TravelItem
          key={dateTravel.id}
          dateTravel={dateTravel}
          delDateTravel={delDateTravel}
          changeDateTravel={changeDateTravel}
        />
      ))}
    </ul>
  );
}
export default TravelList;
