import { useState } from "react";
import "./FormDateTravel.scss";
const moment = require("moment");

function FormDateTravel({ newDateTravel }) {
  const [inputDate, setInputDate] = useState("");
  const [inputTravel, setInputTravel] = useState("");

  const inputDateTravelHandler = (e) => {
    e.preventDefault();
    if (inputDate && inputTravel > 0) {
      const date = moment(inputDate).format("DD.MM.YY");
      setInputDate("");
      setInputTravel("");
      newDateTravel({
        id: Math.random(),
        date: date,
        travel: +inputTravel,
      });
    }
  };

  return (
    <form onSubmit={inputDateTravelHandler} className="form-data-travel">
      <label className="form-data-travel__label">
        Дата (ДД.ММ.ГГ)
        <input
          onChange={(e) => setInputDate(e.target.value)}
          className="form-data-travel__input"
          type="date"
          value={inputDate}
        />
      </label>
      <label className="form-data-travel__label">
        Пройдено км
        <input
          onChange={(e) => setInputTravel(e.target.value)}
          className="form-data-travel__input"
          type="number"
          value={inputTravel}
        />
      </label>
      <button className="form-data-travel__button">OK</button>
    </form>
  );
}
export default FormDateTravel;
