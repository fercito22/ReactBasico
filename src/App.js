import React, {Fragment} from 'react';
//import logo from './logo.svg';
//import './App.css';
import "./styles/styles.scss"
import Curso from './Curso'
import Banner from "./Banner"
import Formulario from "./Formulario"
import CourseGrid from './CourseGrid';

const App = () => (
  <Fragment>    
    
   <Banner />
   <Formulario name="Formulario EDTeam"/>
   <CourseGrid />

  </Fragment>
)
//<h1>Hola Mundo desde mi archivo JS</h1>

export default App;
