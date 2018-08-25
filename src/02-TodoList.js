import React from "react"
import ReactDOM from "react-dom"
import styled, {keyframes} from 'styled-components'
import TodoItem from './021-TodoItem'

export default class TodoList extends React.Component{
	render(){
		return(
			<TodoItem items={this.props.items}
				removeItem={this.props.removeItem}
				clearDoneItem={this.props.clearDoneItem}/>
		);
	}
}
