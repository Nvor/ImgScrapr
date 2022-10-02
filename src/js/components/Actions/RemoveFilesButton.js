import React from 'react';
import './RemoveFilesButton.scss';

const RemoveFilesButton = () => {
    const clearFiles = () => {
        console.log('clear files!');
    }

    return (
        <a className="remove-files-button"
            onClick={clearFiles}>Remove Files</a>
    )
}

export default RemoveFilesButton;