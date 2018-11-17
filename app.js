
const  Header = (props)=>{
   return (      
        <header>
            <h1>
            {props.title}
            </h1>
            <span className="stats">
                Player: {props.totalPlayers}
            </span>
         </header>
    );
}
const Player =(props)=>(
    <div className="player">
        
        <span className="player-name">
        <button className="remove-player" onClick={()=>props.removePlayer(props.id)}>X
        </button>
        {props.name}
        </span>
        <Counter />
    </div>
);

class Counter extends React.Component{

    constructor(){
        super();
        //init the component state, and this state will be the value that will be stored at very first
        this.state={
            score:0 
        };
    }

    incrementScore= ()=>{
        this.setState({
            score:this.state.score+1
        }
        );
    }

    decrementScore =()=>{
        this.setState(
            prevState=>{
                return {
                    score:prevState.score-1
                };
            }
            // {
            // score:this.state.score-1
            // }
        );
    };

    render(){
        return (
        <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{this.state.score}</span>
        {/* <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button> */}
        {/* <button className="counter-action increment" onClick={()=>{this.incrementScore()}}> + </button> */}
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
        </div>
        )
    }
    
};

class App extends React.Component{

    state={
        players:[
            {
                name: "Guil",
                key : 1,
                id : 1
              },
              {
                name: "Treasure",
                key : 2,
                id : 2
              },
              {
                name: "Ashley",
                key : 3,
                id : 3
              },
              {
                name: "James",
                key : 4,
                id : 4
              }
        ]
    };

    removePlayer = (id)=>{
        this.setState(prevState=>{
            console.log(id)
            return {
                players:prevState.players.filter(p=>p.id !==id)
            }
        }
        );
    };

    render(){
        return (
    <div className="scoreboard">
        <Header title="My ScoreBoard" totalPlayers={this.state.players.length} />
        {/*Player list*/}
        {this.state.players.map(
            player=><Player 
            key={player.key.toString()} 
            name={player.name} 
            score={player.score} 
            removePlayer={this.removePlayer}
            id={player.id}
            />
        )}
        {/* <Player name="Vivek Singh" score={11} />
        <Player name="Amit Singh" score={12} />
        <Player name="Vishal Singh" score={103} />
        <Player name="Sachin Singh" score={130} /> */}
    </div>
        );
    }
};

ReactDOM.render(
    <App />,
    document.getElementById("root")
);