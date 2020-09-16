import React from 'react'

const mayorDeEdad = edad => edad > 18

const persona = {"nombre": "Alberto", "Apellido": "Quiroga", "edad": 22}

const imagenDefecto = "https://thumbs.dreamstime.com/z/deuda-borrada-12160997.jpg"
// const curso ={
//     "title": "React desde cero",
//     "imagen": "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
//     "price": "50 $us"
// }
//const Curso = () => (
    // Por el Props le pasamos la constantes y propiedades
    //const Curso = props => (
const Curso = ({title, imagen, price, profesor}) => (
    <article className="card" id={title}>
        
  <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    {/* <img src="https://3.bp.blogspot.com/-UwYCqqLKMsU/WSn-kW4SNoI/AAAAAAAASIA/zpgJBIHvVpEBrpaieB9HnRbGekn2XNFWQCLcB/s1600/cursos%2Bgratis%2Bdibujo%2Bartistico.jpg" alt="Poster Curso"/> */}
    <img src={
            imagen ? imagen : imagenDefecto} 
            alt={title ? title : "No hay un titulo."}/>
    {/* {
        imagen
        ? <img src={imagen} alt={title} />
        : <p>No tiene Imagen</p>
    } */}
  </div>
  <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    {/* <h3 className="t5 s-mb-2 s-center">
    </h3> */}
      {/* //Programación orientada a objetos con Go */}
      {/* { `Hola, Me llamo ${persona.nombre} y tengo ${persona.edad}` } */}
      {/* Elemento Ternario de condicion IF  ? */}
      {/* { mayorDeEdad(persona.edad) ? "Soy Mayor de Edad" : "Soy Menor de Edad"} */}
      {
         mayorDeEdad(persona.edad) 
         ? <h3 className="center">Soy Mayor de Edad</h3> 
         : <p>Soy Menor de Edad</p>
      }
      <h3 className="center">{title}</h3>
    
    <div className="s-mb-2 s-main-center">
      <div className="card__teacher s-cross-center">
        <div className="card__avatar s-mr-1">
          <div className="circle img-container">
            <img src="https://vignette.wikia.nocookie.net/doblaje/images/d/dd/Fredflintstone.jpg/revision/latest/top-crop/width/360/height/450?cb=20100707215559&path-prefix=es" alt="tio"/>
          </div>
        </div>
        <span className="small">{`${persona.nombre} ${persona.Apellido}`}</span>
      </div>
    </div>
    <div className="s-main-center">
        {`Prof.: ${profesor}`}        
    </div>
    <div className="s-main-center">
        
        <a className="button--ghost-alert button--tiny" href="#">{price}</a>
    </div>
  </div>
</article>
)

export default Curso;