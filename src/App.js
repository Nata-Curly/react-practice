// import logo from './logo.svg';
import "./App.css";
import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMore from "./components/load-more";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColorGenerator from "./components/random-color-generator";
import ScrollIndicator from "./components/scroll-indicator";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

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

      {/* Tree view component */}
      <TreeView menus={menus} />

      {/* QR code generator */}
      <QRCodeGenerator />

      {/* Toggle theme component */}
      <LightDarkMode />

      {/* Scroll indicator component */}

      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
