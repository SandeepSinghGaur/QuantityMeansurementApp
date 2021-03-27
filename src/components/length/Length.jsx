import React from 'react';
import { useState } from 'react'
import './Length.scss'

function Length() {
    const [option, setOption] = useState(false);
    function handleChange(event) {
        setOption(event.target.value)
    }
    return (
        <div className="main">
            <div className="outer-box">
                <div className="heading">FROM</div>
                <div className="content">
                    <div className="number">1</div><hr></hr>
                    <select className="selection" name='option' onChange={handleChange}>
                        <option value="1">Centimeters</option>
                        <option value="2">Inch</option>
                        <option value="3">Feet</option>
                        <option value="3">Yard</option>
                    </select>
                </div>
            </div>
            <div className="outer-box">
                <div className="heading">TO</div>
                <div className="content">
                    <div className="number">100</div><hr></hr>
                    <select className="selection" name='option' onChange={handleChange}>
                        <option value="1">Centimeters</option>
                        <option value="2">Inch</option>
                        <option value="3">Feet</option>
                        <option value="3">Yard</option>
                    </select>
                </div>
            </div>

        </div>
    )
}
export default Length;