import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
  axios.get(apiUrl).then(handleResponse);

  function search(event) {
    event.preventDefault();
  }

  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
