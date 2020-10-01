import Axios from "axios"
import React, { Component } from "react"
import USerCard from "../Molecules/UserCard"
import UsersGrid from "../Organisms/UsersGrid"

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

    // segundo
    // componentDidMount(){        
    //     fetch('https://randomuser.me/api/?results=25', {method: 'get'})        
    //     .then( response => response.json())
    //     //.then( response2 => console.log(response2.results))
    //     //.then( response2 => console.log(response2))  
    //     .then( response2 => {
    //         this.setState({
    //             users: response2.results
    //         })
    //     })
    // }

    // CON AXIOS
    componentDidMount(){
        Axios.get('https://randomuser.me/api/?results=25')
        .then(respuesta => {
            this.setState({
                users: respuesta.data.results
            })
        })
        //.then(resp => console.log(resp))
    }

    render(){
        const { users } = this.state
        return(
            <UsersGrid users={users} />
        )
    }
}

export default Users;