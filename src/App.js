import React from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import ResultCard from './components/ResultCard/ResultCard';
import TitleBar from './components/TitleBar/TitleBar';
import CountryName from './components/CountryName/CountryName';
/*import Particles from 'react-particles-js';*/

import './App.css';

class App extends React.Component {

  constructor(){
  	super();
  	this.state={
		worldCases:{},
		countriesCases:{},
		country:""
  	}
  }

  componentDidMount(){
  	fetch('https://api.covid19api.com/summary').then(response=>{
  		return response.json();
  	}).then(data =>{
  		this.setState({worldCases:data.Global,countriesCases:data.Countries})
  	});
  }

 onSearch = (event)=>{
  	this.setState({country:event.target.value});
  }

 onSearchPressed = () =>{
 	console.log(this.state.country);
 }

  render(){
  return (
   <div>
          <TitleBar />
	      <SearchBox onSearch={this.onSearch} onSearchPressed={this.onSearchPressed}/>
	      <CountryName />
	      <ResultCard worldCases={this.state.worldCases}/>
      </div>
  );
}
}

export default App;
