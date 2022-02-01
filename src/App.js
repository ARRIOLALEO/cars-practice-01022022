import React from "react";
import reactLogo from "./img/react.png";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="contacts">
          <div className="contact-card">
            <img src={reactLogo} alt="this is a react logo" />
            <h3>This is React</h3>
            <div class="info-group">
              <p>My phone number here</p>
            </div>
            <div className="info-group">
              <p> this is my address </p>
            </div>
          </div>
          <div className="contact-card">
            <img src={reactLogo} alt="this is a react logo" />
            <h3>This is React</h3>
            <div class="info-group">
              <p>My phone number here</p>
            </div>
            <div className="info-group">
              <p> this is my address </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default App;
