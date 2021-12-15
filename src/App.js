import React from "react";
import "./App.css";
import { Sources } from "./components/Sources";
import Navbar from "./components/Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  updateSource(source, name) {
    this.setState({
      source: source,
      sourceName: name,
    });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="jumbotron-fluid">
          <div className="row">
            <div className="col-sm-4">
              <Sources updateSource={this.updateSource.bind(this)} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
