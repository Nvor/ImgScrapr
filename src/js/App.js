import React from 'react';

export default function App() {

    return (
        <>
            <h1>Drop an image!</h1>
            <button onClick={() => {
                electron.notificationApi.sendNotification('Task Completed!');
            }}>Notify</button>
        </>
    )
}