import React from 'react';
import './Temp.scss'
import dropimg from './../../assets/drop-down-arrow.png';
function Temp() {
    return (
        <div className="main">
            <div className="outer-box">
                <div className="heading">FROM</div>
                <div className="content">
                    <div className="number">0</div><hr></hr>
                    <div className="length">Celsius
                    <div className="image">
                            <img src={dropimg} alt='dropimg' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="outer-box">
                <div className="heading">TO</div>
                <div className="content">
                    <div className="number">32</div><hr></hr>
                    <div className="length">Fohrenheit
                    <div className="image">
                            <img src={dropimg} alt='dropimg' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Temp;