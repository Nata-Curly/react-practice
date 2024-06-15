// import logo from './logo.svg';
import './App.css';
import Accordion from './components/accordion';
import RandomColorGenerator from './components/random-color-generator';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">

      {/* Accordion component */}
      <Accordion />
      
      {/* RandomColorGenerator component */}
      <RandomColorGenerator />

      {/* StarRating component */}
      <StarRating/>      

    </div>
  );
}

export default App;
