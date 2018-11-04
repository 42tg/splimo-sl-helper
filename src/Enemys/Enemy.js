import React, { useState } from "react";
import Lifebar from "./Lifebar";

const Enemy = ({ name, lp = 6, lebensleisten = 5 }) => {
  const Lifebars = new Array(lebensleisten).fill(<Lifebar lp={lp} />);

  return (
    <div>
      <h3>{name}</h3>
      <div>{Lifebars}</div>
    </div>
  );
};

export default Enemy;
