import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'

function TODOSearch() {
    const  {searchValue, setSearchValue} = React.useContext(TodoContext)
    // const [ searchValue, setSearchValue] = React.useState('')
    const onSearchValueChange = (event) => {
        // console.log('contenido input: ', event.target.value);
        setSearchValue(event.target.value)
    }
    return (
        <input className="TodoSearch" placeholder="Filtrar por..."
        value={searchValue}
        onChange={onSearchValueChange} />
        // <p>{searchValue}</p>
    )
}
export { TODOSearch };