import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNameRecipesAction } from '../redux/searchDucks';
import RandomRecipe from './RandomRecipe';
import SearchRecipe from './SearchRecipe';
import Search from './Search';
import Button from './Button';
import './Meals.css';

const Meals = () => {
    const valueSearchRecipe = useSelector(store => store.searchRecipes.name);
    const dispatch = useDispatch();
    const handleClickButton = e => {
        e.preventDefault();
        dispatch(getNameRecipesAction(''));
    };
    return( 
        <div className="recipes__container">
            <div className="searchRecipe__container">
                <Search />
                {
                    valueSearchRecipe !== '' ?
                        <Button 
                            name={'random__button'}
                            text={'Random Recipe'}
                            onClick={handleClickButton}
                        /> : ''

                }
            </div>     
            <div className={(valueSearchRecipe === '') ? 'recipeRandom':'recipesSearch'} >
                { valueSearchRecipe === '' ?
                    <RandomRecipe /> :
                    <SearchRecipe />                
                }
            </div>
        </div>
    );
};

export default Meals;