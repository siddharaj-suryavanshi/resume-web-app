import React from "react";

//components
import Header from "./Components/Header";
import Summary from "./Components/Summary";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import MostProud from "./Components/MostProud";
import Education from "./Components/Education";

//css
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Summary />
        <Experience />
        <Skills />
        <MostProud />
        <Education />
      </div>
    );
  }
}

export default App;
