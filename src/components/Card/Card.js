import React from 'react';
import './Card.css'

class Card extends React.Component{
	/*constructor(props){
		super(props);
	}*/
	render(){
		const {totalNumber,newAdded,title,color} = this.props;
		return(
			<div className={'pa3 ma4 shadow-3 card br4 tc grow '+ color}>
				<h1>{title}</h1>
				<h1>{String(totalNumber)}</h1>
				<h4>{"+"+newAdded}</h4>
			</div>
		);
	}
}

export default Card;