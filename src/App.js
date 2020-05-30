import React from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import ResultCard from './components/ResultCard/ResultCard';
import TitleBar from './components/TitleBar/TitleBar';
import CountryName from './components/CountryName/CountryName';
import IndianStatus from './components/IndiaStatus/IndiaStatus'
/*import Particles from 'react-particles-js';*/

import './App.css';

class App extends React.Component {

  constructor(){
  	super();
  	this.state={
		cardCasesData:{},
		countriesCases:[],
    textEntered:'',
		country:"World"
  	}
  }

  componentDidMount(){
  	fetch('https://api.covid19api.com/summary').then(response=>{
  		return response.json();
  	}).then(data =>{
  		this.setState({cardCasesData:data.Global,countriesCases:data.Countries});
      console.log("Countries",this.state);
  	});
    
  }

 onSearch = (event)=>{
  	this.setState({textEntered:event.target.value});
  }

 onSearchPressed = () =>{
  this.setState({country:this.state.textEntered})
  let selectedCountry = this.state.countriesCases.find(countrySelected=>countrySelected.Slug.toLowerCase()===this.state.textEntered.toLowerCase());
  console.log(selectedCountry);
  if(selectedCountry===undefined){
    console.log("Wrong country name!!!");
  }
  else{
    this.setState({cardCasesData:selectedCountry});
  }
 }

  render(){
  return (
   <div>
        <TitleBar />
	      <SearchBox onSearch={this.onSearch} onSearchPressed={this.onSearchPressed}/>
	      <CountryName countrySelected={this.state.country}/>
	      <ResultCard cardCasesData={this.state.cardCasesData}/>
        <IndianStatus/>
      </div>
  );
}
}

export default App;
