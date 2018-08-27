import React, { Component } from 'react';
import styled from 'styled-components';

export default class GroupSwitch extends React.Component{
	render(){
			const groupNode = this.props.groups.map((group, index)=>{
				return (
				<button
					key={index}
					onClick={(e)=>this.props.switchGroup(group.id)}
					active={this.props.activeGroupId === group.id}
				>
					{group.name}
				</button>
				);
			});
		return <div>{groupNode}</div>
	}
}
