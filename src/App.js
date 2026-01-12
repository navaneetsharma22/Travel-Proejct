import { useState } from "react";
import "./App.css";
import data from "./data";
import Tours from "./components/Tours";


function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  }

  // when no city left than show this massage -- No Tours Left
  if(tours.length === 0){
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-wite" onClick={() => setTours(data)}>
          Refresh
        </button>
      
       </div>

    )
   }

  return (
    <>
      <div className="">
        {/* <h2>Plan With Love</h2> */}
        {/* also place in tours component */}
        <Tours tours={tours} removeTour={removeTour}></Tours>
      </div>
      
    </>
  );
}

export default App;
