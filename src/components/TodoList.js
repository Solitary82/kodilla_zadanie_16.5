import React from 'react';
import style from './TodoList.css';

const List = props => {
	const todoListElements = props.list.map(element => <li key={element.id} id={element.id} onClick={() => props.rem(element.id)}> {element.text} </li>);
	return (
		<ol className={style.TodoList}>{todoListElements}</ol>
	);
};

export default List;