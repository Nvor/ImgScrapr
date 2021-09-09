import React from 'react'
import UploadPanel from './UploadPanel';
import InspectionPanel from './InspectionPanel';
import ActionPanel from './ActionPanel'
import './Body.scss'

const Body = () => {
    return (
        <div className="container">
            <div className="uploadPanel">
                <UploadPanel />
            </div>
            <div className="inspectionPanel">
                <InspectionPanel />
            </div>
            <div className="actionPanel">
                <ActionPanel />
            </div>
        </div>
    )
}

export default Body