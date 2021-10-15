import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faWindowMaximize, faMinus  } from "@fortawesome/free-solid-svg-icons";
import './Titlebar.scss'

const Titlebar = ({ title }) => {
    return (
        <div className="titlebar">
            <div className="titlebar-options">
                <span>ImgScrapr</span>
            </div>
            <div className="titlebar-buttons">
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

export default Titlebar;