import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

// const estilos = {
//   color: "red",
//   backgroundColor: "yellow",
// };
function TODOCounter() {
  const { totalTODOS, completedTODOS } = React.useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      Has Completado {completedTODOS} de {totalTODOS} TODOs
    </h2>
  );
}
export { TODOCounter };
