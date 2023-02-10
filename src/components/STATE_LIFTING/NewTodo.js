import React, { useState } from "react";
import style from "./newTodo.module.css";

const NewTodo = (props) => {

  const [todo,setTodo] = useState({
    title : "",
    desc : ""
  })

  const {title,desc}=todo

  const handleChange = (event) =>{

    const name = event.target.name;
    setTodo((oldTodo) =>{
      return {...oldTodo, [name]:event.target.value}
    })
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    props.onAddTodo(todo);
    setTodo({title: "", desc: ""})
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style["form-field"]}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className={style["form-field"]}>
        <label htmlFor="desc">Description: </label>
        <textarea
          type="text"
          id="desc"
          name="desc"
          value={desc}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
};

export default NewTodo;

// import React from "react";
// import { useState } from "react";

// const NewTodo = (props) => {
//   const [todo, setTodo] = useState("");
//   const handleInputChange = (event) => {
//     setTodo(event.target.value);
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     props.onTodo(todo);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="todo">New todo: </label>
//       <input
//         type="text"
//         id="todo"
//         name="todo"
//         value={todo}
//         onChange={handleInputChange}
//       />
//       <button>Add Todo</button>
//     </form>
//   );
// };

// export default NewTodo;
