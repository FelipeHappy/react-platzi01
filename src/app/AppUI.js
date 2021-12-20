import React from "react";
import { TodoContext } from "../TodoContext";
import { TODOCounter } from "../TodoCounter";
import { TODOSearch } from "../TodoSearch";
import { TODOList } from "../TodoList";
import { TODOItem } from "../TodoItem";
import { CreateTODOButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoError } from "../TodoError";
import { TodoLoading } from "../TodoLoading";
import { EmptyTodo } from "../EmptyTodo";

function AppUI() {
  const {error, loading, searchedTODOS, completeTask, deleteTask, openModal, setOpenModal} = React.useContext(TodoContext)
  return (
    <React.Fragment>
      <TODOCounter />
      <TODOSearch />
          <TODOList>
          {error && <TodoError error={error} />}
          {loading && <TodoLoading />}
          {(!loading && !searchedTODOS.length) && <EmptyTodo />}
          {searchedTODOS.map((todo) => (
            <TODOItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTask(todo.text)}
              onDelete={() => deleteTask(todo.text)}
            />
          ))}
        </TODOList>
            {openModal && (
              <Modal>
                <TodoForm />
            </Modal>
            )}
      {/* <TODOList>
        {error && <p>Hubo un Error, contacte con su administrador</p>}
        {loading && <p>Momento por favor, estamos cargando ...</p>}
        {!loading && <p>Crea tu primer TODO!</p>}
        {searchedTODOS.map((todo) => (
          <TODOItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTask(todo.text)}
            onDelete={() => deleteTask(todo.text)}
          />
        ))}
      </TODOList> */}
      <CreateTODOButton setOpenModal={setOpenModal}/>
    </React.Fragment>
  );
}

export { AppUI };
