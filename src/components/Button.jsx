import React from 'react';
import './../pages/style.css'


const Button=(props)=>{
    return (
        <button className={props.btnType} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button