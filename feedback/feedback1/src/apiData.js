import React from 'react';
import axios from 'axios';
import ProductList from './productlist';

class APIData extends React.Component {

constructor(props){

super(props)

    this.state= {
        products: []

    
}
}
    getRemoteData(){
axios.get("http://localhost:3002/productlist")
.then((received)=>{

//console.log(received.data)
this.setState({products:received.data})
console.log(this.state.products)

})
        
    }
    componentWillMount(){
        this.getRemoteData()
    }
    
    renderProductList(){
        return this.state.products.map((product)=>{
        return (<ProductList
                        key={product.id}
                        myname={product.title}
                        myemail={product.description}
                    ></ProductList>
                    )
                })
            }

    render() { 
        return ( 
    <div> Getting data...
        <ol>
        {this.renderProductList()}
        </ol>
        </div>
         );
    }
}
 
export default APIData;