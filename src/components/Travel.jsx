import React from "react";
import "./Travel.scss";
import TravelList from "./TravelList";

function Travel({ dateTravelList, delDateTravel }) {
  return (
    <div>
      <div className="travel-header">
        <div>Дата (ДД.ММ.ГГ)</div>
        <div>Пройдено км</div>
        <div>Действия</div>
      </div>
      <TravelList
        dateTravelList={dateTravelList}
        delDateTravel={delDateTravel}
      />
    </div>
  );
}
export default Travel;
