import React from "react";
import ReactDOM from "react-dom";

class Lifecycle extends React.Component{
constructor(props){
super(props)
this.state={
dummyVariable :0
}
this.changeState=this.changeState.bind(this)
}
componentwillMount(){
console.log("component will mount now")
console.log(this.state.dummyVariable);
this.setState({
dummyVariable :this.state.dummyVariable +1
})
}
componentDidMount(){
console.log("component mounted");
}

componentwillUpdate(){
console.log("component will update for any state change");
}
componentDidUpdate(){
console.log("component updated because of state change");
} 
 

changeState(){
this.setState({
dummyVariable :this.state.dummyVariable +1
})

if(this.state.dummyVariable >15){
ReactDOM.unmountComponentAtNode(document.getElementById("lifecycle"))
}
}
componentwillMount(){
console.log("this component will ummount from view!!")

}

render(){
return(
<div> Exploring component life cycle
<br></br>
<button onClick={this.changeState} >Changestate </button>
</div>
);
}
}

export default Lifecycle; 
 
