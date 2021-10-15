import React from 'react';

//Remove this later
const MetadataPlaceholders = [
    {
        MetadataName: 'Name1',
        MetadataValue: 1
    },
    {
        MetadataName: 'Name2',
        MetadataValue: 2
    }
]

const InspectionPanel = () => {
    return (
        <div>
            <p>This will be the inspection area</p>
            {MetadataPlaceholders.map((meta) => (
                <p key={meta.MetadataName}>{meta.MetadataName} : {meta.MetadataValue}</p>
            ))}
        </div>
    )
}

export default InspectionPanel;