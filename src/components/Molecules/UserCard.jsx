import React from "react"

const USerCard = ({name, username, email, foto, ciudad, pais, telefono, edad}) =>(   
    
    <article className="card">        
    <div className="center">
        <img  src={foto} alt={name} />
    </div>
    
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="center">{name}</h3>
      <div className="s-mb-2 s-main-center">
      Usuario: { username }            
      </div>
      <p className="center">Edad: {edad}</p>
      <p className="center"> { pais } - { ciudad }  </p>      
      <p className="center">Telefono: { telefono }</p>
      
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="https://ed.team">{`${email}`}</a>
      </div>
    </div>
  </article>
)

export default USerCard;