import React, { Component } from "react"
import USerCard from "../Molecules/UserCard"

class Users extends Component {

    constructor(props){
        super(props)

        this.state = {
            users: []
        }
    }

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users', {method: 'get'})
    //     //.then( respuesta => console.log(respuesta) )
    //     //.then( response => console.log(response) )
    //     .then( response => response.json())
    //     .then( response2 => console.log(response2))
    //     // .then( response2 => {
    //     //     this.setState({
    //     //         users: response2
    //     //     })
    //     // })
    // }

    componentDidMount(){        
        fetch('https://randomuser.me/api/?results=25', {method: 'get'})        
        .then( response => response.json())
        //.then( response2 => console.log(response2.results))
        //.then( response2 => console.log(response2))  
        .then( response2 => {
            this.setState({
                users: response2.results
            })
        })
    }

    render(){
        const { users } = this.state
        return(
            <div className="ed-grid">
                <h1>Usuarios</h1>
                <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
                    {
                        users.map(u => ( 
                            <USerCard 
                                key={u.phone} 
                                name={u.name.title + " " + u.name.first +" " + u.name.last} 
                                username={u.login.username} 
                                email={u.email} 
                                foto={u.picture.medium} 
                                ciudad={u.location.city}
                                pais={u.location.country}
                                telefono={u.phone}
                                edad={u.dob.age}
                                                                
                                />
                                ))
                    }                    
                </div>
            </div>
        )
    }
}

export default Users;