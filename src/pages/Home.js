import React from 'react'
import Header from '../components/Header'
import Meals from '../components/Meals';
import Greet from '../components/Greet';
import './Home.css';

const Home = () => {
    return (
        <div className="container home">
            <Header />
            <Greet />
            <Meals />
        </div>
    );
}

export default Home;
