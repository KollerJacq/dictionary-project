import React from "react";
import Synonyms from "./Synonyms";
import "./meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        <Synonyms synonyms={props.meaning.synonyms} />
        <p className="definition">
          <span className="title">Definition: </span>
          <br />
          {props.meaning.definition}
        </p>
        <p className="examples">
          <span>Example: </span>
          <br />
          {props.meaning.example}
        </p>
      </section>
    </div>
  );
}
