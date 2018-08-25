import React from "react"
import ReactDOM from "react-dom"
import styled, {keyframes} from 'styled-components'
import { Button } from './00-StyledComponents'

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
const PlusButton = Button.extend`
	width: 40px;
	height: 20px;
	line-height: 20px;
	font-size: 16px;
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
				<Input
					placeholder="new todo..."
					value={this.state.inputText}
					onChange={this.updateInputText}
				></Input>
				<PlusButton onClick={this.createTodoItem}>+</PlusButton>
			</form>
		);
	}
}
