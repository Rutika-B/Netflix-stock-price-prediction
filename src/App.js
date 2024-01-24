import React, { useState } from "react";

import "./App.css";
import APIService from "./components/APIservice";
import LiveChart from "./components/LiveChart";

function App() {
  const [open, setOpen] = useState(0);
  const [high, setHi] = useState(0);
  const [low, setLow] = useState(0);
  const [volume, setVol] = useState(0);
  const [prediction, setPredi] = useState(0);

  const insertParm = () => {
    APIService.InsertArticle({ open, high, low, volume })
      .then((data) => setPredi(data.prediction)) //have a look
      .catch((err) => console.log("error", err));
  };
  function handleSubmit(event) {
    event.preventDefault();
    // send the form data to the server using an HTTP POST request
    insertParm();
  }

  return (
    <div className="App">
      <header className="App-header">
        <form className="App" onSubmit={handleSubmit}>
          <label htmlFor="open" className="form-label">
            open
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter open"
            value={open}
            onChange={(e) => setOpen(e.target.value)}
            required
          />

          <label htmlFor="low" className="form-label">
            low
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter low"
            value={low}
            onChange={(e) => setLow(e.target.value)}
            required
          />

          <label htmlFor="high" className="form-label">
            high
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter high"
            value={high}
            onChange={(e) => setHi(e.target.value)}
            required
          />

          <label htmlFor="volume" className="form-label">
            volume
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter volume"
            value={volume}
            onChange={(e) => setVol(e.target.value)}
            required
          />
          <input type="submit" value="submit" />
        </form>
        <h3>{prediction}</h3>
        <h1>stock candlestick chart</h1>
        <LiveChart Symbol={"IBM"} />
      </header>
    </div>
  );
}

export default App;
