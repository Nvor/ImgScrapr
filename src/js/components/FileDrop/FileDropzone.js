import React, {useEffect, useState} from 'react';
import Dropzone from 'react-dropzone';
import './FileDropzone.scss';

const FileDropzone = (props) => {
    const [files, setFiles] = useState([]);

    const onDrop = (acceptedFiles) => {
        console.log(acceptedFiles);
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
    }

    const thumbnails = files.map(file => (
        <div className="thumbnail" key={file.name}>
            <div className="thumbnail-inner">
                <img 
                    src={file.preview}
                    className="img"
                />
            </div>
        </div>
    ));

    useEffect(() => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <div className="dp-container">
            <Dropzone 
                onDrop={onDrop}
                accept={'image/*'}
            >
                {({getRootProps, getInputProps}) => (
                    <div {...getRootProps()} className="dropzone-container">
                        <input {...getInputProps()} />
                        <span className="file-drop-message">Drop or Click</span>
                        <aside className="thumbnail-container">
                            {thumbnails}
                        </aside>
                    </div>
                )}
            </Dropzone>
        </div>
    );
}

export default FileDropzone;