import React  from "react";
import ReactDOM  from "react-dom";
import RootComponent from './RootComponent';
import Parent from './family/parent';
import Alphabet from './family/alphabet/alphabet';
import Counter from "./counter/counter";
import Lifecycle from "./lifecycle/lifecycle";
import RemoteAPIData from "./remote/apiData";
import ParentForm from "./forms/parentForm";

var position = document.getElementById("rootid")
ReactDOM.render(<div>
    <RootComponent></RootComponent>
    <RootComponent></RootComponent>
    <hr></hr>
    <Parent nameson="kris" namedaughter="julie">Mallik</Parent>
    <hr></hr>
    <Parent nameson="jay" namedaughter="julbul">Shankar</Parent>
    <hr></hr>
    <Parent nameson="viju" namedaughter="appu">Arjun</Parent>
    <hr></hr>
            <Alphabet fcolor="red" bcolor="yellow">VI</Alphabet>
            <Alphabet fcolor="blue" bcolor="green">IJ</Alphabet>
            <Alphabet fcolor="green" bcolor="blue">JA</Alphabet>
            <Alphabet fcolor="purple" bcolor="red">AY</Alphabet>
            <Alphabet fcolor="yellow" bcolor="purple">YY</Alphabet>
            <hr></hr>
            <Counter>Counter</Counter>
            <hr></hr>
            
           </div>, position)

           ReactDOM.render(<Lifecycle></Lifecycle>, document.getElementById("lifecycle"))
            ReactDOM.render(<RemoteAPIData></RemoteAPIData>,document.getElementById("receivedData")) 
            ReactDOM.render(<ParentForm></ParentForm>, document.getElementById("form"))
