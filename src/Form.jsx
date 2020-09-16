import React, {Component} from "react"

class Form extends Component {
    
    // eslint-disable-next-line no-useless-constructor
    constructor (props){
        super(props)

        this.state = {
            name: "",
            correo: "",
            fecha: new Date()
        }
        this.changeName = this.changeName.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
        this.cambiarFecha = this.cambiarFecha.bind(this)
    }

    changeName (e){
        this.setState({
            nombre: e.target.value 
        })
    }

    cambiarCorreo (e){
        this.setState({
            correo: e.target.value
        })
    }

    cambiarFecha (e){
        this.setState({
            fecha: new Date()
        })
    }

    //this.setState({})

    render(){       



        return(
            <div className="ed-grid">
                <h1> {this.props.name}</h1> 
                <h4>Fecha Actual: {Math.ceil( this.state.fecha/1000)}</h4>
                <form id="form-element">
                <div className="ed-grid m-grid-2" >
                
                    <div className="form__item">                    
                        <label>Nombre Completo</label>
                        <input 
                        type="text" 
                        // onChange={valor => this.setState({
                        //     nombre: valor.target.value
                        // })}/> 
                        onChange = {this.changeName}
                        /> 
                    </div>
                    <div className="form__item">                    
                        <label>Correo Electronico</label>
                        <input type="email"
                        // onChange={valor => this.setState({
                        //     correo: valor.target.value
                        // })}
                        onChange ={this.cambiarCorreo}
                        />
                    </div>
                    <div className="form__item">
                        <input className="button full" type="submit" value="Enviar"/>
                    </div>                
                </div>
                </form>      
                
                <div>
                    <h2>{`Hola ${this.state.name}`}</h2>
                    <span>{`Tu correo es: ${this.state.correo}`}</span>
                </div>     
            </div>
            
        )
    }

    componentDidMount(){
        let elemento = document.getElementById("form-element")
        console.log(elemento);

        this.intervaloFecha = setInterval( () =>{
            this.cambiarFecha()
            console.log(new Date())
        } ,1000)
    }

    componentDidUpdate(prevProps, prevState){
        //console.log(prevProps);
        //  console.log(prevState);
        //console.log("------");
    }

    componentWillMount(){
        clearInterval(this.intervaloFecha)
    }




}

export default Form;