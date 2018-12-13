import React from 'react';
import axios from 'axios';
import { CSSTransition } from "react-transition-group";

class Contact extends React.Component {
constructor(props){
    super(props)
    this.state = ({
        name:"",
        location:"",
        year:"",
        //submitStatus:""

    })
    this.captureInputName=this.captureInputName.bind(this)
    this.captureInputLocation=this.captureInputLocation.bind(this)
    this.captureInputYear=this.captureInputYear.bind(this)
    this.userSubmitted=this.userSubmitted.bind(this)
}


    userSubmitted() {

        console.log("Form Submitted");
        console.log(this.state)
        axios.post("http://localhost:8888/add", this.state)
        .then((data)=>{
            console.log(data)
            //this.setState({submitStatus: data})

        })

    }

    captureInputName(e) {
        console.log(e.target.value);
        this.setState({name:e.target.value})

    }
    captureInputLocation(e) {
        console.log(e.target.value);
        this.setState({location:e.target.value})
    }

    captureInputYear(e) {
        console.log(e.target.value);
        this.setState({year:e.target.value})

    }
    render() {
        return (<CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames="fade"
            enter={false}>
            <div>
                Contact us and we will be happy to help.

            <div>
                    <form onSubmit={this.userSubmitted}>
                        Name:
                        <input type="text" onChange={this.captureInputName}></input><br></br>
                        Location:
                        <input type="text" onChange={this.captureInputLocation}></input><br></br>
                        Year:
                        <input type="number" onChange={this.captureInputYear}></input><br></br>
                        <br></br>
                        <input type="submit" value="Submit"></input>
                    </form>
                </div>
                <br></br>
                {this.state.submitStatus}
            </div>
        </CSSTransition>


        );
    }
}

export default Contact;