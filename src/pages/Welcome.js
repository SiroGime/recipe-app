import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setNameUserAction } from '../redux/userDucks';
import Button from '../components/Button';
import './Welcome.css';

const Welcome = () => {
    localStorage.removeItem('favoritesIds');
    const [ name, setName ] = useState('');
    const [ allowed, setAllowed] = useState(true);
    const [ nextPage, setNextPage ] = useState(false);
    const value = useSelector(store => store.setNameUser.name);
    const dispatch = useDispatch();
    const handleChange = e => setName(name => name = e.target.value);
    const handleClick = e => {
        e.preventDefault();
        if(name === '' || checkName(name) === 1){
            setAllowed(false);
            return
        }else {
            setAllowed(true);
            localStorage.setItem('user', JSON.stringify(name));
            dispatch(setNameUserAction(name));
            setNextPage(true);
        }
    };
    
    const notAllowed = `123456789</>@!#"%&/=?'¿¡+*,.-_|°¬-+`;
    const checkName = (name) => {
    for(let i=0; i<name.length; i++){
        if (notAllowed.indexOf(name.charAt(i),0) !== -1){
            return 1;
        }
    }
        return 0;
    }

    return (
        <div className="container__welcome">
             <h3 className="greetings">Hello, Chef! <br/> What is your name?</h3>
             <div className="search__container">
                {
                    value === '' &&
                        <form onSubmit={handleClick}>
                            <input className="search" type="text" 
                                onChange={handleChange}
                                value={name}
                                placeholder="Name"
                            />
                            <Button 
                                name={'search__button'}
                                text={'Save'}
                                submit={'submit'}
                            >
                            </Button>
                        </form>
                }
                {
                    allowed === false && value === ''
                    && nextPage === false &&
                        <span className="not__allowed">
                            Name not Allowed
                        </span> 
                }
                {
                    nextPage === true && 
                        <Link to='/home' className="continue">
                            <Button 
                                name={'continue__button'}
                                text={'Continue'}
                            />
                        </Link> 
                }
             </div>
        </div>
    )
};

export default Welcome;