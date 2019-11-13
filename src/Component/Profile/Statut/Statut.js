import React, { Component } from 'react';
import "./Statut.css";

class Statut extends Component{

    render(){

    const {statut} = this.props.userData;
    const {content,compteur} = statut;

    return(
        <div className="statut-container">
            <h4>Quoi de neuf ?</h4>
            <p>{content}</p>
            <p>Like: {compteur}</p>
        </div>  
        )
    }
}

export default Statut;