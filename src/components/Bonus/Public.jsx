import React from "react"
import withLogin from "../HOC/withLogin"

const Public = (props) =>(
    <div>
        {console.log("Estado Login",props)}
        <h1>PAgina Publica</h1>
    </div>
)


export default withLogin( Public);