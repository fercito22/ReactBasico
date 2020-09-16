import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//const imagenDefecto = "https://thumbs.dreamstime.com/z/deuda-borrada-12160997.jpg"
const CourseCard = ({ id, title, imagen, price, professor }) => (
  <article className="card">

    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      {/* <a href={`/cursos/${id}`}>
        <img src={imagen} alt={title} />
      </a> */}
      <Link to={`/cursos/${id}`}>
        <img src={imagen} alt={title} />
      </Link>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="center">{title}</h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src="https://vignette.wikia.nocookie.net/doblaje/images/d/dd/Fredflintstone.jpg/revision/latest/top-crop/width/360/height/450?cb=20100707215559&path-prefix=es" alt="tio" />
            </div>
          </div>
          <span className="small">{`Prof.: ${professor}`}</span>
        </div>
      </div>

      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="https://ed.team">{`${price} $us`}</a>
      </div>
    </div>
  </article>
)

CourseCard.prototype = {
  title: PropTypes.string,
  imagen: PropTypes.string,
  price: PropTypes.number,
  professor: PropTypes.string
}

CourseCard.defaultProps = {
  title: "No Se encontro un titulo.",
  imagen: "https://thumbs.dreamstime.com/z/deuda-borrada-12160997.jpg",
  price: "--",
  professor: ""
}

export default CourseCard;