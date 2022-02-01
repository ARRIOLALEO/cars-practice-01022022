import React from "react";
import reactLogo from "./img/react.png";
import Card from "./components/Card";

class App extends React.Component {
  render() {
    return (
      <>
     
        <div className="contacts">
        <Card image={reactLogo}/>
        <Card image={reactLogo}/>
          
        </div>
      </>
    );
  }
}
export default App;
