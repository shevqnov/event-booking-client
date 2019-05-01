import React from "react";
import { render } from "react-dom";

function App() {
  return (
    <React.Fragment>
      <h1>Event Booking App</h1>
      <p>Advantages: </p>
      <ul>
        <li> 1. This is awesome app for booking your events</li>
        <li> 2. Build with graphql and react, and using parsel for build btw...</li>
        <li> 3. And even more ...</li>
      </ul>
    </React.Fragment>
  );
}

render(<App />, document.getElementById("root"));
