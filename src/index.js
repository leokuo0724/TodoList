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
				{id:1, name:'play the piano'},
				{id:2, name:'Homework'},
				{id:3, name:'React projects'}
			]
		};
		this.createTodoItem = this.createTodoItem.bind(this);
	}

	createTodoItem(todoText){
		let items = this.state.todoItems;
		items.push({
			id: items.length+1,
			name: todoText
		});
		this.setState({todoItems: items});
	}

	render(){
		return(
			<Box>
				<TodoTitleInput items={this.state.todoItems} createTodoItem={this.createTodoItem}/>
				<TodoList items={this.state.todoItems}/>
			</Box>
		);
	}
}


ReactDOM.render(<Container/>,document.getElementById("react-container"))
