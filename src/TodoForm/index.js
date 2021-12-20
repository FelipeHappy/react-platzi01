import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState();
  const { AddTask, setOpenModal } = React.useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
    console.log(event.target.value)
  };

  const onPush = (event) => {
    event.preventDefault();
    AddTask(newTodoValue);
  };

  return (
    <form onSubmit={onPush}>
      <label>Escribe tu nueva Tarea</label>
      <textarea
        className="focus"
        value={newTodoValue}
        onChange={onChange}
        placeholder="Añade una tarea a la lista"
      />
      <div className="TodoForm-buttonContainer">
        <button type="button" onClick={onCancel} setOpenModal={setOpenModal} className="TodoForm-button--cancel">
          Cancelar
        </button>
        <button type="submit" onClick={onPush} setOpenModal={setOpenModal} className="TodoForm-button--add"  >
          Añadir
        </button>
      </div>
    </form>
  );
}
export { TodoForm };
