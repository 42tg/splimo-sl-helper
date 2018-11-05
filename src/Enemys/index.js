import React, { useState, useRef } from "react";
import Enemy from "./Enemy";
const enemysStyle = {};
const EnemyForm = () => {
  const [enemys, setEnemys] = useState([]);
  const [formContent, setForm] = useState({ name: "", lebenspunkte: 6 });
  const addEnemy = e => {
    e.preventDefault();
    console.log(formContent);
    setEnemys([
      ...enemys,

      <Enemy name={formContent.name} lebenspunkte={formContent.lebenspunkte} />
    ]);
  };
  return (
    <div>
      <form onSubmit={addEnemy}>
        <input
          type="text"
          placeholder="Name"
          value={formContent.name}
          onChange={e => setForm({ ...formContent, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="lebenspunkte"
          value={formContent.lebenspunkte}
          onChange={e =>
            setForm({
              ...formContent,
              lebenspunkte: parseInt(e.target.value, 10)
            })
          }
        />
        <br />
        <button type="submit">Hinzufügen </button>
      </form>
      <div style={enemysStyle}>
        {enemys.map(enemy => (
          <React.Fragment>
            {enemy}
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default EnemyForm;
