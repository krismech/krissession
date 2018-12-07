import React from 'react';
import ChildForm from './childForm';
class ParentForm extends React.Component {
    
constructor(props){
    super(props)
    this.state= {
        nameValue:""
    }
    this.captureInput =this.captureInput.bind(this)
    this.sayHello=this.sayHello.bind(this)
}
captureInput(e){
    console.log(e.target.value);
 this.setState({
    nameValue: e.target.value
 })
}
sayHello(){
    alert(this.state.nameValue)
}

    render() { 
        return (  
<div>
Parent Form
<input type="text" onChange={this.captureInput}></input>
<button onClick={this.sayHello}>Hello</button>
<hr></hr>
Child Form
<ChildForm 
callHello={this.captureInput}>
</ChildForm>
</div>
        );
    }
}
 
export default ParentForm;