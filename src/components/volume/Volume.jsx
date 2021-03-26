import React from 'react';
import './Volume.scss'
import dropimg from './../../assets/drop-down-arrow.png';
function Volume() {
    return (
        <div className="main">
            <div className="outer-box">
                <div className="heading">FROM</div>
                <div className="content">
                    <div className="number">1</div><hr></hr>
                    <div className="length">Liters
                    <div className="image">
                            <img src={dropimg} alt='dropimg' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="outer-box">
                <div className="heading">TO</div>
                <div className="content">
                    <div className="number">1000</div><hr></hr>
                    <div className="length">MilliLitres
                    <div className="image">
                            <img src={dropimg} alt='dropimg' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Volume;