import "./App.css";
import Card from "./components/Card";
import MasonaryGrid from "./components/MasonaryGrid";
import images from "./assets";

function App() {
  return (
    <div className="App">
      <MasonaryGrid>
        <Card image={images.photo1} />
        <Card image={images.photo2} />
        <Card image={images.photo3} />
        <Card image={images.photo4} />
        <Card image={images.photo5} />
        <Card image={images.photo6} />
        <Card image={images.photo7} />
        <Card image={images.photo8} />
        <Card image={images.photo9} />
      </MasonaryGrid>
    </div>
  );
}

export default App;
