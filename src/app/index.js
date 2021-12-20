import React from "react";
import { AppUI } from "./AppUI";
import { TodoContext, TodoProvider} from '../TodoContext'
// import './App.css';

// const TODOS = [
//   {
//     text: "Aprender a Leer",
//     completed: true,
//   },
//   {
//     text: "Ingresar al colegio",
//     completed: true,
//   }

function App() {

  // console.log("Render antes del useEffect");

  // React.useEffect(() => {
  //   console.log("Aqui está el useEffect");
  // },  [totalTODOS] );

  // console.log("Render luego del useEffect");

  return (
    // <AppUI />
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
