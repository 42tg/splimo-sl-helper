import React, { useState } from "react";

const border = {
  margin: "1px",
  padding: "10px",
  width: "25px",
  height: "25px",
  backgroundColor: "black",
  borderRadius: "3px"
};
const inner = active => ({
  margin: "-4px",
  borderRadius: "3px",
  width: "100%",
  height: "100%",
  backgroundColor: active ? "black" : "white",
  border: "4px solid white"
});

export default (defaultState = false) => {
  const [active, setActive] = useState(defaultState);

  return (
    <div style={border}>
      <div style={inner(active)} onClick={() => setActive(!active)} />
    </div>
  );
};
