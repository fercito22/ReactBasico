// Componentes de Orden Superior

import React, { Component } from "react"

const withLoader = (propValue) => ( WrappedComponent) => {
    return class WithLoader extends Component {

        constructor(props) {
            super(props)
        }

        render() {
            //console.log("Componente Curso",this.props)
            //return this.props.courses.length === 0
            //return this.props["courses"].length === 0
            return this.props[propValue].length === 0
            ?<h1>Cargando ...</h1>
            :<WrappedComponent {...this.props} />
        }

    }
}

export default withLoader;