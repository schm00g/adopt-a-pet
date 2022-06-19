import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Finn" animal="Dog" breed="Greyhound" />
      <Pet name="Finn" animal="Dog" breed="Greyhound" />
      <Pet name="Finn" animal="Dog" breed="Greyhound" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
