import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Pokemones } from "./components/Pokemones";
import { Nav } from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <div className=" container-fluid mt-3 ">
        <Routes>
          <Route path="/" element={<Pokemones />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
