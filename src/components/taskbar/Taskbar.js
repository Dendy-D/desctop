import {useState, useEffect} from 'react'

import './taskbar.scss'

import battery from '../../resources/icons/taskbar/battery.svg'
import sun from '../../resources/icons/taskbar/sun.svg'
import moon from '../../resources/icons/taskbar/moon.svg'

const TaskBar = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString().slice(0, 5));

    useEffect(() => {
        const interval = setInterval(() => {
            let now = new Date().toLocaleTimeString().slice(0, 5);
            setTime(() => now)
        }, 1000)
    }, []);

    return (
        <header className='app__header'>
            <div className="header__aboutUs">
                <a href="#">About us</a>
            </div>
            <div className="header__time">
                {time[0] + time[1] < 12 ? `${time}am` : `${time}pm`}
            </div>
            <div className="header__panel">
                <img src={sun} alt="Light theme" />
                <span className="languages">EN</span>
                <img src={battery} alt="Battery index" />
            </div>
        </header>
    )
}

export default TaskBar;