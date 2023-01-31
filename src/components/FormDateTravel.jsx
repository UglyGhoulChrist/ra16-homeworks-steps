import { useState } from "react";
import "./FormDateTravel.scss";

function FormDateTravel({
  newDateTravel,
  defaultInputDateTravel,
  changeDateTravel,
}) {
  console.log("defaultInputDateTravel", defaultInputDateTravel);
  const [inputDate, setInputDate] = useState(defaultInputDateTravel.date);
  const [inputTravel, setInputTravel] = useState(defaultInputDateTravel.travel);

  const inputDateTravelHandler = (e) => {
    e.preventDefault();
    if (inputDate && inputTravel > 0) {
      newDateTravel({
        id: Math.random(),
        date: inputDate,
        travel: +inputTravel,
      });
      setInputDate("");
      setInputTravel("");
    }
  };

  return (
    <form onSubmit={inputDateTravelHandler} className="form-data-travel">
      <label className="form-data-travel__label">
        Дата (ДД.ММ.ГГГГ)
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
