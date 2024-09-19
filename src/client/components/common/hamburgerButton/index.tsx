import React from 'react';
import './index.less';

export default function Hamburger (props){
    return (
        <>
        <input type="checkbox"  id="hamburger__check" hidden={true} />
        <label className="hamburger_buton" htmlFor="hamburger__check">
            <span >
                <span ></span>
                <span ></span>
                <span ></span>
            </span>
        </label>
        </>
    )
}