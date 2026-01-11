import { useState } from 'react';
import './App.css';
import data from './data'
import Tours from './components/Tours'
import Card from './components/Card';

function App() {
  const [tours, setTours]=useState(data)

  function removeTour(id) {
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);

  }


  return (
    <div className="">
    {/* <h2>Plan With Love</h2> */}
    {/* also place in tours component */}
    <Tours tours={tours} removeTour={removeTour}></Tours>
    <div>
      <h1></h1>Plan With Love</h1>
    </div>
   
    </div>
  );
}

export default App;
