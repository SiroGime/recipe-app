import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchRecipesAction, getNameRecipesAction } from '../redux/searchDucks';
import Button from './Button';
import './Search.css';

const Search = () => {
    const dispatch = useDispatch();
    const [ value, setValue ] = useState('');
    const handleChange = e => setValue(value => value = e.target.value);
    const handleClick = e => {
        e.preventDefault();
        dispatch(getNameRecipesAction(value));      
        dispatch(getSearchRecipesAction());
    };
    return (
        <div className="search__container">
            <form onSubmit={handleClick}>
                <input className="search" type="text" 
                    onChange={handleChange}
                    value={value}
                    placeholder="Search"
                />
                <Button 
                    name={'search__button'}
                    text={<i className="fas fa-search"></i>}
                    submit={'submit'}
                />
            </form>
        </div>
    )
}

export default Search;
