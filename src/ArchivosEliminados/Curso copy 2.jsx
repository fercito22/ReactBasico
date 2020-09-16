import React from 'react'
import PropTypes from 'prop-types'


//const imagenDefecto = "https://thumbs.dreamstime.com/z/deuda-borrada-12160997.jpg"
const Curso = ({title, imagen, price, profesor}) => (
    <article className="card">
        
  <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">    
    <img src={
            imagen}
            alt={title}
            />    
  </div>
  <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">      
      <h3 className="center">{title}</h3>    
    <div className="s-mb-2 s-main-center">
      <div className="card__teacher s-cross-center">
        <div className="card__avatar s-mr-1">
          <div className="circle img-container">
            <img src="https://vignette.wikia.nocookie.net/doblaje/images/d/dd/Fredflintstone.jpg/revision/latest/top-crop/width/360/height/450?cb=20100707215559&path-prefix=es" alt="tio"/>
          </div>
        </div>
        <span className="small">{`Prof.: ${profesor}`}</span>
      </div>
    </div>
    
    <div className="s-main-center">        
        <a className="button--ghost-alert button--tiny" href="https://ed.team">{`${price} $us`}</a>
    </div>
  </div>
</article>
)

Curso.prototype = {
    title: PropTypes.string,
    imagen: PropTypes.string,
    price: PropTypes.number,
    profesor: PropTypes.string
}

Curso.defaultProps ={
    title: "No Se encontro un titulo.",
    imagen: "https://thumbs.dreamstime.com/z/deuda-borrada-12160997.jpg",
    price: "--",
    profesor: ""
}

export default Curso;