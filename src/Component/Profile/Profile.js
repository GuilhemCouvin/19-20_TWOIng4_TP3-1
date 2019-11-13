import React, { Component } from 'react';
import Image from "./Image/Image";
import Author from "./Author/Author";
import "./Profile.css";

class Profile extends Component {

    state = {
        bool:true,
    }

    handleColor = () => {
        this.setState(
          {
            bool: !this.state.bool
          }
          );
          console.log(this.state.bool);
      }

    render() {

        const { author, image } = this.props.userData;
        console.log({image});
        let profile = "profile-container1"
        if(this.state.bool){
            profile = "profile-container1"
        }
        if(!this.state.bool){
            profile = "profile-container2"
        }

        return(
            <div className={profile}>
                <Image image={image}/>
                <Author author={author} />
                <button className="bouton" onClick={(e) => this.handleColor()}>Change style</button>
            </div>
        )
    }
}

export default Profile;