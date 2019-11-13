import React, { Component } from 'react';
import Profile from './Component/Profile/Profile';
import Statut from './Component/Profile/Statut/Statut';
import "./App.css";




class App extends Component {

  state = {
    personnes: [
      {id: 1, author: {nom: "Macron", prenom: "Emmanuel", birth:"21/12/1977"}, image:"https://medias.liberation.fr/photo/1034831-xvmd2a8ab6c-5cbd-11e7-a323-b43bc689be8d-805x1143.jpg?modified_at=1498751012&width=975",statut:{content:"Je suis le président de la république française.",compteur:0}},
      {id: 2, author: {nom: "Merkel", prenom: "Angela", birth:"17/07/1954"}, image:"http://www.alliance-presse.info/contenu/visual.php?id=7&nomchamps=filinkimage&idelement=13144",statut:{content:"Ich bin der deutsche Bundeskanzler.",compteur:0}},
      {id: 3, author: {nom: "Trump", prenom: "Donald", birth:"14/06/1946"}, image:"https://cdn-cheese.konbini.com/files/2017/01/donald_trump_official_portrait-copie-810x1013.jpg",statut:{content:"I am the president of the United States.",compteur:0}}
    ],
    actual_personne: {id:1, author: {nom: "Macron", prenom: "Emmanuel", birth:"21/12/1977"}, image:"https://medias.liberation.fr/photo/1034831-xvmd2a8ab6c-5cbd-11e7-a323-b43bc689be8d-805x1143.jpg?modified_at=1498751012&width=975",statut:{content:"Je suis le président de la république française.",compteur:0}},
  }

  handleChoice = (id) => {
    const personnes = this.state.personnes.slice();
    this.setState({actual_personne: personnes.find(personne => personne.id === id)});
  }

  handleClick = (id) => {
    const personnes = this.state.personnes.slice();
    const actual = this.state.actual_personne;

    personnes.find(actual_personne => actual_personne.id === id).statut.compteur++;
    actual.statut.compteur = personnes.find(actual_personne => actual_personne.id === id).statut.compteur;

    console.log(personnes.find(personne => personne.id === id).statut.compteur);
    console.log(actual.statut.compteur);

    this.setState({personnes: personnes});
    this.setState({actual_personne: actual});
  }

  render() {
    return (
      <div className="container">
        <div className="button-container">
          {this.state.personnes.map(personne => (
            <button className="bouton" onClick={()=> this.handleChoice(personne.id)}>{personne.author.nom}</button>
          ))}
        </div>
          <Profile userData={this.state.actual_personne}/>
          <Statut userData={this.state.actual_personne}/>
          <button className="bouton like" onClick={() => this.handleClick(this.state.actual_personne.id)} >C'est super !</button>
      </div>
    );
  }
}

export default App;
