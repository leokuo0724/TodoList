import React from "react"
import ReactDOM from "react-dom"
import TodoTitleInput from './01-TodoTitleInput'
import TodoList from './02-TodoList'

import styled, {injectGlobal} from 'styled-components'

injectGlobal`
	html{
		@import url('https://fonts.googleapis.com/css?family=Roboto:100');
		font-family: 'Roboto', sans-serif;
		color: rgb(59, 59, 59);
		background-color: rgb(240, 240, 240);
	}
	*{
		margin: 0;
		padding: 0;
	}
	ul{
		margin-top: 10px;
		height: 270px;
		overflow: scroll;
	}
	li{
		display: block;
		height: 30px;
		line-height: 30px;
		margin-left: 10px;
		list-style: none;
	}
	li:hover{
		color: rgb(200, 200, 200);
	}
	::placeholder{
		font-weight: 100;
	}
`
const Box = styled.div`
	margin: 0 auto;
	margin-top: 20px;
	width: 300px;
	height: 350px;
	border-radius: 6px;
	background: white;
	padding:10px;
`

class Container extends React.Component{
	constructor(){
		super();
		this.state = {
			todoItems: [
				{id:0, name:'play the piano'},
				{id:1, name:'Homework'},
				{id:2, name:'React projects'}
			]
		};
		this.createTodoItem = this.createTodoItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
	}

	createTodoItem(todoText){
		let items = this.state.todoItems;
		items.push({
			id: items.length+1,
			name: todoText
		});
		this.setState({todoItems: items});
	}

	removeItem(ev){
		let items = this.state.todoItems;
		// let leftItem = items.splice(ev.target,1);
		// items.remove(ev.target.name);
		// console.log(this.state.item);
		ev.target.remove();
		this.setState({todoItems: items});
	}

	render(){
		return(
			<Box>
				<TodoTitleInput items={this.state.todoItems} createTodoItem={this.createTodoItem}/>
				<TodoList items={this.state.todoItems} removeItem={this.removeItem}/>
			</Box>
		);
	}
}


ReactDOM.render(<Container/>,document.getElementById("react-container"))
