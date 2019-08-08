import React,{Component} from 'react';
import './App.css';
import {Cardlist} from './components/card-list/card-list.component'
import {Searchbox} from './components/search-box/search-box'
class App extends  Component{
    constructor(){
      super();
        this.state={  
                    monstar:[],
                    searchField:'',
                    };
                }
//lifecycle Methods
 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(users=>this.setState({monstar:users}))
 }
//  I will not Allow To Upadate A State Without Usng SetState
handlechange=(e)=>{
  this.setState({searchField:e.target.value})
  }
 render(){
    const { monstar , searchField} = this.state;
    const filteredmostar = monstar.filter((monstar)=>monstar.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className="App">
//         <h1>Monster Grid</h1>
        <Searchbox
        placeholder='search moster'
        handlechange={this.handlechange}
        />
        <Cardlist monstar={filteredmostar}>
        </Cardlist>
      </div>
    )
  }
}
export default App;



