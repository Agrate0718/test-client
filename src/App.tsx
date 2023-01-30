import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TailwindTest from "./tailwindTest";

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<TailwindTest />} />
        </Routes>

        {/* <header className="text-center">
        <TailwindTest />
      </header>
      <div className=" text-center pt-60">
        <div className="text-7xl">Zapatoes</div>
        <div className="text-2xl pt-8 pb-20">A shoe selling site</div>
      </div> */}
      </div>
    </Router>
  );
}

export default App;
