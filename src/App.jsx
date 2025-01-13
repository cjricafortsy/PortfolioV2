import { useState } from "react";
import Home from "./Components/Home";
import Techstack from "./Components/Techstack";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <section className="h-screen overflow-auto hide-scrollbar scroll-smooth">
      <Home></Home>
      <Techstack></Techstack>
    </section>
  );
}

export default App;
