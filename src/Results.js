import React from "react";

import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results === null) {
    return null;
  } else {
    return (
      <div className="Results">
        <section>
          <h2 className="word">{props.results.word}</h2>
          <p className="phonetic">{props.results.phonetic}</p>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          if (index < 3) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  }
}
