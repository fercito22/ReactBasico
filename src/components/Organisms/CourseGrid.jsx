import React from "react"
import CourseCard from "../Molecules/CourseCard"

const courses = [
    {
      "id": 1,
      "titulo": "React desde cero.",
      "imagen": "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
      "price" : 22,
      "professor": "Beto Quiroga"
    },
    {
        "id": 2,
      "titulo": "React desde cero.",
      "imagen": "https://edteam-media.s3.amazonaws.com/courses/original/47766c2e-6ef7-40a9-8c92-50939fe9bfd0.png",
      "price" : 30,
      "professor": "Beto Quiroga"
    },
    {
        "id": 3,
      "titulo": "React desde cero.",
      "imagen": "https://edteam-media.s3.amazonaws.com/courses/original/0b4e6141-c9cd-4e05-bb59-55b4b9e67a14.png",
      "price" : 15,
      "professor": "Beto Quiroga"
    },
    {
        "id": 4,
      "titulo": "React desde cero.",
      "imagen": "https://edteam-media.s3.amazonaws.com/courses/original/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg",
      "price" : 60,
      "professor": "Beto Quiroga"
    }
  ]

const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        { courses.map(c => (
        <CourseCard 
        key = {c.id}
        id={c.id}
        title={c.titulo}
        imagen={c.imagen}
        price={c.price}
        professor={c.professor}
          />
        ))}
    </div>
)


export default CourseGrid;