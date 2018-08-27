import React, { Component } from 'react';
import Title from './01-TodoTitleInput';
import TodoList from './02-TodoList';

export default class GroupTabContent extends Component{
	render(){
		return(
			<div>
				<TodoTitleInput
					items={this.props.items}
					createTodoItem={this.props.createTodoItem}
				/>
				<TodoList
					items={this.props.items}
					removeItem={this.props.removeItem}
					clearDoneItem={this.props.clearDoneItem}
				/>
			</div>
		);
	}
}
