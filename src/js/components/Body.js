import React from 'react'
import FileDropPanel from './FileDropPanel';
import InspectionPanel from './InspectionPanel';
import ActionPanel from './ActionPanel'
import './Body.scss'

const Body = () => {
    return (
        <div className="container">
            <div className="fileDropPanel">
                <FileDropPanel />
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