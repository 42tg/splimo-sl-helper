import React, { useState } from "react";
import Lifepoint from "./Lifepoint";

const style = {
  display: "flex"
};
const Lifebar = ({ lebenspunkte = 6 }) => {
  const Lifebar = new Array(lebenspunkte).fill(<Lifepoint />);
  return <div style={style}>{Lifebar}</div>;
};

export default Lifebar;
