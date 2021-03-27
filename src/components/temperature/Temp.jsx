import React from 'react';
import { useState } from 'react'
import './Temp.scss'

function Temp() {
    const [option, setOption] = useState(false);
    function handleChange(event) {
        setOption(event.target.value)
    }
    return (
        <div className="main">
            <div className="outer-box">
                <div className="heading">FROM</div>
                <div className="content">
                    <div className="number">0</div><hr></hr>
                    <select className="selection" name='option' onChange={handleChange}>
                        <option value="1">Celsius</option>
                        <option value="2">Fohrenheite</option>
                        <option value="3">Kelvin</option>
                    </select>
                </div>
            </div>
            <div className="outer-box">
                <div className="heading">TO</div>
                <div className="content">
                    <div className="number">32</div><hr></hr>
                    <select className="selection" name='option' onChange={handleChange}>
                        <option value="1">Celsius</option>
                        <option value="2">Fohrenheite</option>
                        <option value="3">Kelvin</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
export default Temp;