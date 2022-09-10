import './App.css';
import { GrocryList } from './GroceryList';
import image from './list.jpeg';
import man from './man.jpeg'

function App() {
  return (
    <div className="app">
      <div className="container">
        <img src={image} alt="list" width="250px" />
      </div>
      <div className="container">
        <h1>Grocery List</h1>
      </div>
      <GrocryList />
      <div className="container">
        <img src={man} alt="man" width="250px" />
      </div>
    </div>
  );
}

export default App;
