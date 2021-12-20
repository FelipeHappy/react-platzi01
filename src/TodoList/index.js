import React from 'react';
import './TodoList.css'

function TODOList(props) {
    return (
        <section>
            <ul className="TodoList">
                {props.children}
            </ul>
        </section>
    );
}
export { TODOList };