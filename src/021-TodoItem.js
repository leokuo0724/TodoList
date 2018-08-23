import React from "react"
import ReactDOM from "react-dom"
import styled, {keyframes} from 'styled-components'



export default class TodoItem extends React.Component{
	render(){
		const displayItems = this.props.items.map((item)=>{
			return(<li key={item.id}>{item.name}</li>);
		});

		return(
			<div>
				<ul>
					{displayItems}
				</ul>
			</div>
		);
	}
}
