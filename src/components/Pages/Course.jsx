import Axios from "axios"
import React, {Component}  from "react"



// const cursos = [
//     {
//         "id": 1,
//         "titulo": "React desde cero.",
//         "imagen": "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
//         "price": 22,
//         "profesor": "Beto Quiroga"
//     },
//     {
//         "id": 2,
//         "titulo": "React desde cero.",
//         "imagen": "https://edteam-media.s3.amazonaws.com/courses/original/47766c2e-6ef7-40a9-8c92-50939fe9bfd0.png",
//         "price": 30,
//         "profesor": "Beto Quiroga"
//     },
//     {
//         "id": 3,
//         "titulo": "React desde cero.",
//         "imagen": "https://edteam-media.s3.amazonaws.com/courses/original/0b4e6141-c9cd-4e05-bb59-55b4b9e67a14.png",
//         "price": 15,
//         "profesor": "Beto Quiroga"
//     },
//     {
//         "id": 4,
//         "titulo": "React desde cero.",
//         "imagen": "https://edteam-media.s3.amazonaws.com/courses/original/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg",
//         "price": 60,
//         "profesor": "Beto Quiroga"
//     }
// ]

class Course extends Component {

    //const CursoActual = cursos.filter(c => c.id === parseInt(match.params.id))[0]
    constructor (props){
        super(props)

        this.state = {
            cursoActual: {}
        }
    }


    componentDidMount(){
        Axios.get(`http://my-json-server.typicode.com/fercito22/json-db/cursos/${this.props.match.params.id}`)      
      .then(respuesta => this.setState({
        cursoActual: respuesta.data
      }))
    }    

    

    render() {
        return (
            <div className="ed-grid m-grid-3">
                {
                    this.state.cursoActual ? (
                        // <> fragmentos
                        <>
                            <h1 className="m-cols-3">{this.state.cursoActual.titulo}</h1>
                            <img className="m-cols-1" src={this.state.cursoActual.imagen} alt={this.state.cursoActual.titulo} />
                            <p className="m-cols-2">Profesor: {this.state.cursoActual.profesor}</p>
                        </>
                    ) : (
                            <h1>El Curso no existe</h1>
                        )
                }
            </div>
        )
    }
}

// const Course = ({ match }) => {

//     const CursoActual = cursos.filter(c => c.id === parseInt(match.params.id))[0]
//     return (
//         <div className="ed-grid m-grid-3">
//             {

//                 CursoActual ? (
//                     // <> fragmentos
//                     <>
//                         <h1 className="m-cols-3">{CursoActual.titulo}</h1>
//                         <img className="m-cols-1" src={CursoActual.imagen} alt={CursoActual.titulo} />
//                         <p className="m-cols-2">Profesor: {CursoActual.profesor}</p>
//                     </>
//                 ) : (
//                         <h1>El Curso no existe</h1>
//                     )

//             }
//         </div>

//     )

// }

export default Course;