import React from 'react';

export default CarListItem;

function CarListItem({car}) {
    return (
        <li className="border-bottom">
            <h6>Ключ: {car.Key}</h6>
            <h6>Марка: {car.Record.make}</h6>
            <h6>Модель: {car.Record.model}</h6>
            <h6>Цвет: {car.Record.color}</h6>
            <h6>Владелец: {car.Record.owner}</h6>
            <h6 className="text-danger" hidden={!car.Record.restricted}>Есть ограничение!</h6>
            <h6 className="text-danger" hidden={!car.Record.restricted}>Причина ограничения: {car.Record.reason}</h6>
        </li>
    );
}
