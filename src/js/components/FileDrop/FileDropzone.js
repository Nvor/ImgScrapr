import React from 'react';
import Dropzone from 'react-dropzone';
import './FileDropzone.scss';

const FileDropzone = () => {
    const onDrop = (acceptedFiles) => {
        console.log(acceptedFiles);
    }    

    return (
        <div>
            <Dropzone onDrop={onDrop}>
                {({getRootProps, getInputProps}) => (
                    <div {...getRootProps()} className="dropzone-container">
                        <input {...getInputProps()} />
                        Click or Drag and Drop!
                    </div>
                )}
            </Dropzone>
        </div>
    );
}

export default FileDropzone;