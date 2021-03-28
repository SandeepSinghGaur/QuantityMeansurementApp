import React,{ useState }from 'react';
import './Volume.scss'

function Volume() {
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
                        <option value="1">Litres</option>
                        <option value="2">Mililitres</option>
                        <option value="3">Gallons</option>
                    </select>
                </div>
            </div>
            <div className="outer-box">
                <div className="heading">TO</div>
                <div className="content">
                    <div className="number">1000</div><hr></hr>
                    <select className="selection" name='option' onChange={handleChange}>
                        <option value="1">Litres</option>
                        <option value="2">Mililitres</option>
                        <option value="3">Gallons</option>
                    </select>
                </div>
            </div>

        </div>
    )
}
export default Volume;