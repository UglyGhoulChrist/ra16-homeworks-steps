import "./TravelItem.scss";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
const moment = require("moment");

// ToDo ## Редактирование данных. При нажатии на ✎ происходит перенос данных в форму ввода с последующим сохранением при нажатии кнопки Ok.

function TravelItem({ dateTravel, delDateTravel }) {
  const date = moment(dateTravel).format("DD.MM.YY");
  const { id, travel } = dateTravel;
  return (
    <li className="travel-item">
      <div>{date}</div>
      <div>{travel}</div>
      <div>
        <AiFillDelete onClick={() => delDateTravel(id)} />
        <AiFillEdit onClick={() => console.log("изменить")} />
      </div>
    </li>
  );
}
export default TravelItem;
