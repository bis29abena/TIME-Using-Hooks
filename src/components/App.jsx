import React from "react";

function App() {
  const [currenTime, setTime] = React.useState(new Date().toLocaleTimeString());

  function getTime() {
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{currenTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
