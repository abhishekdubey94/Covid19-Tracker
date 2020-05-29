import React from 'react';
import './TitleBar.css';
import coronavirus from './coronavirus.svg';

class TitleBar extends React.Component{
	render(){
		return(
		<div className='titleBar ma3 pa3'>
		  <img alt="coronaImage" src={coronavirus}  style={{width:'100px'}}/>
	      <h1 className='title'> COVID-19 Tracker</h1>
		</div>
		);
	}	
}

export default TitleBar;