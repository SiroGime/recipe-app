import React from 'react';
import './Button.css';

const Button = (props) => {
    const { name, text, submit, onClick } = props;
    return (
        <>
            <button type={submit} className={name}
            onClick={onClick}>
                {text}
            </button>
        </>
    )
};

export default Button;
