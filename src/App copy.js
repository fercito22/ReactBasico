import React, {Fragment} from 'react';
//import logo from './logo.svg';
//import './App.css';
import "./styles/styles.scss"
import Curso from './Curso'

const cursos = [
  {
    "title": "React desde cero.",
    "imagen": "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    "price" : 22,
    "profesor": "Beto Quiroga"
  },
  {
    "title": "React desde cero.",
    "imagen": "https://edteam-media.s3.amazonaws.com/courses/original/47766c2e-6ef7-40a9-8c92-50939fe9bfd0.png",
    "price" : 30,
    "profesor": "Beto Quiroga"
  },
  {
    "title": "React desde cero.",
    "imagen": "https://edteam-media.s3.amazonaws.com/courses/original/0b4e6141-c9cd-4e05-bb59-55b4b9e67a14.png",
    "price" : 15,
    "profesor": "Beto Quiroga"
  },
  {
    "title": "React desde cero.",
    "imagen": "https://edteam-media.s3.amazonaws.com/courses/original/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg",
    "price" : 60,
    "profesor": "Beto Quiroga"
  }
]

const App = () => (
  <Fragment>
    <div className="saludo">     
      <h1>Hola Mundo</h1>
      <p>Hola Saludando desde mi componente.</p>
      
      <img src="https://decider.com/wp-content/uploads/2019/04/invader-zim.jpg" alt="hola"/>
    </div>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt="banner" src="https://decider.com/wp-content/uploads/2019/04/invader-zim.jpg"/>
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Título del banner</p>
            <p> Subtítulo del banner</p>
            <a href="#" className="button">Suscribirse</a>
          </div>
        </div>
      </div>
    </div>

    <div className="ed-grid m-grid-3">
      {/* <Curso 
       // title="React desde cero."
       // imagen="https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg"
       // price="25 $us"
       // profesor="Beto Quiroga"
        />
        <Curso 
        title="Electronica dese Cero"
        imagen="https://edteam-media.s3.amazonaws.com/courses/original/47766c2e-6ef7-40a9-8c92-50939fe9bfd0.png"
        price={15}
        profesor="Alvaro Garcia"
        />
        <Curso 
        title="HTML desde cero"
        imagen="https://edteam-media.s3.amazonaws.com/courses/original/26557907-0555-427e-a40c-6ff207f98d72.png"
        price={25}
        profesor="Alvaro Garcia"
        />     */}
        {
          cursos.map( Cur => <Curso 
            title={Cur.title} 
            imagen={Cur.imagen} 
            price={Cur.price} 
            profesor={Cur.profesor}
            />)
        }
    </div>
  </Fragment>
)
//<h1>Hola Mundo desde mi archivo JS</h1>

export default App;
