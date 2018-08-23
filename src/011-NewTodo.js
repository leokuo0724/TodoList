import React from "react"
import ReactDOM from "react-dom"
import styled, {keyframes} from 'styled-components'

const Input = styled.input`
	&:focus{
		outline: none;
	}
	width: 250px;
	height: 18px;
	border: none;
	margin-top: 10px;
	margin-left: 10px;
	font-size: 14px;
`
const Button = styled.button`
	width: 40px;
	height: 20px;
	line-height: 20px;
	text-align: center;
	font-size: 16px;
	border: none;
	background: none;
`

export default class NewTodo extends React.Component{
	constructor(){
		super();
		this.state = {
			inputText:'',
		};
		this.updateInputText = this.updateInputText.bind(this);
		this.createTodoItem = this.createTodoItem.bind(this);
	}

	updateInputText(ev){
		this.setState({
			inputText: ev.target.value
		});
	}

	createTodoItem(){
		console.log(this.state.inputText);
		if(this.state.inputText){
			this.props.createTodoItem && this.props.createTodoItem(this.state.inputText);
			this.setState({
				inputText:''
			});
		}
	}

	submit = (ev) => {
		ev.preventDefault();
		this.createTodoItem();
	}

	render(){
		return(
			<form onSubmit={this.submit}>
				<Input placeholder="new todo..." value={this.state.inputText}
					onChange={this.updateInputText}></Input>
				<Button onClick={this.createTodoItem}>+</Button>
			</form>
		);
	}
}
