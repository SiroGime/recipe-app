import React from 'react';
import { Link } from 'react-router-dom';
import { getRecipeAction } from '../redux/recipeDucks';
import { useDispatch } from 'react-redux';
import './Card.css';

const Card = (props) => {          
    const { strMealThumb, strMeal } = props.recipe;
    const { name } = props 
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(getRecipeAction(props.recipe));
    };

    return (
        <div className={name}>
            <div className="card">
                <div className="image__container">
                    <Link onClick={handleClick} to="/recipe">
                        <img className="image_card" src={strMealThumb}
                        alt={strMeal} />
                    </Link>
                </div>  
                <div className="name__container">
                    <h4 className="name name_card">{strMeal}</h4>
                </div>
            </div>
        </div>
    )
};

export default Card;
