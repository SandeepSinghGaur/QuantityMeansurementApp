import React from 'react';
import './Length.scss'
import dropimg from './../../assets/drop-down-arrow.png';
function Length() {
    return (
        <div className="main">
            <div className="outer-box">
                <div className="heading">FROM</div>
                <div className="content">
                    <div className="number">1</div><hr></hr>
                    <div className="length">
                        Metres
                        <div className="image">
                            <img src={dropimg} alt='dropimg' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="outer-box">
                <div className="heading">TO</div>
                <div className="content">
                    <div className="number">100</div><hr></hr>
                    <div className="length">Centimetres
                    <div className="image">
                            <img src={dropimg} alt='dropimg' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Length;