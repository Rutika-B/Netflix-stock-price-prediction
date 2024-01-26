import React, { useState } from "react";
import { Button, Input, Typography } from "@material-tailwind/react";
import "./App.css";
import APIService from "./components/APIservice";
import LiveChart from "./components/LiveChart";
import SideBar from "./components/SideBar";

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
    console.log(prediction)
  }

  return (
    <>
      <div className="w-full flex flex-row overflow-y-scroll">
        <SideBar />
        <div className="ml">
          <div className="flex flex-col items-center justify-center py-4">
            <Typography variant="h4" >Netflix stock price prediction</Typography>
            <form
              className=""
              onSubmit={handleSubmit}
              className="flex flex-row items-center justify-center mx-5 my-3 text-1xl"
            >
              
              <label
                htmlFor="open"
                className="font-medium text-gray-700 p-4"
              >
                open
              </label>
              <input
                type="number"
                className="mt-1 mr-3 h-7 p-2 rounded-sm border-gray-200 shadow-sm sm:text-sm"
                placeholder="open price"
                value={open}
                onChange={(e) => setOpen(e.target.value)}
                required
              />

              <label
                htmlFor="low"
                className=" font-medium text-gray-700 p-4"
              >
                low
              </label>
              <input
                type="number"
                className="mt-1 mr-3 h-7 p-2 rounded-sm border-gray-200 shadow-sm sm:text-sm"
                placeholder="Enter low"
                value={low}
                onChange={(e) => setLow(e.target.value)}
                required
              />

              <label
                htmlFor="high"
                className="  font-medium text-gray-700 p-4"
              >
                high
              </label>
              <input
                type="number"
                className="mt-1 mr-3 h-7 p-2 rounded-sm border-gray-200 shadow-sm sm:text-sm"
                placeholder="Enter high"
                value={high}
                onChange={(e) => setHi(e.target.value)}
                required
              />

              <label
                htmlFor="volume"
                className="  font-medium text-gray-700 p-4"
              >
                volume
              </label>
              <input
                type="number"
                className="mt-1 mr-3 h-7 p-2 rounded-sm border-gray-200 shadow-sm sm:text-sm"
                placeholder="Enter volume"
                value={volume}
                onChange={(e) => setVol(e.target.value)}
                required
              />

              <input
                type="submit"
                value="submit"
                className="bg-blue-600 text-white m-3 items-center p-3 rounded-lg"
              />
            </form>
          <Typography variant="h3">Predicted Closing price: ${prediction}</Typography>
          
          </div>

          
          {/* <LiveChart symbol={"IBM"} /> */}
        </div>
      </div>
    </>
  );
}

export default App;
