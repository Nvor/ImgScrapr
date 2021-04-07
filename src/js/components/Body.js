import React from 'react'
import UploadPanel from './UploadPanel';
import InspectionPanel from './InspectionPanel';
import ActionPanel from './ActionPanel'
import './Body.scss'

const Body = () => {
    return (
        <div className="container">
            <div className="leftPanel">
                <UploadPanel />
            </div>
            <div className="rightPanel">
                <InspectionPanel />
            </div>
            <div className="bottomPanel">
                <ActionPanel />
            </div>
        </div>
    )
}

export default Body