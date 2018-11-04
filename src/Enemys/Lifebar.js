import React, { useState } from "react";
import Lifepoint from "./Lifepoint";

const style = {
  display: "flex"
};
const Lifebar = ({ LP = 6 }) => {
  const Lifebar = new Array(LP).fill(<Lifepoint />);
  console.log(Lifebar);
  return <div style={style}>{Lifebar};</div>;
};

export default Lifebar;
