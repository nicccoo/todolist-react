import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText('');
  };

  const statusHandler = (e) => {
      setStatus(e.target.value);
  }


  return (
    <div className="container-form">
      <form onSubmit={submitHandler}>
        <input onChange={inputTextHandler} type="text" value={inputText}/>
        <button className="button">Agregar</button>
        <select onChange={statusHandler} name="todos" className="select-todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </form>
    </div>
  );
};

export default Form;
