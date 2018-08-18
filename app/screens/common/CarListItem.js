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
            <h6 hidden={!car.Record.restricted}>Ключ: {car.Record.restricted}</h6>
            <h6 hidden={!car.Record.restricted}>Ключ: {car.Record.reason}</h6>
        </li>
    );
}
