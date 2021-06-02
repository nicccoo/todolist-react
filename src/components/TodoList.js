import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="container-todolist">
      <ul className="todo-list">
        {filteredTodos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              text={todo.text}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
