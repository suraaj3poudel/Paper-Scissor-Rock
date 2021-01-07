import React from 'react'
import {Component} from 'react'
import './Choice.css'

class Choice extends Component{
    render(){
        return(
            <div className="choice" onClick={this.props.action}> {this.props.type} </div>
        )
    }
}

export default Choice