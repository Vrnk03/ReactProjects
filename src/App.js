import "./App.css";
import Weather from "./components/Weather";

function App() {
  const apiKey = "198119aab90f44c994b161419241403";

  return (
    <div className="App">
      <Weather apiKey={apiKey} />
    </div>
  );
}

export default App;
