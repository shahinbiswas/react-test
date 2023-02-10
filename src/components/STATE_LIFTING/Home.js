import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import Todos from "./Todos";
import style from "./home.module.css";
import NewTodo from "./NewTodo";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };
  const handleRemoveTode = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className={style.container}>
      <h1 style={{ color: "white" }}>Todo App</h1>
      <NewTodo onAddTodo={handleAddTodo} />

      <Todos todos={todos} onRemoveTodo={handleRemoveTode} />
    </div>
  );
};

export default Home;
