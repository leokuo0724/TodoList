import React from "react"
import ReactDOM from "react-dom"
import styled, {keyframes} from 'styled-components'

const slideIn = keyframes`
	0%{
		margin-top: -30%;
		opacity: 0;
	}
	100%{
		margin-top: 0%;
		opacity: 1;
	}
`
const TodoLi = styled.li`
	animation: ${slideIn} 0.4s ease-in-out 1;
`

export default class TodoItem extends React.Component{
	// removeItem=(ev)=>{
	// 	this.props.items.length--;
	// 	ev.target.remove();
	// 	console.log(this.props.items);
	// }

	done(ev){
		if(ev.target.style.color == 'rgb(224, 224, 224)'){
			ev.target.style.color = 'rgb(59, 59, 59)'
		} else {
			ev.target.style.color = 'rgb(224, 224, 224)'
		}
	}

	render(){
		const displayItems = this.props.items.map((item)=>{
			return(<TodoLi key={item.id} onDoubleClick={this.props.removeItem}
				id={item.id} onClick={this.done}>{item.name}</TodoLi>);
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
