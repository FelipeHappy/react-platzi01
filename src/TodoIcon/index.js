import React from "react";
import './TodoIcon.css';
import { ReactComponent as CheckSVG } from './checkIconSVG.svg';
import { ReactComponent as DeleteSVG } from './deleteIconSVG.svg';

function TodoIcon({type, color = 'gray', onClick}){

    const iconTypes = {
        "check": color => (
            <CheckSVG className="Icon-svg Icon-svg--check" fill={color}/>
        ),
        "delete": color => (
            <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
        )
    }

    return (
        <span className={`Icon-container Icon-container--${type}`}
        onClick={onClick}>
            {/* Aqui va el SVG --- Utilizamos el mismo type de los props para el objeto*/} 
            {/* envolvemos nuestros íconos dentro de funciones vamos a poder enviarles propiedades que cambien su presentación o comportamiento. */}
            {iconTypes[type](color)}
        </span>

    )

}

export { TodoIcon }