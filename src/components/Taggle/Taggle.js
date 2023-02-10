import React from "react";
import { useState } from "react";

const Taggle = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div style={{ margin: "1rem", backgroundColor: "coral", padding: "1rem" }}>
      {toggle && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          rerum reiciendis sint eveniet sunt quia amet voluptatem autem
          necessitatibus vero aperiam voluptatum, fugit excepturi quod incidunt
          impedit, eaque nam nostrum?
        </p>
      )}
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};

export default Taggle;
