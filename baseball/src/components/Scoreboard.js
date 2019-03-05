import React, { Component } from 'react';

class Scoreboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            innings: [
                [1, 0, 0],
                [2, 0, 0],
                [3, 0, 0],
                [4, 0, 0],
                [5, 0, 0],
                [6, 0, 0],
                [7, 0, 0],
                [8, 0, 0],
                [9, 0, 0],
            ]
        }
    }

    // componentWillUpdate(){
    //     document.getElementsByClassName('score').classList.remove('active-inning');
    //     const activeHalf = document.getElementById(this.props.inning).children;
    //     activeHalf.array.forEach(element => {
            
    //     });
    //     }
    // }

    render(){
        return(
            <div className='scoreboard'>
                {this.state.innings.map(inning => {
                    return(
                        <div className='inning' id={inning[0]}>
                            <div className='inning-num'>{inning[0]}</div>
                            <div className='score away'>{inning[1]}</div>
                            <div className='score home'>{inning[2]}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Scoreboard;