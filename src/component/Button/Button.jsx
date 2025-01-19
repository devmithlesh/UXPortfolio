import React from 'react'
import style from './Button.module.css'
const Button = ({ className, name, svgIcon, imgIcon, buttonColor }) => {
    return (
        <button className={`button ${className} ${style[buttonColor]}`}>
            {
                imgIcon && imgIcon
            }
            {name}
            {svgIcon && svgIcon}
        </button>
    )
}

export default Button