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
        <div className="flex-container">
          <div className="container-1">
            <Summary />
            <Experience />
          </div>
          <div className="container-2">
            <Skills />
            <MostProud />
            <Education />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
