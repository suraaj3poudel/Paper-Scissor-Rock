import React from 'react'
import {Component} from 'react'
import './Computer.css'

class Computer extends Component{
    render(){
        let displayText="Computer is waiting for your move!"
        if(this.props.choice !== ""){
            displayText = "CPU chose " + this.props.choice; 
        }
        return(
            <div className='computer'>
            <div className="emoji">{this.props.type}</div>
            <p className="text"> <strong>{displayText}</strong> </p>
            </div>
        )
    }
}

export default Computer