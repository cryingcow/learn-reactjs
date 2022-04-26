import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
TodoList.propTypes = {
    TodoList: PropTypes.array,
};
TodoList.defaultProp = {
    TodoList: []
}

function TodoList({ todoList }) {

    return (
        <ul>
            {todoList.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;