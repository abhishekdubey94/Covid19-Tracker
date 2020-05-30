import React from 'react';

class CountryName extends React.Component {
	
	render(){
	return(<div style={{display:'flex', justifyContent:'center'}} className='mt4'>
		<h1>{this.props.countrySelected}</h1>
	</div>);
	}
}

export default CountryName;