import React from 'react';
import Car from "./Car";
export default CarListItem;

function CarListItem({car}) {
    return (
        <li className="border-bottom">
            <Car
                vin={car.Key}
                manufacturer={car.Record.make}
                model={car.Record.model}
                color={car.Record.color}
                owner={car.Record.owner}
                restricted={car.Record.restricted}
                reason={car.Record.reason}
            />
        </li>
    );
}
