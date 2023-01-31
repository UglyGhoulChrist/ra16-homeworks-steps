import { useEffect, useRef } from "react";
import "./FormDateTravel.scss";

function FormDateTravel({
  newDateTravel,
  defaultInputDateTravel,
  changeDateTravel,
}) {
  const inputDateRef = useRef(null);
  const inputTravelRef = useRef(null);

  useEffect(() => {
    inputDateRef.current.value = defaultInputDateTravel.date;
    inputTravelRef.current.value = defaultInputDateTravel.travel;
  }, [defaultInputDateTravel]);

  const inputDateTravelHandler = (e) => {
    e.preventDefault();
    if (inputDateRef.current.value && inputTravelRef.current.value > 0) {
      newDateTravel({
        id: Math.random(),
        date: inputDateRef.current.value,
        travel: +inputTravelRef.current.value - defaultInputDateTravel.travel,
      });
      changeDateTravel({ date: null, travel: null });
    }
  };

  return (
    <form onSubmit={inputDateTravelHandler} className="form-data-travel">
      <label className="form-data-travel__label">
        Дата (ДД.ММ.ГГГГ)
        <input
          ref={inputDateRef}
          className="form-data-travel__input"
          type="date"
        />
      </label>
      <label className="form-data-travel__label">
        Пройдено км
        <input
          ref={inputTravelRef}
          className="form-data-travel__input"
          type="number"
        />
      </label>
      <button className="form-data-travel__button">OK</button>
    </form>
  );
}
export default FormDateTravel;
