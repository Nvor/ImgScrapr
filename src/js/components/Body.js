import React from 'react'
import UploadPanel from './UploadPanel';
import InspectionPanel from './InspectionPanel';
import ActionPanel from './ActionPanel'

const Body = () => {
    return (
        <div>
            <UploadPanel />
            <InspectionPanel />
            <ActionPanel />
        </div>
    )
}

export default Body