import React from "react";
export default Car;

function Car(props) {
    return <ul className="list-inline">
        <li className="list-inline-item">VIN: {props.vin}</li>
        <li className="list-inline-item">Производитель: {props.manufacturer}</li>
        <li className="list-inline-item">Модель: {props.model}</li>
        <li className="list-inline-item">Цвет: {props.color}</li>
        <li className="list-inline-item">Владелец: {props.owner}</li>
        <li className="list-inline-item text-danger" hidden={!props.restricted}>
            Есть ограничения!
        </li>
        <li className="list-inline-item text-danger" hidden={!props.restricted}>
            Причина: {props.reason}
        </li>
    </ul>
}
