import React, { useState, useRef } from "react";
import Lifebar from "./Lifebar";

const tagStyle = {
  border: "1px solid #dddddd",
  borderRadius: "6px",
  margin: "5px",
  padding: "5px"
};

const TagCloud = () => {
  const [tags, setTags] = useState([]);
  const inputEl = useRef(null);
  const handleSubmit = e => {
    e.preventDefault();
    setTags([...tags, inputEl.current.value]);
    inputEl.current.value = "";
  };

  const deleteTag = tag => {
    setTags(tags.filter(eTag => eTag !== tag));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputEl} type="text" />
        <button type="submit">Add</button>
      </form>
      <div
        style={{
          "max-width": "200px",
          display: "flex",
          "flex-wrap": "wrap"
        }}
      >
        {" "}
        {tags.map(tag => (
          <span onClick={() => deleteTag(tag)} style={tagStyle}>
            {tag}
          </span>
        ))}{" "}
      </div>
    </div>
  );
};
const EnemyStyle = {
  display: "flex",
  "justify-content": "space-evenly"
};

const Enemy = ({ name, lebenspunkte = 6, lebensleisten = 5 }) => {
  const Lifebars = new Array(lebensleisten).fill(
    <Lifebar lebenspunkte={lebenspunkte} />
  );

  return (
    <React.Fragment>
      <h3>{name}</h3>
      <div style={EnemyStyle}>
        <div>{Lifebars}</div>
        <TagCloud />
      </div>
    </React.Fragment>
  );
};

export default Enemy;
