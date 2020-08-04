import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenido a la prueba de uso de Jenkins y Docker alojado en Github de Leonardo</h1>
        </header>
        <p className="App-intro">
         Bienvenido Usuario
         Nombre del estudiante: Leonardo Ismael Peña Magallanez
         Matricula:  2018-6923
         Estudia: Software 
        </p>
      </div>
    );
  }
}

export default App;
