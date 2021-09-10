import React from 'react';
import Titlebar from './components/Titlebar';
import Body from './components/Body';

export default function App() {

    return (
        <div>
            <Titlebar title='ImgScrapr' />
            <Body />
            {/* <button onClick={() => {
                electron.notificationApi.sendNotification('Task Completed!');
            }}>Notify</button> */}
        </div>
    )
}