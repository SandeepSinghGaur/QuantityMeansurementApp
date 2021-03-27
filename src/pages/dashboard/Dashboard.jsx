import React, { useState } from 'react'
import './Dashboard.scss'
import Length from '../../components/length/Length'
import Temp from '../../components/temperature/Temp'
import Volume from '../../components/volume/Volume'
import beakerBW from './../../assets/beaker-black&white.svg';
import beaker from './../../assets/beaker.svg';
import temperatureBW from './../../assets/hot-black&white.svg';
import temperature from './../../assets/hot.svg';
import scaleBW from './../../assets/scale-black&white.svg';
import scale from './../../assets/scale.svg';
const Dashboard = () => {
    const [lengthStatus, setLengthStatus] = useState(false);
    const [tempStatus, setTempStatus] = useState(false);
    const [volumeStatus, setVolumeStatus] = useState(false);

    const handleLength = () => {
        setLengthStatus(true);
    };
    const handleTemp = () => {
        setTempStatus(false);
    };
    const handleVolume = () => {
        setVolumeStatus(false);
    };
    const overOnTemp = (e) => {
        e.currentTarget.src = temperature;
    }
    const outFromTemp = (e) => {
        e.currentTarget.src = temperatureBW;
    }
    const overOnBeaker = (e) => {
        e.currentTarget.src = beaker;
    }
    const outFromBeaker = (e) => {
        e.currentTarget.src = beakerBW;
    }
    const overOnScale = (e) => {
        e.currentTarget.src = scale;
    }
    const outFromScale = (e) => {
        e.currentTarget.src = scale;
    }
    return (
        <div>
            <div className="mainClass">
                <div className="greetingMsz">
                    Welcome to Quantity Measurement
                </div>
            </div>
            <div className='type'>
                <div className="choose">
                    choose type
                </div>
            </div>
            <div className="chooseBlock">
                <div className='mainBlock'>
                    <div className={lengthStatus ? "dashboard-length" : "iconBlock len"} onClick={handleLength}>
                        <div className="lengthOfIcon">
                            <img src={scaleBW} alt='scale'  onMouseOver={overOnScale} onMouseOut={outFromScale}/>
                        </div>
                        <div className="desc">Length</div>
                    </div>
                    <div className={tempStatus ? "dashboard-length" : "iconBlock tmp"} onClick={() => handleTemp()}>
                        <div className="lengthOfIcon">
                            <img src={temperatureBW} alt='temperatureBW' onMouseOver={overOnTemp} onMouseOut={outFromTemp} height="47px" />
                        </div>
                        <div className="desc">Temperature</div>
                    </div>
                    <div className={volumeStatus ? "dashboard-length" : "iconBlock vol"} onClick={() => handleVolume()}>
                        <div className="lengthOfIcon">
                            <img src={beakerBW} alt='beakerBW' onMouseOver={overOnBeaker} onMouseOut={outFromBeaker} />
                        </div>
                        <div className="desc">Volume</div>
                    </div>
                </div>
            </div>
            {lengthStatus ? <div><Length /></div> : null};
            {tempStatus ? <div><Temp /></div> : null};
            {volumeStatus ? <div><Volume /></div> : null};
        </div>
    )
}
export default Dashboard;