import React from "react"

const Banner =() =>(
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
)

export default Banner;