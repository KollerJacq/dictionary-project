import "./App.css";

import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="container">
      <div className="App">
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
