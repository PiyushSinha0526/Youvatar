import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Side from "./components/Side";

function App() {
  const [page, setPage] = useState(1);
  return (
    <div className="App">
      <Navbar setPage={setPage} />
      <div className="lg:grid grid-cols-3 max-w-[1440px] m-auto">
        <Side />
        <Main page={page} setPage={setPage} />
      </div>
    </div>
  );
}

export default App;
