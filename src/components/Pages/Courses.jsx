import Axios from "axios"
import React, { Component } from "react"
//import CourseCard from "../Molecules/CourseCard"
import CourseGrid from "../Organisms/CourseGrid"


// const CourseGrid = () => (
//     <div className="ed-grid m-grid-4">
//         { courses.map(c => (
//         <CourseCard 
//         key = {c.id}
//         id={c.id}
//         title={c.titulo}
//         imagen={c.imagen}
//         price={c.price}
//         professor={c.professor}
//           />
//         ))}
//     </div>
// )
// convertir a clases

class Courses extends Component {

  constructor(props) {
    super(props)    
    this.state = {
      courses: []
    }
  }

  componentDidMount() {    
    Axios.get('http://my-json-server.typicode.com/fercito22/json-db/cursos')
      //.then(respuesta => console.log("Respuesta",respuesta))
      .then(respuesta => this.setState({
        courses: respuesta.data
      }))
  }

  render() {
    
    const { courses } = this.state   
    
    return <CourseGrid courses={courses} />    
  }
}


export default Courses;