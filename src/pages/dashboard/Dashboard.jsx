import React, { useState } from 'react'
import './Dashboard.scss'
import Length from '../../components/length/Length'
import Temp from '../../components/temperature/Temp'
import Volume from '../../components/volume/Volume'
import beaker from './../../assets/beaker.svg';
import hot from './../../assets/hot.svg';
import scale from './../../assets/scale.svg';
const Dashboard = () => {
    const [lengthStatus, setLengthStatus] = useState(false);
    const [tempStatus, setTempStatus] = useState(false);
    const [volumeStatus, setVolumeStatus] = useState(false);

    const handleLength = () => {
        setLengthStatus(false);
    };
    const handleTemp = () => {
        setTempStatus(false);
    };
    const handleVolume = () => {
        setVolumeStatus(true);
    };
    return (
        <div>
            <div className="unit">
                <div className="welcome">
                    Welcome to Quantity Measurement
                    </div>
            </div>
            <div className='type'>
                <div className="choose">
                    choose type
                        </div>
            </div>
            <div className="choose-icon">
                <div className='IconAsset'>
                    <div className="icon1" onClick={() => handleLength()}>
                        <div className="LengthIcon">
                            <img src={scale} alt='scale' />
                        </div>
                        <div className="desc">Length</div>
                    </div>
                    <div className="icon1" onClick={() => handleTemp()}>
                        <div className="LengthIcon">
                            <img src={hot} alt='hot' />
                        </div>
                        <div className="desc">Temperature</div>
                    </div>
                    <div className="icon1" onClick={() => handleVolume()}>
                        <div className="LengthIcon">
                            <img src={beaker} alt='beaker' />
                        </div>
                        <div className="desc">Volume</div>
                    </div>
                </div>

            </div>
            {lengthStatus ?
                <div><Length /></div>
                : null};
            {tempStatus ?
                <div><Temp /></div>
                : null};
            {volumeStatus ?
                <div><Volume /></div>
                : null};
        </div>
    )
}
export default Dashboard;