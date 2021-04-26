import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import './SearchRecipe.css';

const SearchRecipe = () => {
    const recipes = useSelector(store => store.searchRecipes.array);
    return (
        <div className="search__recipe_container">
            { recipes !== null ? recipes.map(item => (
                <Card 
                    key={item.idMeal}
                    recipe={item}
                    name={'card__container'}
                />)) :
                <div className="not_found">
                    <h4 className="recipes_not_found">
                        Recipes not found 
                    </h4>
                </div>
            }
        </div>
    )
}

export default SearchRecipe;