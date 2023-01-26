import "./TravelItem.scss";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

// ToDo ## Редактирование данных. При нажатии на ✎ происходит перенос данных в форму ввода с последующим сохранением при нажатии кнопки Ok.

function TravelItem({ dateTravel, delDateTravel }) {
  return (
    <li className="travel-item">
      <div>{dateTravel.date}</div>
      <div>{dateTravel.travel}</div>
      <div>
        <AiFillDelete onClick={() => delDateTravel(dateTravel.id)} />
        <AiFillEdit onClick={() => console.log("изменить")} />
      </div>
    </li>
  );
}
export default TravelItem;
