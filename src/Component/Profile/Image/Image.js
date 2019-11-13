import React, { Component } from 'react';
import "./Image.css";

class Image extends Component {
  render() {
    const { image } = this.props;
    return (
      <div className="profile-image-container">
        <img src={image}/>
      </div>
    );
  }
}


export default Image;