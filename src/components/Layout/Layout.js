import './Layout.css';
import Choice from '../Choice/Choice'
import Human from "../Human/Human"
import Computer from "../Computer/Computer"
import { Component } from 'react';

class Layout extends Component {

  state={
   display:"",
   computerChoice:"",
   choices:['Rock','Paper','Scissors'],
   hands:['✊','🖐️','✌'],
   winner:"",
   style:"#00CED1",
   hscore:0,
   cscore:0
  }
  
  choice=(select)=>{
    const selection = this.state.choices[Math.floor(Math.random()*3)]
    this.setState({
      display: select,
      computerChoice: selection
  })
  this.win(select,selection)
    return true;
  }


  win=(human, computer)=>{
    console.log((this.state.choices.indexOf(computer)+1)%3 + " and " + this.state.choices.indexOf(human))
    if((this.state.choices.indexOf(computer)+1)%3 === this.state.choices.indexOf(human)){
      let newScore=this.state.hscore +1;
      this.setState({winner:"You win!",style: '#90EE90',hscore:newScore})
    }

    else if(this.state.choices.indexOf(computer)===this.state.choices.indexOf(human)){
      this.setState({winner:"It's a draw!", style: '#6495ED'})
    }

    else{
      let newScore=this.state.cscore +1;
      this.setState({winner:"Computer wins!", style: '#B22222',cscore:newScore})
    }
  }

  reset=()=>{
    this.setState({
      hscore:0,
      cscore:0,
      display:"Click to Play!",
      computerChoice:"Click to Play!"
    })
  }

  render(){
  return (
      <div className="application" style={{backgroundColor:this.state.style}}>
        <h2 className="header"> Make your choice </h2>
        <div className="container">
          <span className="notification">
            <span className='score'>You</span>
            <span className='badge'>{this.state.hscore}</span>
          </span>
          <Choice type ='🖐️' action={(e)=>this.choice('Paper')}/>
          <Choice type ='✌' action={(e)=> this.choice('Scissors')}/>
          <Choice type ='✊' action={(e)=>this.choice('Rock')}/>
          <span className="notification">
            <span className='score'>CPU</span>
            <span className='badge'>{this.state.cscore}</span>
          </span>
        </div>
        <button className='reset' onClick={this.reset}>Reset</button>
      <div className= "container2">
        <Human type={this.state.hands[this.state.choices.indexOf(this.state.display)]} choice={this.state.display}/>
        <Computer type={this.state.hands[this.state.choices.indexOf(this.state.computerChoice)]} choice={this.state.computerChoice}/>
      </div>
      <p className="winner" style={{background:'black'}}> {this.state.winner===""? "Select a hand to play": this.state.winner } </p>
    </div>
  );
  }
}

export default Layout;
