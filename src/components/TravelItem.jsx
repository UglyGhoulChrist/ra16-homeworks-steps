import "./TravelItem.scss";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
const moment = require("moment");

// ToDo ## Редактирование данных. При нажатии на ✎ происходит перенос данных в форму ввода с последующим сохранением при нажатии кнопки Ok.

function TravelItem({ dateTravel, delDateTravel }) {
  const { id, date, travel } = dateTravel;
  const formatDate = moment(date, "YYYY-MM-DD").format("DD.MM.YY");

  return (
    <li className="travel-item">
      <div>{formatDate}</div>
      <div>{travel}</div>
      <div>
        <AiFillDelete onClick={() => delDateTravel(id)} />
        <AiFillEdit onClick={() => console.log("изменить")} />
      </div>
    </li>
  );
}
export default TravelItem;
