import React from 'react';
import Header from './components/Header';
import Body from './components/Body';

export default function App() {

    return (
        <div className='container'>
            <Header title='ImgScrapr' />
            <Body />
            <button onClick={() => {
                electron.notificationApi.sendNotification('Task Completed!');
            }}>Notify</button>
        </div>
    )
}