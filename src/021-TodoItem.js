import React from "react"
import ReactDOM from "react-dom"
import styled, {keyframes} from 'styled-components'
import { Button } from './00-StyledComponents'

const ClearButton = Button.extend`
	float: right;
	font-size: 14px;
	margin-right: 4px;
`

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
	done(ev){
		if(ev.target.isDone){
			ev.target.style.color = 'rgb(59, 59, 59)';
			ev.target.isDone = false;
		} else {
			ev.target.style.color = 'rgb(224, 224, 224)';
			ev.target.isDone = true;
		}
	}

	render(){
		let ul = document.getElementsByTagName('ul')[0];
		let li = document.getElementsByTagName('li');
		const displayItems = this.props.items.map((item, index)=>{
			return(
				<TodoLi
					key={index}
					item={item}
					onDoubleClick={() => {this.props.removeItem(item)}}
		 			onClick={
						(event) => {
							this.done(event)
							this.props.isDone(event.target.textContent)
						}
					}
				>
				{item.name}
				</TodoLi>);
		});

		return(
			<div>
				<ul>
					{displayItems}
				</ul>
				<ClearButton
						onClick={
							()=>{
								this.props.clearDoneItem();
								for(var i=0; i<li.length; i++){
									li[i].style.color = 'rgb(59, 59, 59)'
								}
							}
						}>clear</ClearButton>
			</div>
		);
	}
}
