import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faWindowMaximize, faMinus  } from "@fortawesome/free-solid-svg-icons";
import './Titlebar.scss'

const Titlebar = ({ title }) => {
    return (
        <div class="titlebar">
            <div class="titlebar-options">
                <span>ImgScrapr</span>
            </div>
            <div class="titlebar-buttons">
                <a onClick={() => 
                    electron.windowApi.minimizeWindow()
                }>
                    <FontAwesomeIcon icon={faMinus } />
                </a>
                <a onClick={() => 
                    electron.windowApi.maximizeWindow()
                }>
                    <FontAwesomeIcon icon={faWindowMaximize } />
                </a>
                <a onClick={() => 
                    electron.windowApi.closeWindow()
                }>
                    <FontAwesomeIcon icon={faTimes} />
                </a>
            </div>
        </div>
    )
}

// const titlebarStyle = {
//     color: 'black'
// }

export default Titlebar