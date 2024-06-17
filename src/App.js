// import logo from './logo.svg';
import "./App.css";
import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
import LoadMore from "./components/load-more";
import RandomColorGenerator from "./components/random-color-generator";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      <Accordion />

      {/* Random color generator component */}
      <RandomColorGenerator />

      {/* Star rating component */}
      <StarRating />

      {/* Image slider component */}

      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />

      {/* Load more products component */}

      <LoadMore />
    </div>
  );
}

export default App;
