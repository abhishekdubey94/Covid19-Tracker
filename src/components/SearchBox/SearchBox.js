import React from 'react';
import './SearchBox.css';

class SearchBox extends React.Component{
	render(){
		return(
		<div className="searchBox">
			<input onChange={this.props.onSearch} type='text'/>
			<button onClick={this.props.onSearchPressed} className='ml3 f6 link dim br3 ph3 pv2 mb1 dib white bg-dark-blue pointer'>Search</button>
		</div>
		);
	}	
}

export default SearchBox;