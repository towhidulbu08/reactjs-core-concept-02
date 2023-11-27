import logo from "./logo.svg";
import "./App.css";

const n=345344;
const singers=[
  {name:"Dr Mahfuz",job:'Singer'},
  {name:"Eva Rahman",job:'Singer2'},
  {name:"Agun",job:'sopno'},
  {name:"shuvro",job:'pathor'}
]

const singerStyle={
  color:'purple',
  backgroundColor:'white'

}

function App() {
  const nayoks=['Rubel','BappaRaz','Kubel','Josim','Salman Shah','Riaz','Anwar']
  return (
    <div className="App">
      {
        nayoks.map(nayok=> <li>{nayok}</li> )
      }
      {
        // nayoks.map(nayok=><Person name={nayok}></Person>)
      }
      {
        singers.map(singer=> <Person name={singer.name}></Person>)
      }
      {/* <Person name={nayoks[0]} nayika="Mosumi"></Person>
      <Person name={nayoks[1]} nayika="chdeka"></Person>
      <Person name={nayoks[2]}nayika="kopila"></Person> */}
    
      <h5>New Component!!!</h5>
      <p id="totocompany">rock mama ,React Mama</p>
      <Friend movie='singham' phone='01777'></Friend>
      <Friend phone="01999"></Friend>
     
    </div>
  );
}
function Person(props) {
 
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
  );
}

function Friend(props){
  console.log(props);
  return(
    <div className="container">
        <h3>Name: {props.movie}</h3>
        <p>Phone : {props.phone}</p>
    </div>
  )
}

export default App;
