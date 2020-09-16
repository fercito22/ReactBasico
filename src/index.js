import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//ReactDOM.render(elemento , document.getElementById("root"))

const root = document.getElementById("root")
//const elemento = React.createElement(componente , propiedades, hijos)
//const elemento = React.createElement("h1" , {className: "saludo"}, "Hola Mundo")

ReactDOM.render(<App />, root); 

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
