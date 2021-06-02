import React from "react";

const Todo = ({ todo, todos, setTodos, text }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
      <button onClick={completeHandler} className="completed-button">
        Completed
      </button>
      <button onClick={deleteHandler} className="delete-button">
        Delete
      </button>
    </div>
  );
};

export default Todo;
