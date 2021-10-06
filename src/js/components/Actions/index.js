import React from 'react';
import CleanButton from './CleanButton';
import RemoveFilesButton from './RemoveFilesButton';
import ExportDataButton from './ExportDataButton';

const Actions = () => {
    return (
        <div>
            <CleanButton />
            <ExportDataButton />
            <RemoveFilesButton />
        </div>
    )
}

export default Actions;