import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setNameUserAction } from '../redux/userDucks';
import './Greet.css';

const Greet = () => {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'));
    dispatch(setNameUserAction(user));
    const name = useSelector(store => store.setNameUser.name);    
    return (
        <div className="greet__container">
            <div className="greet"> 
                <h2 className="greetings">Hello, {name}!</h2>
                <h4 className="ask">What do you want to cook today?</h4>
            </div>
        </div>
    )
}

export default Greet;