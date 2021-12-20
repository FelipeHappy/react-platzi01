import React from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import "./TodoItem.css";

function TODOItem(props) {
  // const onComplete = () => {
  //     alert('Ya completaste el TODO ' + props.text)
  // }
  // const onDelete = () => {
  //     alert('Ya borraste el TODO ' + props.text)
  // }
  return (
    <li className="TodoItem">
      {/* <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            // onClick={()=> onComplete()}
            onClick={props.onComplete}
            >√</span> */}
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      {/* <span className="Icon Icon-delete"
            // onClick={()=> onDelete()}
            onClick={props.onDelete}
            >X</span> */}
      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
}
export { TODOItem };
