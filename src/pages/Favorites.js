import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRecipeToFavoriteAction } from '../redux/favoritesDucks';
import Card from '../components/Card';
import Header from '../components/Header';
import './Favorites.css';

const Favorites = () => {
    const getFavoritesLocalStorage = () => {
        const favoritesIds = JSON.parse(localStorage.getItem('favoritesIds'));
        return favoritesIds === null ? [] : favoritesIds;
    };
    const dispatch = useDispatch();
    useEffect(() => {
        const recipes = getFavoritesLocalStorage();
        dispatch(addRecipeToFavoriteAction(recipes))
    }, [dispatch]);
    const favorites = useSelector(store => store.addRecipeToFavorite.array);    
    return (
        <div className="container container__favorites">
            <Header />
            <h2 className="title_favorite">Favorites Meals</h2>
            <div className="favorites__cards">
                {
                    favorites.length !== 0 ?
                        favorites.map(item => (
                            <Card 
                                key={item.idMeal}
                                recipe={item}
                                name={'card__container'}
                            />
                        )) : 
                        <div className="not_found">
                            <h4 className="favorites_not_found">
                                You don´t have any favorite meal!
                            </h4>
                        </div>
                }
            </div>
        </div>
    )
};

export default Favorites;
