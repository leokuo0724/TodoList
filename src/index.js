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
		margin-top: 8px;
		height: 245px;
		overflow: scroll;
	}
	li{
		display: block;
		height: 30px;
		line-height: 30px;
		margin-left: 10px;
		list-style: none;
		cursor: pointer;
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
	${'' /* margin-top: 20px; */}
	width: 300px;
	height: 350px;
	border-radius: 6px;
	background: white;
	padding:10px;
`

class Container extends React.Component{
	constructor(){
		super();
		let todoItems = [
			{groupid:'personal', name:'play the piano', isDone: false},
			{groupid:'homework', name:'Homework', isDone: false},
			{groupid:'project', name:'React projects', isDone: false}
		];
		let groups = [
			{ name: 'All', id:undefined},
			{ name: 'personal', id:'personal'},
			{ name: 'homework', id:'homework'},
			{ name: 'project', id:'project'}
		];
		this.state = {
			todoItems: todoItems,
			groups: groups,
			activeGroupId: undefined
		};

		this.createTodoItem = this.createTodoItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.clearDoneItem = this.clearDoneItem.bind(this);
	}

	createTodoItem(todoText){
		let items = this.state.todoItems;
		items.push({
			groupid: undefined,
			name: todoText,
			isDone: false
		});
		this.setState({todoItems: items});
	}

	removeItem(removingtodo){
		const newtodos = this.state.todoItems.filter((todo, index)=>{
			return !(todo.id == removingtodo.id && removingtodo.name === todo.name)
		});
		this.setState({
			todoItems: newtodos
		});
	}
	clearDoneItem(){
		const newtodos = this.state.todoItems.filter((todo, index)=>{
			return todo.isDone === false;
		});
		this.setState({
			todoItems: newtodos
		});
	}


	render(){
		return(
			<Box>
				<TodoTitleInput items={this.state.todoItems} createTodoItem={this.createTodoItem}/>
				<TodoList items={this.state.todoItems}
					removeItem={this.removeItem}
					clearDoneItem={this.clearDoneItem}/>
			</Box>
		);
	}
}


ReactDOM.render(<Container/>,document.getElementById("react-container"))
