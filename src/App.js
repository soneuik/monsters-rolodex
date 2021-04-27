 
import './App.css';
import React, {Component} from 'react';
import{CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

 
    class App extends Component{

      //Contstructor Runs at first 
      constructor(){
        //super is part of class
        super();

        //state is object
        this.state = { 
          monsters:[],
          searchField: ''
        };

      
      }

      componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters:users}));
      }

      // => 가 하는일은 >>  this.handleChange = this.handleChange.bind(this);것과 동일. 
      // 다시말해서 arrow function =>이  'this'가 this.state를 타겟하게 해줌.  
      handleChange = e => {
        this.setState({ searchField: e.target.value });
      }

      //Whenever onChange happenes, re-render happenes. 
      render(){ 
      
        //initializing variabels with state. 
        const { monsters, searchField } = this.state;

        //monseters리스트에서, searchfield값이 있는(include) 값들로 filter해서 filteredMonsters에 저장.  
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
        <div className="App"> 
        <h1>Monsters Rodolox</h1>
            <SearchBox 
              placeholder='search Monsters'
              handleChange={this.handleChange}
            /> 
            <CardList monsters={filteredMonsters} /> 
        </div>
        );
      }
    };
 

export default App;
