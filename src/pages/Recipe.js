import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addRecipeToFavoriteAction } from '../redux/favoritesDucks';
import './Recipe.css';
import NotFound from './NotFound';

const Recipe = () => {
    const dispatch = useDispatch();
    const recipe = useSelector(store => store.getRecipe.dataRecipe);
    const favorites = useSelector(store => store.addRecipeToFavorite.array);
    const [ scroll, setScroll ] = useState(false);
    const [ favorite, setFavorite] = useState(false);
    useEffect(() => {
        if(recipe.length !== 0 && recipe.strMeal.length > 45)setScroll(true);   
        if(favorites.length !== 0 ){
            favorites.map(item => (
            item.idMeal === recipe.idMeal ? setFavorite(true) : '' 
        ))};
    }, [favorites, recipe])

    const createIngredients = () => {
        const ingredients = [];
        let n = 0;
        for(let i=1; i<=20; i++){
            if(recipe.['strIngredient'+i] === '' || recipe.['strIngredient'+i] === null || recipe.['strIngredient'+i] === undefined) break;
            ingredients.push(recipe.['strIngredient'+i] +' - '+ recipe.['strMeasure'+i]);
        }
        return(
            ingredients.map(ingredient => (
                <li key={n += 1} className="ingredient">
                    {ingredient}
                </li>
            ))
        );
    };

    const addFavoriteLocalStorage = favoriteId => {
        const favoritesIds = getFavoritesLocalStorage();        
        localStorage.setItem('favoritesIds', JSON.stringify([...favoritesIds, favoriteId]));
    };
    
    const removeFavoriteLocalStorage = favoriteId => {
        const favoritesIds = getFavoritesLocalStorage();   
        localStorage.setItem('favoritesIds', JSON.stringify(favoritesIds.filter(favorite => favorite.idMeal !== favoriteId)));
    };
    
    const getFavoritesLocalStorage = () => {
        const favoritesIds = JSON.parse(localStorage.getItem('favoritesIds'));
        return favoritesIds === null ? [] : favoritesIds;
    };
    
    const handleClick = () => {
        if(!favorite){
            setFavorite(favorite => !favorite);
            addFavoriteLocalStorage(recipe);
            const recipes = getFavoritesLocalStorage();
            dispatch(addRecipeToFavoriteAction(recipes))
        }else {
            setFavorite(favorite => !favorite);
            removeFavoriteLocalStorage(recipe.idMeal);
            const recipes = getFavoritesLocalStorage();
            dispatch(addRecipeToFavoriteAction(recipes))        }
    };
    
    return (
            recipe.length !== 0 ?             
               <div className="container recipe__container ">
                    <div className="image_recipe_container">
                        <div className="link">
                            <Link to="/home"><i className="fas fa-arrow-circle-left"></i></Link>
                        </div>
                        <img className="image_recipe"
                        src={recipe.strMealThumb} alt={recipe.strMeal} />
                    </div>
                    <div className={ scroll ? 'recipe scroll' : 'recipe' }>
                        <div className="header">
                            <h4 className="name">{recipe.strMeal}</h4>
                            <Button 
                                name={favorite ? 'favorite__button active' :'favorite__button'}
                                text={<i className="fas fa-heart"></i>}
                                onClick={handleClick}
                            />
                        </div>
                        <div className="container__ingredients">
                            <h4 className="title_ingredients">Ingredients</h4>
                            <div className="ingredients">
                                <ul className="list_ingredients">
                                    {createIngredients()}
                                </ul>
                            </div>
                            <div className="instructions">
                                <h4 className="title_instructions">
                                    Instructions
                                </h4>
                                <p>{recipe.strInstructions}</p>
                            </div>
                        </div>
                    </div>
                </div>
            :               
            <NotFound />
    )
};

export default Recipe;