//import React, { Fragment } from 'react';
import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import "./styles/styles.scss"
//import Curso from './Curso'
import Banner from "./Banner"
import Form from "./Form"
import CourseGrid from './CourseGrid'
import Course from './Course'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MainMenu from './MainMenu';
import History from './History';

const App = () => (
  // <Fragment>    
  <Router>
    <MainMenu />
    <Switch>
      {/* <Banner />
      <Formulario name="Formulario EDTeam"/>
      <CourseGrid /> */}
      <Route path="/" exact component={Banner} />
      {/* <Route path="/cursos/:id" component={ Course } />  
      <Route path="/cursos" component={ CourseGrid } />  */}
      <Route path="/cursos/:id" component={Course} />
      <Route path="/cursos" component={CourseGrid} />
      <Route path="/history" component={History} />
      {/* coolback ()  */}
      <Route path="/form" component={() => <Form name="Pagina de Contacto." />} />
      <Route component={() => (
        <div className="ed-grid">
          <h1>Error 404</h1>
          <span>Pagina no encontrada</span>
        </div>
      )} />

    </Switch>
  </Router>
  //</Fragment>
)
//<h1>Hola Mundo desde mi archivo JS</h1>

export default App;
