let players = [
    {
        name: "Guil",
        score: 50,
        key : 1
      },
      {
        name: "Treasure",
        score: 85,
        key : 2
      },
      {
        name: "Ashley",
        score: 95,
        key : 3
      },
      {
        name: "James",
        score: 80,
        key : 4
      }
];
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
        {props.name}
        </span>
        <Counter score={props.score} />
    </div>
);

const Counter = (props)=>(
    
    <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{props.score}</span>
        <button className="counter-action increment"> + </button>
    </div>
);

const App = (props)=>(
    <div className="scoreboard">
        <Header title="My ScoreBoard" totalPlayers={props.initialPlayers.length} />
        {/*Player list*/}
        {props.initialPlayers.map(
            player=><Player key={player.key.toString()} name={player.name} score={player.score} />
        )}
        {/* <Player name="Vivek Singh" score={11} />
        <Player name="Amit Singh" score={12} />
        <Player name="Vishal Singh" score={103} />
        <Player name="Sachin Singh" score={130} /> */}
    </div>
);

ReactDOM.render(
    <App initialPlayers={players} />,
    document.getElementById("root")
);