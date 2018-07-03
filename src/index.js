import React from "react"
import ReactDOM from "react-dom"

class Container extends React.Component{
    render(){
        return(
            <div>
                Hello
            </div>
        )
    }
}

ReactDOM.render(<Container/>,document.getElementById("react-container"))
