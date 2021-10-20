import React from 'react';
import CleanButton from './CleanButton';
import RemoveFilesButton from './RemoveFilesButton';
import ExportDataButton from './ExportDataButton';
import './index.scss';

const Actions = () => {
    return (
        <div class="actions-container">
            <CleanButton />
            <ExportDataButton />
            <RemoveFilesButton />
        </div>
    )
}

export default Actions;