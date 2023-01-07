import React from "react";
import ReactDOM from "react-dom/client";

// ReactDOM.render(<h1>Todo App</h1>, document.getElementById("root"));

const TodoTitle = "Call Family";
const TodoDes =
  "Tempor amet ipsum labore rebum dolores tempor, duo eirmod vero";
const date = new Date();
const dateName = date.getDate();
// const monthName = date.monthName();
const currentYear = date.getFullYear();

// const headingStyle ={
//     color:"green",
//     fontSize:"3rem",
//     backgroundColor:"purple",
//     textAlign:"center",
//     padding:"15px"
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 className="headingStyle">Todo App</h1>
    <div className="card">
      <h3 className="cardTitle">{TodoTitle}</h3>
      <p className="cardDesc">{TodoDes}</p>
      <p className="cardFooter">{dateName + " / " + currentYear}</p>
    </div>
  </div>
);
