import React from "react";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Nav />
      <Landing />
      <About />
      <Services/>
      <Testimonials/>
    </div>
  );
}

export default App;
