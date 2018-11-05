import React from "react";
import EnemyForm from "../Enemys";
import Enemy from "../Enemys/Enemy";
import Lifepoint from "../Enemys/Lifepoint";
import Lifebar from "../Enemys/Lifebar";

const EnemyStory = () => {
  return (
    <div>
      <h1>Gegner</h1>
      <div>
        Es soll möglich sein einen Gegner repräsentiert durch einen Spezifischen
        Namen anzulegen
        <ul>
          <li> Füge einen Gegner Hinzu </li>
          <li>
            Ein gegner hat immer X Lebenspunkte und optional eins von den
            Merkmalen Schwächlich oder Zerbrechlich. Schwächlich reduziert den
            Multiplikator von 5 auf 3 Leisten und Zerbrechlich sogar nur auf
            eine Leiste.
          </li>
          <li>
            Über optionale Tags soll es möglich sein den Gegnern Zuständen oder
            "Markierungen" zu geben
          </li>
        </ul>
        Habe ich die eintragungen gemacht soll beim Neu laden der letzte Stand
        dargestellt werden.
      </div>

      <div>
        Ein Lebenspunkt sieht wie folgt aus: <Lifepoint />
      </div>
      <hr />
      <div>
        Eine Lebensleiste: <Lifebar />
      </div>
      <hr />
      <div>
        Und schließlich ein Beispiel Gegner
        <Enemy name="Horst" lebenspunkte={8} />
      </div>
      <hr />
      <div>
        Gegner mit weniger Lebensleisten
        <Enemy name="Paul" lebenspunkte={8} lebensleisten={3} />
      </div>

      <hr />
      <div>
        komplette form:
        <EnemyForm />
      </div>
    </div>
  );
};

export default EnemyStory;
