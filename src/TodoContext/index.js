import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todosValue,
    saveItem: saveTODOS,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal]= React.useState(false);
 
  const completedTODOS = todosValue.filter(
    (todo) => todo.completed === true
  ).length;
  const totalTODOS = todosValue.length;

  let searchedTODOS = [];

  if (!searchValue.length >= 1) {
    searchedTODOS = todosValue;
  } else {
    searchedTODOS = todosValue.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      //Metodo para saber si lo que ingresa el usuario coincide con algun objeto de nuestros todos
      return todoText.includes(searchText);
    });
  }
  const completeTask = (text) => {
    // BUSCAMOS LA POSICION QUE HACE MATCH ENTRE EL TEXTO QUE INGRESA EL USUARIO CON EL TEXTO QUE ESTAN EN LOS TODOS
    const todoIndex = todosValue.findIndex((todo) => todo.text === text);

    // CREAMOS UNA CONST LA CUAL ALMACENARÁ LA NUEVA LISTA DE TODOS, LA CUAL HAY QUE ENVIAR CUANDO SETEAMOS EN TIEMPO REAL
    // LOS VALORES DE LOS TODOS
    const newTODOS = [...todosValue];

    // Todos nuestros "Que hacer" son objetos
    newTODOS[todoIndex].completed = true;
    saveTODOS(newTODOS);
  };

  const AddTask = (text) => {
    // CREAMOS UNA CONST LA CUAL ALMACENARÁ LA NUEVA LISTA DE TODOS, LA CUAL HAY QUE ENVIAR CUANDO SETEAMOS EN TIEMPO REAL
    // LOS VALORES DE LOS TODOS
    const newTODOS = [...todosValue];
    // Todos nuestros "Que hacer" son objetos
    newTODOS.push({
      completed: false,
      text,
    })
    saveTODOS(newTODOS);
  };

  const deleteTask = (text) => {
    // BUSCAMOS LA POSICION QUE HACE MATCH ENTRE EL TEXTO QUE INGRESA EL USUARIO CON EL TEXTO QUE ESTAN EN LOS TODOS
    const todoIndex = todosValue.findIndex((todo) => todo.text === text);

    // CREAMOS UNA CONST LA CUAL ALMACENARÁ LA NUEVA LISTA DE TODOS, LA CUAL HAY QUE ENVIAR CUANDO SETEAMOS EN TIEMPO REAL
    // LOS VALORES DE LOS TODOS
    const newTODOS = [...todosValue];

    // Todos nuestros "Que hacer" son objetos
    newTODOS.splice(todoIndex, 1);
    saveTODOS(newTODOS);
  };
  return (
    <TodoContext.Provider
      value={{
        error,
        loading,
        totalTODOS,
        completedTODOS,
        searchValue,
        setSearchValue,
        searchedTODOS,
        completeTask,
        AddTask,
        deleteTask,
        openModal,
        setOpenModal
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider};
{/* <TodoContext.Consumer></TodoContext.Consumer>; */}
