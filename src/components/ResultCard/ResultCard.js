import React from 'react';
import Card from '../Card/Card'
import './ResultCard.css'

class ResultCard extends React.Component{
	render(){
		const {TotalConfirmed,TotalRecovered,TotalDeaths,NewConfirmed,NewRecovered,NewDeaths} = this.props.worldCases;
		return(
		<div className='ac resultCard'>
			<Card totalNumber={TotalConfirmed} newAdded={NewConfirmed} color="bg-blue" title='Confirmed'/>
			<Card totalNumber={TotalConfirmed-TotalRecovered-TotalDeaths} newAdded={NewConfirmed-NewRecovered-NewDeaths} color="bg-gold" title='Active'/>
			<Card totalNumber={TotalRecovered} newAdded={NewRecovered} color="bg-green" title='Recovered'/>
			<Card totalNumber={TotalDeaths} newAdded={NewDeaths} color="bg-dark-red" title='Deceased'/>
		</div>
		);
	}	
}

export default ResultCard;