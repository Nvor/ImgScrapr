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
                <a>
                    <FontAwesomeIcon icon={faMinus } />
                </a>
                <a>
                    <FontAwesomeIcon icon={faWindowMaximize } />
                </a>
                <a>
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