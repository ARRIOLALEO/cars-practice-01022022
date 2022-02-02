import React from "react";

 class Card extends React.Component {
  render() {
    return (
       
        <div className="contact-card">
          <img src={this.props.image} alt="this is a react logo" />
          <h3>This is React</h3>
          <div class="info-group">
            <p>My phone number here</p>
          </div>
          <div className="info-group">
            <p> this is my address </p>
          </div>
        </div>
      
    )
  }
}
export default Card;
