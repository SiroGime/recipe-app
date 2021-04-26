import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomRecipeAction } from '../redux/randomDucks';
import Card from './Card';
import Button from './Button';
import './RandomRecipe.css';

const RandomRecipe = () => {
    const dispatch = useDispatch();
    const randomRecipe = useSelector(store => store.randomRecipe.array);
    const recipe = randomRecipe[0];
    useEffect(() => {
        dispatch(getRandomRecipeAction());
    }, [dispatch])  
    const handleClick = e => {
        e.preventDefault()
        dispatch(getRandomRecipeAction());
    };
    
    return (
        <div>
            { (recipe !== undefined) ? 
                <div className="randomCard__container">
                    <Card 
                        recipe={recipe}
                        name={'randomCard'}
                    />
                    <Button 
                        name={'random__recipe__button'}
                        text={'Click to random meal'}
                        onClick={handleClick}
                    />
                </div>
                : ''
            }
        </div>
    )
}

export default RandomRecipe;
