import React, { Component } from 'react';

class Author extends Component {
  render() {
    
    const author = this.props.author;

    return (
      <div>
        <ul>
          <li><h4>Nom : {author.nom} </h4></li>
          <li><h4>Prénom : {author.prenom}</h4></li>
          <li>Date de Naissance : {author.birth}</li>
        </ul>
      </div>
    );
  }
}

export default Author;