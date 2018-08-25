import React from "react"
import ReactDOM from "react-dom"
import styled, {keyframes} from 'styled-components'
import NewTodo from './011-NewTodo'

const TitleInput = styled.div`
	width: 300px;
	height: 70px;
	border-bottom: 1px solid rgba(193, 193, 193, 0.8);
`

export default class TodoTitleInput extends React.Component{
	render(){
		return(
			<TitleInput>
				<h1>TodoList <span style={{fontSize: '16px'}}>({this.props.items.length})</span></h1>
				<NewTodo
					items={this.props.items}
					createTodoItem={this.props.createTodoItem}
				/>
			</TitleInput>
		);
	}
}
