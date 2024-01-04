import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        <Synonyms synonyms={props.meaning.synonyms} />
        <p className="definition">
          Definition: <br />
          {props.meaning.definition}
        </p>
        <p className="example">
          Example: <br />
          {props.meaning.example}
        </p>
      </section>
    </div>
  );
}
