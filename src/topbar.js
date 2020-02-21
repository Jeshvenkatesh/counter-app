import React, { Component } from'react';
import './topbar.css';

class TopBar extends Component {

    constructor(props){
        super(props)
        this.state={
            Currentcount:0
        }

    }

      onIncrementClicked=()=>{
          const updatedCount = (this.state.Currentcount + 1)
          this.setState({Currentcount:updatedCount})
        console.log(updatedCount);
      }
      onDecrementClicked=()=>{
        const updatedCount = (this.state.Currentcount - 1)
        this.setState({Currentcount:updatedCount})
        console.log(updatedCount);

      }


    render(){

        return(
            <div className="topbar-wrapper">
                <h2>Count : {this.state.Currentcount}</h2>

                <button onClick={this.onIncrementClicked}>Increment</button>
                <button onClick={this.onDecrementClicked}>Decrement</button>
            </div>
        )

    }
   

}

export default TopBar;