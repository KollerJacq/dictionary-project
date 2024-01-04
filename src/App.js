import "./App.css";

import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <main>
            <Dictionary defaultKeyword="dictionary" />
          </main>
        </header>
      </div>
    </div>
  );
}

export default App;
