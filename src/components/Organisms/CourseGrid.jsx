import React from "react"
import CourseCard from "../Molecules/CourseCard"

const CourseGrid = ({courses}) => (
    
    <div className="ed-grid m-grid-4">
        {           
            courses.length === 0
            ? <h1 className="t3"> Cargando....</h1>
            : courses.map(c => (
                <CourseCard
                    key={c.id}
                    id={c.id}
                    title={c.titulo}
                    imagen={c.imagen}
                    price={c.price}
                    professor={c.professor}
                />
            ))
        }
        <p>Hola mundo</p>
          
    </div>
)

export default CourseGrid;