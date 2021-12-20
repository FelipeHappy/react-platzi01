import React from 'react';
import './CreateTodoButton.css'

function CreateTODOButton(props) {

    const BotonClick = () => {
        // alert(msg)
        props.setOpenModal((prevState => !prevState))
    }
    return (
        <button className="CreateTodoButton"
        onClick={BotonClick}>+</button>
    );
}
export { CreateTODOButton };