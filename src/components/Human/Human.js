import React from 'react'
import {Component} from 'react'
import './Human.css'

class Human extends Component{
    render(){
        let displayText="Select a hand to play"
        if(this.props.choice !== ""){
            displayText = "You chose " + this.props.choice; 
        }
        return(
            <div className="human">
            <div className="emoji">{this.props.type}</div>
            <p className="text"><strong>{displayText}</strong> </p>
            </div>
        )
    }
}

export default Human