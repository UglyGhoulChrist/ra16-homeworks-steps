import "./App.css";
import FormDateTravel from "./components/FormDateTravel";
import Travel from "./components/Travel";
import { useState } from "react";

function App() {
  const [dateTravelList, setDateTravelList] = useState([
    { id: "1", date: "05.01.23", travel: 1 },
    { id: "2", date: "06.01.23", travel: 3 },
  ]);

  // Проверяем есть ли введённая пользователем дата в массиве с датами
  const addDateTravel = (data) => {
    let indexFind = dateTravelList.find((e) => e.date === data.date);
    // Если нет, создаём массив, добавляя введённую пользователем дату в начало массива
    if (indexFind === undefined) {
      setDateTravelList([data, ...dateTravelList]);
    } else {
      // Если есть, перебираем массив, меняя совпадение
      setDateTravelList(
        dateTravelList.map((e) =>
          e.date === data.date
            ? { id: e.id, date: e.date, travel: e.travel + data.travel }
            : e
        )
      );
    }
  };
  // Удаляем из списка по ид
  const delDateTravel = (id) => {
    setDateTravelList([...dateTravelList.filter((e) => e.id !== id)]);
  };
  return (
    <div className="App">
      <FormDateTravel newDateTravel={addDateTravel} />
      <Travel dateTravelList={dateTravelList} delDateTravel={delDateTravel} />
    </div>
  );
}

export default App;
